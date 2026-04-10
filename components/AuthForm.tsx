'use client';

import Link from 'next/link';
import { useState } from 'react';
import { createClient } from '@/lib/supabase/client';

type AuthMode = 'login' | 'signup';

type AuthFormProps = {
  mode: AuthMode;
};

export default function AuthForm({ mode }: AuthFormProps) {
  const supabase = createClient();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const isLogin = mode === 'login';

  async function handleSubmit(formData: FormData) {
    const formEmail = String(formData.get('email') || '').trim();
    const formPassword = String(formData.get('password') || '');

    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!formEmail || !formPassword) {
      setError('Email and password are required.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: formEmail,
          password: formPassword,
        });

        if (signInError) {
          setError(signInError.message);
          setLoading(false);
          return;
        }

        window.location.href = '/dashboard';
        return;
      }

      const redirectUrl = `${window.location.origin}/auth/callback`;
      const { error: signUpError } = await supabase.auth.signUp({
        email: formEmail,
        password: formPassword,
        options: {
          emailRedirectTo: redirectUrl,
        },
      });

      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }

      setSuccess('Account created. Check your email to confirm, then sign in.');
      setEmail('');
      setPassword('');
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="glass-card auth-card">
      <div className="auth-header">
        <p className="auth-kicker">Phase 1 foundation</p>
        <h1 className="auth-title">{isLogin ? 'Welcome back' : 'Create your account'}</h1>
        <p className="auth-subtitle">
          {isLogin
            ? 'Log in to get into the app foundation now. Upload, clip generation, captions, and exports land in the next phases.'
            : 'Create your account now so the real app foundation is live before the media engine gets added.'}
        </p>
      </div>

      <form className="auth-form" action={handleSubmit}>
        <label className="field-label">
          Email
          <input
            className="field-input"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label className="field-label">
          Password
          <input
            className="field-input"
            name="password"
            type="password"
            autoComplete={isLogin ? 'current-password' : 'new-password'}
            placeholder="Enter your password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </label>

        {error ? <div className="status-box status-error">{error}</div> : null}
        {success ? <div className="status-box status-success">{success}</div> : null}

        <button className="primary-button" type="submit" disabled={loading}>
          {loading ? (isLogin ? 'Logging in...' : 'Creating account...') : isLogin ? 'Log in' : 'Create account'}
        </button>
      </form>

      <div className="auth-footer">
        <span>
          {isLogin ? 'Need an account?' : 'Already have an account?'}{' '}
          <Link className="link-inline" href={isLogin ? '/auth/signup' : '/auth/login'}>
            {isLogin ? 'Sign up' : 'Log in'}
          </Link>
        </span>

        <Link className="ghost-button" href="/">
          Back home
        </Link>
      </div>
    </section>
  );
}

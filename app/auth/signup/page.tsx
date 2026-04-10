export const dynamic = 'force-dynamic';

import AuthForm from '@/components/AuthForm';

export default function SignupPage() {
  return (
    <main className="page-shell">
      <div className="page-center hero-grid">
        <section className="glass-card hero-card">
          <span className="badge">Create account</span>
          <h1 className="hero-title">Get the foundation live first.</h1>
          <p className="hero-copy">
            This first phase puts the real shell of the product online now so upload, processing, and clip generation can slide into a strong base instead of a cheap prototype.
          </p>

          <ul className="hero-points">
            <li>
              <span className="point-dot" />
              Real user accounts.
            </li>
            <li>
              <span className="point-dot" />
              Protected app routing.
            </li>
            <li>
              <span className="point-dot" />
              Dark premium design system ready for the next phase.
            </li>
          </ul>
        </section>

        <AuthForm mode="signup" />
      </div>
    </main>
  );
}

export const dynamic = 'force-dynamic';

import AuthForm from '@/components/AuthForm';

export default function LoginPage() {
  return (
    <main className="page-shell">
      <div className="page-center hero-grid">
        <section className="glass-card hero-card">
          <span className="badge">Log in and enter the app</span>
          <h1 className="hero-title">Simple in. Strong out.</h1>
          <p className="hero-copy">
            The goal stays the same. Upload a long video, get sharp short clips, fix captions fast, and leave with something usable.
          </p>

          <ul className="hero-points">
            <li>
              <span className="point-dot" />
              No bloated controls.
            </li>
            <li>
              <span className="point-dot" />
              No fake buttons.
            </li>
            <li>
              <span className="point-dot" />
              No messy beginner confusion.
            </li>
          </ul>
        </section>

        <AuthForm mode="login" />
      </div>
    </main>
  );
}

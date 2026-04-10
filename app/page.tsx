export const dynamic = 'force-dynamic';

import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';

export default async function HomePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <main className="page-shell">
      <div className="page-center hero-grid">
        <section className="glass-card hero-card">
          <span className="badge">Dark. Clean. Real MVP.</span>
          <h1 className="hero-title">VideoClipper</h1>
          <p className="hero-copy">
            Upload one long video. Get strong short clips. Fix captions fast. Download content you would actually post.
          </p>

          <ul className="hero-points">
            <li>
              <span className="point-dot" />
              Mobile-first dark glass design from day one.
            </li>
            <li>
              <span className="point-dot" />
              Simple user flow with no clutter and no toy interface.
            </li>
            <li>
              <span className="point-dot" />
              Foundation phase is live now with real authentication.
            </li>
          </ul>

          <div className="bottom-actions">
            <Link className="primary-button" href={user ? '/dashboard' : '/auth/signup'}>
              {user ? 'Open dashboard' : 'Start now'}
            </Link>
            <Link className="secondary-button" href={user ? '/dashboard' : '/auth/login'}>
              {user ? 'Go to app' : 'Log in'}
            </Link>
          </div>
        </section>

        <section className="glass-card panel-card">
          <h2 className="panel-title">What this phase does</h2>
          <p className="panel-copy">
            This is the real app foundation. Users can create accounts, log in, stay protected behind auth, and land inside a clean dashboard shell that is ready for upload and processing in Phase 2.
          </p>

          <ul className="flow-list">
            <li className="flow-item">
              <span className="flow-number">1</span>
              <div>
                <strong>Real auth</strong>
                <div className="panel-copy">Supabase email and password login with session-aware protection.</div>
              </div>
            </li>
            <li className="flow-item">
              <span className="flow-number">2</span>
              <div>
                <strong>Protected dashboard</strong>
                <div className="panel-copy">Only logged-in users can enter the app area.</div>
              </div>
            </li>
            <li className="flow-item">
              <span className="flow-number">3</span>
              <div>
                <strong>Premium shell</strong>
                <div className="panel-copy">Dark, glassy, modern foundation already in place so the app never feels like a toy.</div>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}

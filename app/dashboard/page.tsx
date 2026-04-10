export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';
import LogoutButton from '@/components/LogoutButton';
import { createClient } from '@/lib/supabase/server';

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/login');
  }

  return (
    <main className="dashboard-shell">
      <div className="page-center">
        <header className="dashboard-topbar">
          <div>
            <p className="badge">Phase 1 complete</p>
            <h1 className="dashboard-title">Welcome, {user.email}</h1>
            <p className="dashboard-copy">
              You are inside the protected app shell now. This is where upload, processing, clip review, and caption fixing will land next.
            </p>
          </div>

          <LogoutButton />
        </header>

        <section className="dashboard-grid">
          <article className="glass-card panel-card">
            <h2 className="panel-title">App flow locked in</h2>
            <p className="panel-copy">
              The product stays simple on purpose. Users should understand the path instantly without second guessing.
            </p>

            <ul className="flow-list">
              <li className="flow-item">
                <span className="flow-number">1</span>
                <div>
                  <strong>Upload video</strong>
                  <div className="panel-copy">Single clean upload area lands in Phase 2.</div>
                </div>
              </li>
              <li className="flow-item">
                <span className="flow-number">2</span>
                <div>
                  <strong>System processes it</strong>
                  <div className="panel-copy">Transcript, moment detection, and clip generation come after foundation is stable.</div>
                </div>
              </li>
              <li className="flow-item">
                <span className="flow-number">3</span>
                <div>
                  <strong>Review clips</strong>
                  <div className="panel-copy">Preview, fix captions, and export with no clutter.</div>
                </div>
              </li>
            </ul>
          </article>

          <article className="glass-card panel-card">
            <h2 className="panel-title">Phase 1 status</h2>
            <p className="panel-copy">
              The app has real authentication, route protection, server-aware sessions, and a production-style dark interface shell ready for the next system layer.
            </p>

            <div className="mini-stat-grid">
              <div className="mini-stat">
                <span className="mini-stat-label">Authentication</span>
                <span className="mini-stat-value">Live</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-label">Dashboard protection</span>
                <span className="mini-stat-value">Live</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-label">Upload engine</span>
                <span className="mini-stat-value">Next</span>
              </div>
              <div className="mini-stat">
                <span className="mini-stat-label">Clip engine</span>
                <span className="mini-stat-value">Next</span>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

'use client';

import { createClient } from '@/lib/supabase/client';

export default function LogoutButton() {
  const supabase = createClient();

  async function handleLogout() {
    await supabase.auth.signOut();
    window.location.href = '/auth/login';
  }

  return (
    <button className="ghost-button" onClick={handleLogout} type="button">
      Log out
    </button>
  );
}

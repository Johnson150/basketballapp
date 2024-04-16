import { useState, useEffect } from 'react';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

// Logout Page

export default function LogoutPage() {
  const [confirmLogout, setConfirmLogout] = useState(false);
  const router = useRouter();

  // Handle logout when confirmLogout state is true
  useEffect(() => {
    if (confirmLogout) {
      handleLogout();
    }
  }, [confirmLogout]);

  // Logic to handle logout
  const handleLogout = async () => {
    try {
      await signOut({ redirect: false });
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);

    }
  };

  // Set confirmLogout state to true
  const handleConfirmLogout = () => {
    setConfirmLogout(true);
  };

  const handleCancelLogout = () => {
    setConfirmLogout(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      {!confirmLogout ? (
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Are you sure you want to log out?</p>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={handleConfirmLogout}>Yes, Log out</button>
          <button className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded" onClick={() => router.push('/home')}>Cancel</button>
        </div>
      ) : (
        <p>Logging out...</p>
      )}
    </div>
  );
}

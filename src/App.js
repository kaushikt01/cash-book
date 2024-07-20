import React from 'react';
import { AppLayout } from './components/AppLayout';
import RoutesComponent from './components/RoutesComponent';
import Login from './components/Login';
import { useAuth } from './utils/AuthContext';

function App() {
  const { isLoggedIn, isLoading } = useAuth();

  if (isLoading) {
    return <div>Loading...</div>; // Or a spinner/loader component
  }

  return (
    <div>
      {isLoggedIn ? (
        <>
          <AppLayout />
          <RoutesComponent />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

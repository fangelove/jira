import React from 'react';
import { AuthApp } from './auth-app';
import { useAuth } from './context/auth-context';
import { UnApp } from './unapp';
function App() {
  const {user} = useAuth()
  return (
    <div className="App">
      {
        user ? <AuthApp></AuthApp> : <UnApp></UnApp>
      }

    </div>
  );
}

export default App;

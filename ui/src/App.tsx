import './App.css';
import Login from './components/Login'
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, isLoading } = useAuth0();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (!isAuthenticated) {
    return <Login />;
  } else {
      return (
        <>
          <BrowserRouter>
            <Routes>
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
          <LogoutButton />
        </>
      );
  }

}

export default App;

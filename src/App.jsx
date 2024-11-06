import LoginForm from  './components/LoginForm.jsx';
import UserDashboard from './components/UserDashboard.jsx';
import AdminDashboard from './components/AdminDashboard.jsx';
import ErrorMessage from './components/ErrorMessage.jsx';

import React, {useState} from 'react';

function App() {

  const [isLoggedIn, setLoggedIn]=useState(false);
  const [isAdmin,setIsAdmin]=useState(false);
  const [showError, setShowError]=useState(false);

  const handleLogin=(username,password)=> {
    if (username ==='admin' && password ==='admin'){
      setIsAdmin(true);
      setLoggedIn(true);
      setShowError(false);
    }
    else if(username === 'user' && password === 'password'){
      setIsAdmin(false);
      setLoggedIn(true);
      setShowError(false);
    }
    else{
      setShowError(true);
    }
  };

  const handleLogout=()=>{
    setLoggedIn(false);
    setIsAdmin(false);
    setShowError(false);
  };
 

  return (
    <>
    {!isLoggedIn && <LoginForm  handleLogin={handleLogin}  />} 
    {isLoggedIn && isAdmin && <AdminDashboard />} 
    {isLoggedIn && !isAdmin && <UserDashboard />} 
    {!isLoggedIn && showError && <ErrorMessage />} 
    
    {isLoggedIn && <button onClick={handleLogout}>Logout</button>}
    
    </>
  );

}

export default App

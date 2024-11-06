import React, { useState } from 'react';

function LoginForm({handleLogin}){

  const [username, setUsername]=useState('');
  const [password, setPassword]=useState('');

  const onSubmit=(e)=>{
    e.preventDefault();
    handleLogin(username,password);
  }

  const handleReset=()=>{
    setUsername('');
    setPassword('');
  };

    return(
      <>
      <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 flex justify-content-center">
              <div>
                <h3 className="ms-5 mt-3 mb-3">Login Form</h3>
                <form onSubmit={onSubmit}>
                   <label for="username">Username</label>
                   <input className="ms-2" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} /> <br /> <br/>
                   <label for="pwd">Password</label>
                   <input className="ms-2" type="password"  value={password} onChange={(e)=>setPassword(e.target.value)} /> <br /> <br/>
                   <input className="ms-5" type="submit" value="Login" />
                   <input className="ms-5" type="reset" value="Reset" onClick={handleReset}/>
                </form>
                </div>
            </div>
        </div>
      </div>
      </>
    );
}

export default LoginForm
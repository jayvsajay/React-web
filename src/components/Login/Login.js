import React from 'react';
import './Login.css';

//import Link from '../Link/Link';

const Login = () => {
  return (
    
    
    <div id="main-wrapper" className="landingpage-fonts bg-blue">
    
<div className="page-wrapper ">
<div className="topnav bg-color">
  <a href="/">Home</a>
  <a href="/Signup">Signup</a></div>
<div className="container">
<div className="card card-login max mt-0 shadow-lg p-0 mb-0 bg-white rounded">
<div className="card-header"><h3>Login</h3></div>
<div className="card-body">
<form className="form-horizontal was-validated" method="POST">

<div className="form-group">
<div className="form-label-group">
<label htmlFor="id_username">Username:</label>
<input type="text" name="username" autoFocus autoCapitalize="none" autoComplete="username" maxLength="150" className="form-control" required id="id_username"/>

</div>
</div>

<div className="form-group">
<div className="form-label-group">
<label htmlFor="id_password">Password:</label>
<input type="password" name="password" autoComplete="current-password" className="form-control" required id="id_password"/>
</div>
</div>


<button type="submit" className="btn btn-primary btn-block"><i className="fa fa-sign-in"></i> Login</button>
</form>

</div>
</div>
</div>

</div>

      </div>
  )

  }
  export default Login;
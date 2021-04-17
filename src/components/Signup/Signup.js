import React from 'react';
import './signup.css';
//import Link from '../Link/Link';

const Signup = () => {
  return (
    <div id="main-wrapper" className="landingpage-fonts bg-white">
    
<div className="page-wrapper">
<div className="topnav bg-color">
  <a href="/">Home</a>
   <a href="/login">Login</a></div>
<div className="container">
<div className="card card-register mx-auto mt-7 shadow-lg p-4 mb-7 bg-white rounded">
<div className="card-header bg-white">
<div className="row ">


</div>
</div>
<div className="card-header" style={{textalign:"center"}}>Create a new Account using Email</div>
<div className="card-body">
<form method="post" action="." className="was-validated">
<input type="hidden" name="hide" />
<div className="form-group">
<div className="form-row">
<div className="col-md-6">
<div className="form-label-group">
<label htmlFor="id_first_name">First name:</label>
<input type="text" name="first_name" className="form-control" placeholder="First Name" required id="id_first_name"/>
</div>
</div>
<div className="col-md-6">
<div className="form-label-group">
<label htmlFor="id_last_name">Last name:</label>
<input type="text" name="last_name" className="form-control" placeholder="Last Name" required id="id_last_name"/>


</div>
</div>
<div className="col-md-6">
<div className="form-label-group">
<label htmlFor="id_username">Username:</label>
<input type="text" name="username" required max_length="30" className="form-control" id="id_username"/>


</div>
</div>
<div className="col-md-6">
<div className="form-label-group">
<label htmlFor="id_email">Email address:</label>
<input type="text" name="email" required max_length="30" className="form-control" id="id_email"/>


</div>
</div>
<div className="col-md-6">
<div className="form-label-group">
<label htmlFor="id_password1">Password:</label>
<input type="password" name="password1" required max_length="30" className="form-control" id="id_password1"/>


</div>
</div>
<div className="col-md-6">
<div className="form-label-group">
<label htmlFor="id_password2">Re-enter Password:</label>
<input type="password" name="password2" required max_length="30" className="form-control" id="id_password2"/>


</div>
</div>
</div>
</div>
<button className="btn btn-primary btn-block">Register</button>
</form>

</div>
</div>
</div>

</div>
</div>
)

  }
  export default Signup;
import React from 'react';
import '../css/Login.css';
export default function Login() {
  return (
    <div className='login-container'>
      <div className="loginbox">
        <div className="INPUTGROUP">
          <h2>LOGIN</h2>
          <label htmlFor="LOGIN USER">USER NAME</label>
          <input
            type="TEXT"
            name="LOGIN USER"
            placeholder="@gmail"
            id="LOGIN"
            required
          />
        </div>
        <div className="INPUTGROUP">
          <label htmlFor="LOGINPASSWORD">PASSWORD</label>
          <input
            type="password"
            placeholder="*******"
            htmlFor="LOGIN PASSWORD"
            required
          />
        </div>

        <div className="INPUTGROUP">
          <h2>
            <input type="submit" className="submit" />
          </h2>
          <h5>
            <a href="">forget password</a>
          </h5>
        </div>
      </div>

      <img src="https://smallseotools.com/pro-assets/log-img2.png" />
    </div>
  );
}

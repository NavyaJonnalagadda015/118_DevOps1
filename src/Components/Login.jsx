import React from 'react'

const Login = () => {
  return (
    <div>
        <form action="http://www.google.com">
      <table  border="2">
      <tr>
          <td colSpan="2"> User Login</td>
           </tr>
        <tr>
          <td> User Name</td>
          <td> <input type='text' required placeholder='user Name' width="150px" /></td>          
        </tr>
        <tr>
          <td> Password</td>
          <td> <input type='password' required placeholder='user Password' width="150px" /></td>          
        </tr>
        <tr>
          <td> <input type='submit' value="Login" /></td>
          <td> <input type='reset' value="Reset" /></td>
         
        </tr>
      </table>
      </form> 
    </div>
  )
}

export default Login

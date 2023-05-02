import React from "react";
import { useState } from "react";

export const FormV = () =>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // validate fields
    if (username.length < 6) {
      setError('Username must be at least 6 characters.');
      return;
    }
    if(!email){
      setError("incorrect email format");
      return;
    }

    if (password.length < 5 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
      setError('Password must be at least 5 characters and contain a digit and a special character.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match.');
      return;
    }
    if(password===confirmPassword){
      setError("");
      alert('Form submitted successfully!');
      return;
    }

    // success
    alert('Form submitted successfully!');
  };



return(
  <form className="FormV" onSubmit={handleSubmit}>
    <h1>Form Validation</h1>
  <div>
    <label htmlFor="username">Username:</label>
    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
  </div>
  <div>
    <label htmlFor="email">Email-Id:</label>
    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </div>
  <div>
    <label htmlFor="password">Password:</label>
    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </div>
  <div>
    <label htmlFor="confirmPassword">Confirm Password:</label>
    <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
  </div>
  <button type="submit">Submit</button>
  {error && <p className="spa">{error}</p>}
</form>

)
};













































































































// import { useState } from "react";

// export const FormV = () => {
//   const [user, setUser] = useState("");
//   const [email, setEmail] = useState("");
//   const [pass, setPass] = useState("");
//   const [confirmP, setConfirmP] = useState("");
//   const [error, seterr] = useState(false);

//   function HandleLogin(e) {
//     e.preventDefault();
//     if (
//       !(
//         user.length < 6 ||
//         pass.length < 5 ||
//         !/\d/.test(pass) ||
//         !/[!@#$%^&*]/.test(pass) ||
//         pass !== confirmP
//       )
//     ) {
//       window.alert("Form submitted successfully");
//       return;
//     }
//    else{
//     userhandler();
//     emailhandler();
//     passhandler();
//     Confphandler();
//    }



//   }
//   function userhandler() {
//     if (user.length < 6) {
//       seterr(true);
//       return;
//     } else {
//       seterr(false);
//       return;
//     }
//   }
//   function emailhandler() {
//     if (email.length < 6) {
//       seterr(true);
//       return;
//     } else {
//       seterr(false);
//       return;
//     }
//   }
//   function passhandler() {
//     if (pass.length < 5 || !/\d/.test(pass) || !/[!@#$%^&*]/.test(pass)) {
//       seterr(true);
//       return;
//     } else {
//       seterr(false);
//       return;
//     }
//   }
//   function Confphandler() {
//     if (pass !== confirmP) {
//       seterr(true);
//       return;
//     } else {
//       seterr(false);
//       return;
//     }
//   }

//   return (
//     <>
//       <div className="Fmain">
//         <h1>Form validation</h1>
//       </div>
//       <form >
//         <div>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             placeholder="username"
//             value={user}
//             onChange={(e) => 
//               setUser(e.target.value)
//             }
//           />
//           {error ? <span>Invalid Username</span> : ""}
//         </div>
//         <div>
//           <label htmlFor="email">Email-Id:</label>
//           <input
//             type="email"
//             id="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => 
//               setEmail(e.target.value)
              
//             }
//           />
//           {error ? <span>Invalid Email-Id</span> : ""}
//         </div>
//         <div>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="password"
//             value={pass}
//             onChange={(e) => 
//               setPass(e.target.value)
//             }
//           />
//           {error ? <span>Invalid Password</span> : ""}
//         </div>
//         <div>
//           <label htmlFor="password">Confirm-Password:</label>
//           <input
//             type="password"
//             id="password"
//             placeholder="password"
//             value={confirmP}
//             onChange={(e) => 
//               setConfirmP(e.target.value)
//             }
//           />
//           {error ? <span>password not same as confirm password</span> : ""}
//         </div>
//         <button  onClick={HandleLogin} >submit</button>
//       </form>
//     </>
//   );
// };

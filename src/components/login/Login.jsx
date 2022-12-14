import React, {useState} from 'react';
import c from "./Login.module.css";
import {MdOutlineClose} from "react-icons/md";
import { auth, provider } from '../../components/firebase/config';
import { useHistory } from 'react-router-dom';




const Login = ({openLogin, close}) => {

  const [log , setLog ] =useState(false);

  const off = ()=>{
    setLog(!log);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const history = useHistory();
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [possibleError, setPossibleError] = useState("");

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
        .then(response => {if (response) {
            history("/cabinet");
        }})
        .catch(err => alert(err.message))
    }

  const createUser = (e) => {
    e.preventDefault();
    
    auth.createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then(response => {
        if(response){
          history.push("/cabinet");
        }
      })
      .catch(err => {
        setPossibleError(err.message);
      })
  } 

  return (
    <div>
      <div className={openLogin? c.login__wrapper :c.login__inner}>
          <div className={c.login__top}>
            <div>
                  <div className={c.enter} style={log? {backgroundColor :"transparent"}: {backgroundColor :"white"}} onClick={off}>Kirish</div>
                  <div className={c.signIn} style={log? {backgroundColor :"white"}: {backgroundColor :"transparent"}} onClick={off}>Ro'yhatdat o'tish</div>
            </div>

                <MdOutlineClose className={c.login__close} onClick={close}/>
                
         </div>
          <form onSubmit={loginUser} className={ log? c.login__dn: c.login__input}>
                <input type="email" required placeholder='Email kiriting' onChange={e => {setEmail(e.target.value)}}/>
                <input type="password" required minLength={8}  placeholder="Parol kiriting" onChange={e => {setPassword(e.target.value)}}/>
                <button type='submit'>Kirish</button>
          </form>

        <form onSubmit={createUser} className={ log? c.signin__input: c.signin__dn}>
                <input type="mail" placeholder='Email kiriting'  required onChange={e => { setSignupEmail(e.target.value) }}/>
                <input type="password" placeholder='Parol kiriting' required minLength={8} onChange={e => { setSignupPassword(e.target.value) }} />
                <button type='submit'>Ro'yhatdan o'tish</button>
        </form>
        </div>
    </div>
  )
}

export default Login;

           

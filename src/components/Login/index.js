import React,{useRef} from 'react';
import style from './index.css'

export default function index(props) {
  const userInpRef = useRef();
  const passwordInpRef = useRef();
  function LoginBtn (){
    const userVal = userInpRef.current.value;
    const passVal = passwordInpRef.current.value;
    // console.log(userVal,passVal)
    props.onLogin && props.onLogin(userVal,passVal)
  }
  return (
    <div className={style.loginFrom}>
      <div className={style.item}>
        <span>账号：</span>
        <input ref={userInpRef} type="text"/>
      </div>
      <div className={style.item}>
        <span>密码：</span>
        <input ref={passwordInpRef} type="password"/>
      </div>
      <div className={style.button}>
        <button onClick={LoginBtn}>登陆</button>
      </div>
    </div>
  )
}

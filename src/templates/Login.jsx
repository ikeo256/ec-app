import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../reducks/users/operations";
import {push} from 'connected-react-router'

const Login = () => {
  const dispatch = useDispatch();


  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push('/'))}>
      {/*<button onClick={() => dispatch(signIn())}>*/}
        ログインする
      </button>
    </div>
  )
}

export default Login;
import Login from '../Login';
import { connect } from 'dva';

const mapDispatch = dispatch => ({
  onLogin(userVal,passVal){
    dispatch({
      type:'login/login',
      payload:{userVal,passVal}
    })
  }
})

export default connect(null,mapDispatch)(Login);
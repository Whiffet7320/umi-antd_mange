import Header from '../Header';
import {connect} from 'dva';

const mapState = state =>({
  userName:state.login
})
const mapDispatch = dispatch =>({
  onLoginOut(){
    dispatch({
      type:'login/loginOut'
    })
  }
})

export default connect(mapState,mapDispatch)(Header)

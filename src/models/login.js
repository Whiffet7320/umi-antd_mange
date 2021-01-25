import { routerRedux } from 'dva'

export default {
  state: null,
  reducers: {
    setLoginUser(state, { payload }) {
      return payload;
    }
  },
  effects: {
    *login({ payload }, { put }) {
      console.log(payload)
      if (payload.userVal === 'cyy' && payload.passVal === '123456') {
        // 登陆成功
        console.log(payload.userVal, payload.passVal)
        localStorage.setItem('userName', payload.userVal)
        yield put({ type: 'setLoginUser', payload: payload.userVal })
        yield put(routerRedux.push('/'))
      } else {
        window.alert('账号/密码错误！')
      }
    },
    *loginOut(action, { put }) {
      localStorage.removeItem('userName')
      yield put({ type: 'setLoginUser', payload: null })
      yield put(routerRedux.push('/login'))
    }
  },
  // 监听
  subscriptions: {
    mapLocalStorageToSetLogin({ dispatch }) {
      var userName = localStorage.getItem('userName')
      if (userName) {
        dispatch({
          type: 'setLoginUser',
          payload: userName
        })
      }
    }
  }
}
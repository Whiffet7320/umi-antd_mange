import { searchStudents } from '../services/student'
import { routerRedux } from 'dva'

export default {
  state: {
    searchObj: {
      page: 1,
      limit: 10,
      key: "",
      sex: -1
    },
    stusList: {
      cont: 0,
      datas: []
    }
  },
  reducers: {
    changeSearchObj(state, { payload }) {
      return {
        ...state,
        searchObj: {
          ...state.searchObj,
          ...payload
        }
      }
    },
    setStusList(state, { payload }) {
      return {
        ...state,
        stusList: payload,
      }
    }
  },
  effects: {
    *setSearchObj(action, { put, select }) {
      yield put({
        type: 'changeSearchObj',
        payload: action.payload
      })
      const searchObj = yield select(state => state.student.searchObj);
      yield put(routerRedux.push(`?page=${searchObj.page}&limit=${searchObj.limit}&sex=${searchObj.sex}&key=${searchObj.key}`))
    },
    *searchStu(action, { put, call, select }) {
      const searchObj = yield select(state => state.student.searchObj);
      const datas = yield call(searchStudents, searchObj)
      yield put({
        type: 'setStusList',
        payload: {
          cont: datas.cont,
          datas: datas.datas
        }
      })
    }
  },
  subscriptions: {
    fetStudent({ dispatch }) {
      dispatch({
        type: 'searchStu'
      })
    },
    listenUrl({ dispatch, history }) {
      history.listen((newLocation) => {
        console.log(newLocation)
        if (newLocation.pathname !== '/student') {
          return
        } else {
          const query = newLocation.query
          query.limit && (query.limit = +query.limit);
          query.sex && (query.sex = +query.sex);
          query.page && (query.page = +query.page);
          dispatch({
            type: 'changeSearchObj',
            payload: query
          })
          dispatch({
            type: 'searchStu'
          })
        }
      })
    }
  }
}
import { connect } from 'dva';
import StuTable from '../Student/StudentTable';

const mapState = state => ({
  stus: state.student.stusList.datas,
  current: state.student.searchObj.page,
  total: state.student.stusList.cont,
  pageSize: state.student.searchObj.limit,
  loading:state.loading.effects['student/searchStu']
})

const mapDispatch = dispatch => ({
  onChange(newPage) {
    dispatch({
      type: 'student/setSearchObj',
      payload: {
        page: newPage
      }
    }),
      dispatch({
        type: 'student/searchStu',
      })
  },
  onShowSizeChange(current, size) {
    console.log(current, size)
    dispatch({
      type: 'student/setSearchObj',
      payload: {
        limit: size
      }
    })
    dispatch({
      type: 'student/searchStu',
    })
  }
})


export default connect(mapState, mapDispatch)(StuTable)
import { connect } from 'dva';
import SearchBar from '../Student/StudentSearchBar';

const mapState = state => ({
  defaultValue: {
    sex: state.student.searchObj.sex,
    key: state.student.searchObj.key
  }
})

const mapDispatch = dispatch => ({
  onSearch(searchObj) {
    searchObj.page = 1
    dispatch({
      type: 'student/setSearchObj',
      payload: searchObj
    })
    dispatch({
      type: 'student/searchStu',
    })
  },
})

export default connect(mapState, mapDispatch)(SearchBar)
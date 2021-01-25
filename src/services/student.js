import qs from 'query-string';

const appkey = "demo13_1545210570249";
export async function getAllStudents() {
  return await fetch(`http://api.duyiedu.com/api/student/findAll?appkey=${appkey}`)
    .then(res => res.json())
    .then(res => res.data)
}
export async function getStudents(page, limit) {
  return await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=${appkey}&page=${page}&size=${limit}`)
    .then(resp => resp.json()).then(resp => resp.data);
}

export async function searchStudents({ page = 1, limit = 10, key = "", sex = -1 } = {}) {
  if (key) {
    // 搜索
    const resp = await fetch(`http://api.duyiedu.com/api/student/searchStudent?appkey=${appkey}&page=${page}&size=${limit}&search=${key}&sex=${sex}`)
      .then(resp => resp.json())
      .then(resp => resp.data);
    resp.datas = resp.searchList;
    delete resp.searchList;
    return resp;
  } else {
    const resp = await getStudents(page, limit);
    resp.datas = resp.findByPage;
    delete resp.findByPage;
    return resp;
  }
}

// 添加学生
export async function addStudent(stuObj) {
  const queryStr = qs.stringify(stuObj)
  const url = `http://api.duyiedu.com/api/student/addStudent?appkey=${appkey}&${queryStr}`;
  return await fetch(url).then(resp => resp.json())
}

// 修改学生
export async function updateStudent(stuObj) {
  const queryStr = qs.stringify(stuObj)
  const url = `http://api.duyiedu.com/api/student/updateStudent?appkey=${appkey}&${queryStr}`;
  return await fetch(url).then(resp => resp.json())
}

// 获取单个学生对象
export async function getStudentBySNo(sNo) {
  const stus = await getAllStudents();
  return stus.find(s => s.sNo === sNo);
}
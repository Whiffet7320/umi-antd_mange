import React from 'react';
import style from "./index.css"

/**
 * 分页组件
 * 属性：
 * 1. current：初始页码
 * 2. total：总数据量
 * 3. limit：页容量，每页显示的数据量
 * 4. panelNumber：数字页码最多显示多少个
 * 5. onPageChange：当页码改变的事件
 */

export default function Pager(props) {
  const pageNumber = getPageNumber(props);//尾页页码
  if(pageNumber === 0){
    return null;
  }
  let min = minPageNum(props); // 最小数字
  let max = maxPageNum(min, props, pageNumber);//最大数字
  const numbers = []
  for (let i = min; i <= max; i++) {
    numbers.push(<span key={i} onClick={()=>{toPage(i,props)}} className={i === props.current ? `${style.item} ${style.active}` : `${style.item}`}>{i}</span>)
  }
  return (
    <>
      <span
        onClick={(() => { toPage(1, props) })}
        className={props.current === 1 ? `${style.item} ${style.disabled}` : `${style.item}`}
      >首页</span>
      <span
        onClick={(() => { toPage(props.current - 1 < 1 ? 1 : props.current - 1, props) })}
        className={props.current === 1 ? `${style.item} ${style.disabled}` : `${style.item}`}
      >上一页</span>
      {/* 页码 */}
      {numbers}
      <span
        onClick={(() => { toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props) })}
        className={props.current === pageNumber ? `${style.item} ${style.disabled}` : `${style.item}`}
      >下一页</span>
      <span
        onClick={(() => { toPage(pageNumber, props) })}
        className={props.current === pageNumber ? `${style.item} ${style.disabled}` : `${style.item}`}
      >末页</span>
      <span className={style.item}>{props.current}</span>
            /
      <span>{pageNumber}</span>
    </>
  )
}

/**
 * 计算总页数
 */
function getPageNumber(props) {
  return Math.ceil(props.total / props.limit);
}
// 跳转至哪一页
function toPage(page, props) {
  if (props.current === page) {
    return
  } else {
    props.onPageChange && props.onPageChange(page);
  }
}
// 计算页码最小值
function minPageNum(props) {
  var min = props.current - Math.floor(props.panelNumber / 2)
  if (min < 1) {
    min = 1;
  }
  return min;
}

function maxPageNum(min, props, pageNumber) {
  var max = min + props.panelNumber - 1;
  if (max > pageNumber) {
    max = pageNumber;
  }
  return max;
}
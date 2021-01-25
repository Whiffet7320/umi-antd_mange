import React, { Component } from 'react';
import { Button, Input, Row, Col, Radio } from 'antd';

const { Search } = Input;

export default class StudentSearchBar extends Component {
  constructor(props) {
    super(props)
    const def = {
      sex: -1,
      key: ''
    }
    this.state = Object.assign({}, def, this.props.defaultValue);
  }
  searchClick = () => {
    this.props.onSearch && this.props.onSearch(this.state)
  }
  render() {
    return (
      <Row style={{ margin: '20px' }} className='student-searchBar' justify='start'>
        <Col>
          <Search onSearch={this.searchClick} addonBefore="关键字：" defaultValue={this.state.key} onChange={e => {
            this.setState({
              key: e.target.value
            })
          }} />
        </Col>
        <Col style={{marginLeft:'20px'}}>
          性别：
        <Radio.Group onChange={(e) => {
            console.log(e.target.value);
            this.setState({
              sex: e.target.value
            })
          }} value={this.state.sex}>
            <Radio.Button value={-1}>不限</Radio.Button>
            <Radio.Button value={0}>男</Radio.Button>
            <Radio.Button value={1}>女</Radio.Button>
          </Radio.Group>
          <Button style={{marginLeft:'20px'}} onClick={this.searchClick} danger>查询</Button>
        </Col>

      </Row>
    )
  }
}

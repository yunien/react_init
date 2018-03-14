import React, { Component } from 'react';
import { Pagination } from 'antd';

function onChange(pageNumber) {
  console.log('Page: ', pageNumber);
}

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  render() {
    const { notification, modal} = this.state;
    const { total } = this.props;
    return (
      <div className="pagination">
        <Pagination defaultCurrent={1} total={total} onChange={onChange} />
      </div>
    );
  }
}       

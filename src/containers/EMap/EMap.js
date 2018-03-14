import React, { Component } from 'react';
import './EMap.less';

export default class EMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  componentDidMount() {
    fetch('http://location.starwing.com.tw:8081/api/tag/info-detail/884aea997697', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response.json();
      } else {
          const error = new Error(response.statusText)
          error.response = response
          throw error
      }
    })
    .then((jsonResult) => {
      console.log(jsonResult);
    })
    .catch((error) => {
      console.log(error);
      console.log(error.toString());
    })
  }

  render() {
    return (
      <div id="pageEMap">
        <div className="content">
          <div>
            <label className="content-label">Please swipe the client's Rack Badge</label>
          </div>
          <div className="iconField">
            <div>absadfasdf</div>
          </div>
        </div>
      </div>
    );
  }  
}
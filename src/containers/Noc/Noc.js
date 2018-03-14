import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header.js';
import './Noc.less';
import Pagination from './components/Pagination.js';
import EmapBackground from './components/EmapBackground.js';
import ToggleSwitch from './components/ToggleSwitch.js';
import Camera from './components/Camera';

export default class Noc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bcakground: 'GUI_draft_map.png',
      expend: false,
      total: 0,
      text:'',
    };
  }
  
  toggleState = (cameraState) => {
    this.setState({expend: !this.state.expend});
  }

  updateTotal = (value, selectedOptions) => {
    console.log(value);
    this.setState({
      text: selectedOptions.map(o => o.label).join(' > '),
    });
    this.setState({ total: parseInt(value[1]) });
  }

  render() {
    return (
      <div id="pageHome">
        <Header text={this.state.text} onDataChange={this.updateTotal}/>
        <Pagination total={this.state.total}/>
        <div className='backgroundDiv'>
          <EmapBackground imgName={this.state.bcakground} />
          <ToggleSwitch expend={this.state.expend} onDataChange={this.toggleState}/>
          <div className='CameraDiv'>
            {this.state.expend && <Camera infos={'123123123'} top={10} left={5} rotate={30} />}
            {this.state.expend && <Camera infos={'4444444'} top={30} left={90} rotate={180} />}
            {this.state.expend && <Camera infos={'5555555'} top={80} left={30} rotate={270} />}
          </div>
        </div>
      </div>
    );
  }
}

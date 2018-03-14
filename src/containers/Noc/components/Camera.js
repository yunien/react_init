import React, {Component} from 'react';
import CameraImg from '../../../static/images/Camera.png';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Player from './../../../components/player';

export default class Camera extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleOK = () => {
    this.setState({open: false});
  };

  render() {
    const {infos, top, left, rotate} = this.props;

    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={false}
        onClick={this.handleOK}
      />,
    ];

    return (
      <MuiThemeProvider>
        <div className='Camera' style={{top: `${top}%`, left: `${left}%`, transform: `rotate(${rotate}deg)`}}>
          <img className='CameraImg' src={CameraImg} onClick={this.handleOpen} />
        </div>
        <div>
          <Dialog
            title="攝影機"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
          >
            name:c1攝影機 {infos} <br/>
            url:127.0.0.1:8080/c1

            <Player />

          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

import React, { Component } from 'react';
import github from '../../../static/images/github.png';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import Accessiblity from 'material-ui/svg-icons/action/supervisor-account';
import Highlight_off from 'material-ui/svg-icons/action/highlight-off';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'; 
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import { Breadcrumb, BreadcrumbItem,Container, Row, Col, Jumbotron, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Notification from './Notification';
import { Cascader } from 'antd';
import MapsPlace from '../../../static/images/place.svg';
import megas from './mega-plus.json';

const options = megas.map(mega => ({
  label: mega.name,
  value: mega.code,
  children: mega.children.map(m => ({
    label: m.name,
    value: m.code,
  })),
}));

const styles = {
  button: {
    margin: 15,
    boxShadow:0
  },
  badge: {
    boxShadow: 0,
    backgroundColor: '#6CF'
  },
};

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      escort_count: 1,
      remnant_count:2,
      abnormal_count:3,
      escort_show:"",
      title:"",
      modal: false,
      notification: [{ title: 'item 1' }, { title: 'item2' }],
    }
  }

  addToNotification = (content) => {
    const notification = this.state.notification;
    notification.push(content);

    this.setState({
      notification
    });
  }
  
  toggle = () => {
    this.setState({
      modal: !this.state.modal,
    });
  }

  handleToggle = (curTitle) =>{
    this.toggle();
    this.setState({
      title: curTitle
    });
    this.setState({ escort_count: 0})
    this.setState({ escort_show: "hidden"})
  }

  render() {
    const { notification, modal} = this.state;
    const { text, onDataChange } = this.props;

    return (
      <div className="header">
        <span>
          <Cascader options={options} onChange={onDataChange}>
            <a style={{ color: "#FFF" }} href="#"><img src={MapsPlace} />&nbsp;Mega Plus</a>
          </Cascader>
          &nbsp;
          &nbsp;
          <font color="#FFF">{text} </font>
        </span>
        <div>
          <MuiThemeProvider>
          <Badge
            badgeContent={this.state.escort_count}
            primary={true}
            badgeStyle={{ top: 20, right: 20, visibility: this.state.escort_show}}
          >
              <IconButton tooltip="Escort" onClick={() => this.handleToggle("Escort")}>
               <Accessiblity />
              </IconButton>
          </Badge>
           <Badge
            badgeContent={this.state.remnant_count}
            secondary={true}
            badgeStyle={{ top:20, right:20}}
          >
            <IconButton tooltip="Remnant">
              <NotificationsIcon />
            </IconButton>
          </Badge>
          <Badge
              badgeContent={this.state.abnormal_count}
              secondary={true}
              badgeStyle={{ top: 20, right: 20 }}
            >
              <IconButton tooltip="Abnormal">
                <Highlight_off />
              </IconButton>
          </Badge> 
          </MuiThemeProvider>
          <Modal isOpen={modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{this.state.title} Alert</ModalHeader>
            <ModalBody>
              <Notification
                notification={notification}
              />
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    );
  }
}       

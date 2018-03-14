import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table, Alert, Button } from 'reactstrap';

export default class Notification extends Component {
  static propTypes = {
    notification: PropTypes.array
  }

  render() {
    const { notification} = this.props;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>List</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {
              notification.map((item, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.title}</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}
import { Component, State } from '@stencil/core';
import { connect } from 'socket.io-client';


@Component({
  tag: 'tobias-socketio',
  styleUrl: 'tobias-socketio.css'
})
export class TobiasSocketio {
  @State() status = 'unknown'

  componentWillLoad() {
    let url = "example.com";
    const socket: any = connect(url, { transports: ['websocket'], forceNew: true});

    socket.on('status', (e) => {
      // this.status =
      console.log(e);
    });
  }

  render() {
    return (
      <div>
        <p>Hello TobiasSocketio!</p>
        <div>Status {this.status}</div>
      </div>
    );
  }
}

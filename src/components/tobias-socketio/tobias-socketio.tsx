import { Component, State } from '@stencil/core';
import { connect } from 'socket.io-client';


@Component({
  tag: 'tobias-socketio',
  styleUrl: 'tobias-socketio.css'
})
export class TobiasSocketio {
  @State() connected:boolean = false;;

  componentWillLoad() {
    let url = "example.com";
    const socket:SocketIOClient.Socket = connect(url, { transports: ['websocket'], forceNew: true});

    socket.on('connect', () => {
      this.connected = socket.connected;
    });

    socket.on('disconnect', () => {
      this.connected = socket.connected;
    });
  }

  render() {
    return (
      <div>
        <div>Connection status: {this.connected? 'connected':'disconnected'}</div>
      </div>
    );
  }
}

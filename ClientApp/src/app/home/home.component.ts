import {Component, OnInit} from '@angular/core';
import {HttpTransportType, HubConnection, HubConnectionBuilder, HubConnectionState} from '@microsoft/signalr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  protected hub: HubConnection;

  isClose: boolean;
  isReconnecting: boolean;
  isReconnected: boolean;

  ngOnInit(): void {
    this.resetState();

    this.hub = new HubConnectionBuilder()
      .withUrl(`http://localhost:5000/hub/server`,
        {
          transport: HttpTransportType.WebSockets,
          skipNegotiation: true
        })
      .withAutomaticReconnect()
      .build();

    this.hub.onclose(() => {
      this.isClose = true;
    });

    this.hub.onreconnecting(error => {
     this.isReconnecting = true;
    });
  }

  private resetState(){
    this.isClose = false;
    this.isReconnecting = false;
    this.isReconnected = false;
  }

  public isConnected() {
    return this.hub && this.hub.state === HubConnectionState.Connected;
  }

  public hubConnect(){
    this.resetState();
    this.hub.start();
  }
}

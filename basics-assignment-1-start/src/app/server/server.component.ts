import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  sessionId: number = 11;
  sessionStatus: string = 'online';
  allowNewServer = false;
  serverCreationStatus:string = 'No Server was created';
  serverName = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  getServerStatus() {
    return this.sessionStatus
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server is created! Name of the server is ' + this.serverName;

  }

  onUpdateServerName(event:any){
    this.serverName = event.target.value
  }

  ngOnInit(): void {
  }

}

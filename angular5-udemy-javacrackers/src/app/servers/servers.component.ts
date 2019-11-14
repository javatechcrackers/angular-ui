import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus= 'No Server was created.';
  allowNewServer= false;
  serverName= 'TestServer';
  userName= 'Prashant';
  serverCreated = false;
  servers=['TestServer', 'PilotServer'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was Created !! name is ' + this.serverName;
  }

  onUpdateServerName(event :any){
    this.serverName  = (<HTMLInputElement>event.target).value;
  }

}

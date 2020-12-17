import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName:string = 'Username';
  userStatus:string = "";

  onEnteringUserName(event){
    this.userName = event.target.value
  }

  onAddUser() {
    this.userStatus = "User " + this.userName +" is addded!!"
    this.userName = 'Username'
  }

  userNotEmpty(){
    if ((this.userName !== 'Username') && (this.userName !== "")){
      return true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

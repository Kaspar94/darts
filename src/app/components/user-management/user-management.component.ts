import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss']
})
export class UserManagementComponent implements OnInit {
  players: User[] = new Array();
  @Output()
  playerAdded: EventEmitter<User[]> = new EventEmitter<User[]>();
  public name:string = "";
  constructor() {

  }

  ngOnInit(): void {

  }

  addNewUser() {
    this.players.push({id: this.players.length,name: this.name, throwHistory: [], points: 0, prevPoints: 0});
    this.name = "";
    this.playerAdded.emit(this.players);
  }

}

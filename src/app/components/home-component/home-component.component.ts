import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TabDirective } from 'ngx-bootstrap/tabs';
import User from 'src/app/models/User';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.scss']
})
export class HomeComponentComponent {
  players: User[] = [];
  selectedPlayerIndex: number = 0;
  constructor() {
   }


  selectedTab(data: TabDirective) {
    console.log(data);

  }

  setPlayers(users: User[]) {
    this.players = [...users];
    console.log("@HomeComponent Players changed", this.players);
  }

  selectNextPlayer(user: User) {
    var currentIndex = this.players.indexOf(user);
    console.log(currentIndex);
    this.selectedPlayerIndex = (this.selectedPlayerIndex + 1) % this.players.length;
    console.log(this.selectedPlayerIndex);
    console.log(this.players[this.selectedPlayerIndex]);
  }

}

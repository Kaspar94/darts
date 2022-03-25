import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import User from 'src/app/models/User';

@Component({
  selector: 'app-points-adder',
  templateUrl: './points-adder.component.html',
  styleUrls: ['./points-adder.component.scss']
})
export class PointsAdderComponent implements OnChanges, OnInit {

  public values: number[] = Array.from({length: 20}, (_, i) => ++i);
  @Input()
  public get player(): User {
    return this._player;
  }
  public set player(value: User) {
    this._player = value;
  }

   private _player!: User;


  pointsCalculated: number = 0;
  disabled2: boolean = false;
  disabled3: boolean = false;
  thrownValues: number[] = [];
  selected?: number;

  @Output() finished: EventEmitter<User> = new EventEmitter<User>();


  ngOnInit(): void {
    console.log(this._player, this.player);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }



  addPointsToUser() {
    if(this.player == null) return;
    console.log(this.player.throwHistory.concat(this.thrownValues));
    this.player.throwHistory = this.player.throwHistory.concat(this.thrownValues);
    this.player.prevPoints = this.player.points;
    this.player.points += this.pointsCalculated;
    console.log(this.player);
    this.finished.emit(this.player);
    this.pointsCalculated = 0;
    this.thrownValues = [];
    this.resetAfterCommit();

  }

  selectValue(val: number) {
    console.log(val);
    this.selected = val;
  }

  multiply(nr: number) {
   if(this.selected == undefined) return;
   if(nr == 2) {
      this.disabled2 = true;
    }
    if(nr == 3) {
      this.disabled3 = true;
    }

    this.selected *= nr;
  }
  commit() {
    if(this.selected == undefined || this.selected == null || this.selected < 0) return;
    this.thrownValues.push(this.selected);
    this.pointsCalculated = this.thrownValues.reduce((acc, val) => acc + val, 0);
    this.resetAfterCommit();
  }

  undo(id: number) {

  }


  resetAfterCommit() {
    this.selected = 0;
    this.disabled2 = false;
    this.disabled3 = false;
  }


}

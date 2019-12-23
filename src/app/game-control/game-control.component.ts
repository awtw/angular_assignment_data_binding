import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  interval;
  @Output() intervalFired = new EventEmitter<number>();
  lastNamber = 0;
  constructor() { }

  ngOnInit() {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.lastNamber + 1);
      this.lastNamber++;
    },1000);
  }
  onPauseGame(){
    clearInterval(this.interval);
    console.log('Stop Game')
  }

}

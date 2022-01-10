import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-todu',
  templateUrl: './input-todu.component.html',
  styleUrls: ['./input-todu.component.css'],
})
export class InputToduComponent implements OnInit {
  inputValue = '';

  @Output() addList = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
  add() {
    this.addList.emit(this.inputValue);
    this.inputValue = '';
  }
}

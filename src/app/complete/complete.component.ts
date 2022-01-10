import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataList } from '../app.component';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.css']
})
export class CompleteComponent implements OnInit {
  @Input() dataSource: DataList[] = [];

  @Output() complete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  handleCompeleted(index: number) {
    this.complete.emit(index);
  }
}

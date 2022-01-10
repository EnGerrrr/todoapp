import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataList } from '../app.component';

@Component({
  selector: 'app-list-todu',
  templateUrl: './list-todu.component.html',
  styleUrls: ['./list-todu.component.css']
})
export class ListToduComponent implements OnInit {
  @Input() dataSource: DataList[] = [];

  @Output()  deleteItem = new EventEmitter<number>();
 @Output() completedItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDelete(index: number) {
    this.deleteItem.emit(index);
  };
  handleCompeleted(id: number) {
    this.completedItem.emit(id);
  }
}

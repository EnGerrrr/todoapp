import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dataSource: DataList[] = [];

  constructor() {}

  ngOnInit() {}

    handleAdd(name: string) {
      this.dataSource.push({ id: Date.now(), name , completed :false});
    }

    handleDelete(index: number) {
      this.dataSource.splice(index,1);
    }
    handleCompeleted(id: number) {
      this.dataSource[id].completed = !this.dataSource[id].completed;
    }
}

export interface DataList {
  id: number;
  name: string;
  completed: boolean;
}

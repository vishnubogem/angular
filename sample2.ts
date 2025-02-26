// src/app/list.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-list',
  template: `<ul><li *ngFor="let item of items">{{ item }}</li></ul>`
})
export class ListComponent implements OnInit {
  items: string[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.items = this.dataService.getData();
  }
}

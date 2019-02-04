import { Component, OnInit } from '@angular/core';
import { Item } from '../item'
import { ITEMS } from '../mock-item'

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {
  
  items = ITEMS;
  selectedItem: Item;  

  constructor() { }

  ngOnInit() {
  }

  onSelect(item:Item): void{
    this.selectedItem = item;
  }
}

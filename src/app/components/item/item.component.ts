import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';
import { TimePipe } from 'src/app/pipes/time.pipe';
import { IonIcon } from "@ionic/angular/standalone";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    imports: [IonIcon, 
      TimePipe,
      CommonModule
    ]
})
export class ItemComponent {
  
  @Input()
  item!: IItem;
  
  @Output()
  onEditItem = new EventEmitter<IItem>();
  
  @Output()
  onDeleteItem = new EventEmitter<string>();
  
  @Output()
  onToggleItemStatus = new EventEmitter<IItem>();
  

  updateItem(){
    this.onEditItem.emit(this.item);
  }

  updateCheckedStatus(){
    this.item.isDone = !this.item.isDone;
    this.onToggleItemStatus.emit(this.item);
  }

  deleteItem(){
    this.onDeleteItem.emit(this.item.id);
  }
}

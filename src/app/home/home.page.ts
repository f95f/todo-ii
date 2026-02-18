import { Component, inject, OnInit } from '@angular/core';
import { IonContent, IonIcon } from '@ionic/angular/standalone';
import { StorageService } from '../services/storage.service';
import { IList } from '../interfaces/ilist';
import { ColorService } from '../services/color.service';
import { IItem } from '../interfaces/item';
import { InputComponent } from "../components/input/input.component";
import { ItemComponent } from "../components/item/item.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonIcon,
    InputComponent,
    ItemComponent
  ],
})
export class HomePage implements OnInit {

  private readonly colorService = inject(ColorService);
  private readonly storageService = inject(StorageService);

  protected todoList!: IList;
  protected itemToEdit!: IItem;
  protected itemToChangeStatus!: IItem;
  

  ngOnInit(): void {
    this.todoList = this.storageService.loadList();
    this.colorService.accentColor$.subscribe((color) => {
      document.documentElement.style.setProperty('--accent', color);
    });
  }


  protected createItem(item: IItem) {
    this.todoList.items.push(item);
    this.storageService.storeList(this.todoList);
  }
  
  protected updateItem(item: IItem) {
    const index = this.todoList.items.findIndex(i => i.id === item.id);
    this.todoList.items[index] = item;
    this.storageService.storeList(this.todoList);
  }


  protected setITemToEdit(item: IItem) {
    this.itemToEdit = item;
  }

  protected updateCheckedStatus(item: IItem){
    this.updateItem(item);
  }


  protected deleteItem(itemId: string) {
    const index = this.todoList.items.findIndex(item => item.id === itemId);
    this.todoList.items.splice(index, 1);
    this.storageService.storeList(this.todoList);
  }

  protected clearList(){
    this.todoList.items = [];
    this.storageService.storeList(this.todoList);
  }
}

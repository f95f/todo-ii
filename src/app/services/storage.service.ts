import { Injectable } from '@angular/core';
import { IList, IListResume } from '../interfaces/ilist';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private readonly listKey: string = 'TODO_LIST_STORAGE_KEY';


  public loadList(): IList {
    const rawList = localStorage.getItem(this.listKey);
    if (!rawList) return this.defaultList;
    try {
      return JSON.parse(rawList);
    }
    catch(error: any) {
      console.error("Error when parsing todo list: ", error);
      return this.defaultList;
    }
  }

  public storeList(list: IList): void {
    const parsedList = JSON.stringify(list);
    localStorage.setItem(this.listKey, parsedList);
  }


  private get defaultList(): IList {
    return {
      id: '-',
      name: '',
      createdAt: '',
      updatedAt: '',
      items: [],
      size: 0,
      completion: 0
    }
  }
}



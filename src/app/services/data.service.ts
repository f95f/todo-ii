import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

    private readonly $listId = new BehaviorSubject<string>('');

    get listId(): Observable<string> {
        return this.$listId.asObservable();
    }

    setListId(id: string): void {
      this.$listId.next(id);
    }
}

import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Item } from "../../_modelo/item";
import { AbstractItemsService } from "./abstract-items.service";

@Injectable({
  providedIn: 'root'
})

export class MockitemsService extends AbstractItemsService {
	items: Item[];

  constructor() { 
  	super();
  	this.items=  [
  		new Item("comprar carne"),
  		new Item("comprar verdura"),
  		new Item("comprar carbon")
  	]
  }
  getItems(): Observable<Item[]>{
  	return new Observable((obs)=>{

  		obs.next(this.items);
  		obs.complete();

  	});
  }

  addItem(item: Item): Observable<Item[]>{
  		return new Observable((observable)=>{
      this.items.push(item);
  		observable.next(this.items);
  		observable.complete();
  	
  });
  }

   remove(item: Item): Observable<Item[]>{
     this.items= this.items.filter(it => it != item)
      return new Observable((observable)=>{
      observable.next(this.items);
      observable.complete();
    
  });
  }
}

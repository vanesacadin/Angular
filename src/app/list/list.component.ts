import { Component, OnInit } from '@angular/core';
import { Item } from "../../_modelo/item";
import { Observable } from 'rxjs';
import { MockitemsService } from "../_services/mockitems.service";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {


  items:Item[];


  constructor(private service: MockitemsService) { 
 ;
  	this.service.getItems().subscribe(serviceItems =>
  	{this.items = serviceItems;}
  );
}

  updateLocalItems(){
  	this.service.getItems().subscribe(items => this.items=items);
  }
	ngOnInit(){

	}

  onRemove(item: Item){
  	this.service.remove(item).subscribe(serviceItems =>{
  	this.items = serviceItems;
  	
  	});

  }	

}

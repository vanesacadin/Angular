import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Item } from "../../_modelo/item";
import { MockitemsService } from "../_services/mockitems.service";
import { Router } from "@angular/router";


@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
	
	newItemForm: FormGroup;


  constructor(private builder: FormBuilder,
               private service: MockitemsService,
               private router: Router) { 
  	this.newItemForm = this.builder.group(new Item(""));

}
  ngOnInit() {
  }

  onSubmit(){
  	//console.log(this.newItemForm.value);
    this.service.addItem(this.newItemForm.value).subscribe(items => {
    this.router.navigateByUrl("/items");
  });
}
}

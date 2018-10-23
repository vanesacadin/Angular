import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewItemComponent } from './new-item/new-item.component';
import { UpRoutingModule } from './up-routing.module';
import { ReactiveFormsModule} from "@angular/forms";
import { MockitemsService } from "./_services/mockitems.service";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NewItemComponent
  ],
  imports: [
    BrowserModule,
    UpRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MockitemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

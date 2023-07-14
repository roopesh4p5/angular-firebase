import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegisterationComponent } from './user-registeration/user-registeration.component';
import { UserLookComponent } from './user-look/user-look.component';
import { FormsModule } from '@angular/forms';
import { GetpostService } from './user-registeration/getpost.service';
// import { HttpserviceService } from './httpservice.service';

@NgModule({
  declarations: [
    AppComponent,
    UserRegisterationComponent,
    UserLookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

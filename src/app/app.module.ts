import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyService} from './service/my-service.service'
import { AppComponent } from './app.component';
import { UserComponent } from './user/user/user.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from "@angular/http";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },
  { path: 'user', component: UserComponent },

];


@NgModule({
  declarations: [
    AppComponent
    ,UserComponent
  ],
  imports: [
    HttpModule,
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [ MyService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

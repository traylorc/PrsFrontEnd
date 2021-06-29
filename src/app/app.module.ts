import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { E404Component } from './misc/e404/e404.component';
import { MenuComponent } from './menu/menu/menu.component';
import { SortPipe } from './misc/sort.pipe';
import { HomeComponent } from './misc/home/home.component';
import { AboutComponent } from './misc/about/about.component';
import { LoginComponent } from './user/login/login.component';
import { SearchUserPipe } from './user/search-user.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserCreateComponent,
    E404Component,
    MenuComponent,
    SortPipe,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SearchUserPipe
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

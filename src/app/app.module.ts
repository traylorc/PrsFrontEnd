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
import { VendorComponent } from './vendor/vendor/vendor.component';
import { SearchVendorPipe } from './vendor/search-vendor.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { TableComponent } from './misc/table/table.component';

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
    SearchUserPipe,
    VendorComponent,
    SearchVendorPipe,
    VendorListComponent,
    VendorCreateComponent,
    VendorEditComponent,
    VendorDetailComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

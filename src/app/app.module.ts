import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoComponent } from './components/todo/todo.component';
import { CurrenciesComponent } from './components/currencies/currencies.component';
import { CurrencyComponent } from './components/currency/currency.component';
import {RouterModule, Routes} from "@angular/router";
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

let routes: Routes = [{path:'users', component:UsersComponent, children:[{path:':id', component:UserDetailsComponent}]}, {path:'posts', component:PostsComponent, children:[{path: ':id', component: PostDetailsComponent}]}, {path:'todos', component:TodosComponent}]


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    TodosComponent,
    TodoComponent,
    CurrenciesComponent,
    CurrencyComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

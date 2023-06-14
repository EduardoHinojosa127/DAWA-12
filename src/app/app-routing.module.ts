import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './posts/post-list/post-list.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  //{ path: '', component: AppComponent },
  { path: '', component: UserListComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'post-details/:id', component: PostDetailsComponent},
  { path: 'user-details/:id', component: UserDetailsComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

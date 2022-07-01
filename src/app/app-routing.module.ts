import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FirstComponentComponent} from "./first-component/first-component.component";
import {SecondComponentComponent} from "./test-module/components/second-component/second-component.component";
import {PostComponentComponent} from "./post-component/post-component.component";
import {PostsComponentComponent} from "./posts-component/posts-component.component";

const routes: Routes = [
  { path: 'first', component: FirstComponentComponent },
  // { path: 'second', component: SecondComponentComponent },

  {
    path: 'posts/:postsId',
    component: PostsComponentComponent,
    children: [
      {
        path: 'post/:postId',
        component: PostComponentComponent,
      }
    ]
  },

  // {
  //   path: 'second',
  //   loadChildren: () => import('./test-module/test-module.module').then(m => m.TestModuleModule)
  // },
  {
    path: 'user',
    loadChildren: () => import('./user/user/user.module').then(m => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

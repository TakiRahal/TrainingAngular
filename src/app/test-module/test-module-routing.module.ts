import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SecondComponentComponent} from "./components/second-component/second-component.component";

const routes: Routes = [
  { path: '', component: SecondComponentComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestModuleRoutingModule { }

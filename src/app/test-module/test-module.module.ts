import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestModuleRoutingModule } from './test-module-routing.module';
import { SecondComponentComponent } from './components/second-component/second-component.component';


@NgModule({
  declarations: [
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    TestModuleRoutingModule
  ],
  exports: [SecondComponentComponent]
})
export class TestModuleModule { }

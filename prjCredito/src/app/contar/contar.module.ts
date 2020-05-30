import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescontarComponent } from './component/descontar';
import { DescontarService} from './services';



@NgModule({
  declarations: [DescontarComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DescontarComponent
  ],
  providers:[
    DescontarService,
  ]
})
export class ContarModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom'
    })
  ], 
  exports:[
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatOptionModule,
    ToastrModule
  ] 
})
export class SharedModule { }

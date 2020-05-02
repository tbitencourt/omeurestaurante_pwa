import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './details.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    RouterModule.forChild([
      { path: ':id', component: DetailsComponent }
    ])
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {}

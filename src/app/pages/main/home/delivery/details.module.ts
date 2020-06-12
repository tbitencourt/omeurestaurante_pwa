import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { DetailsComponent } from './details.component';
import { ComponentsModule } from 'app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: ':id', component: DetailsComponent }
    ])
  ],
  declarations: [DetailsComponent]
})
export class DetailsModule {}

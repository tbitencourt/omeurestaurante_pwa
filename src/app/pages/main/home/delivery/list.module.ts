import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ListComponent } from './list.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'details',
                loadChildren: () => import('./details.module').then(m => m.DetailsModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ListComponent]
})
export class ListModule { }
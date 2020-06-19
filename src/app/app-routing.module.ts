import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainModule } from './pages/main/main.module';

const routes: Routes = [
  { path: 'app', loadChildren: () => MainModule },
  { path: '', pathMatch: 'full', redirectTo: 'app/deliveries' },
  { path: '**', redirectTo: 'app/deliveries' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true, preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
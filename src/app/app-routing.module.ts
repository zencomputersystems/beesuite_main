import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'projects/eLeave_admin-V3/src/app/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'tryadmin',
    loadChildren: () => import('../../projects/eLeave_admin-V3/src/app/app.module').then(m => m.AppModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }

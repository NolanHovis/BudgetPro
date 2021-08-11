import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BottomNavComponent } from './shared/bottom-nav/bottom-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'navbar', component: BottomNavComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

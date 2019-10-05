import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'home', component: TableComponent},
  {path:'Fav', component: FavListComponent},
  {path: '', redirectTo:'/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FavListComponent, TableComponent]

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './components/fav-list/fav-list.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'', component: TableComponent},
  {path:'favourite', component: FavListComponent},
  {path: '', redirectTo:'', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FavListComponent, TableComponent]

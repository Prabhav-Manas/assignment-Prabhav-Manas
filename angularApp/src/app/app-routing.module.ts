import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginatedTableComponent } from './paginated-table/paginated-table.component';

const routes: Routes = [
  {path:'', redirectTo:'paginated-table', pathMatch:'full'},
  {path:'paginated-table', component:PaginatedTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

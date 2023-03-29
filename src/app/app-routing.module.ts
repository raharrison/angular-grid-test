import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OtherComponent} from "./other/other.component";
import {GridComponent} from "./grid/grid.component";

const routes: Routes = [
    {path: "", component: GridComponent},
    {path: "other/:param", component: OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

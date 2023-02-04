import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemsComponent } from './items/items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TabsComponent } from './tabs/tabs.component';

const routes: Routes = [
  {path:'shopping-cart', component:ShoppingCartComponent},
  {path:'',component:ItemsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

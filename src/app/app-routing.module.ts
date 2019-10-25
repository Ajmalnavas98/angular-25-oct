import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { TableComponent } from './table/table.component';
import { FilmsComponent } from './films/films.component';
import { FormsComponent } from './forms/forms.component';
import { SecondformComponent } from './secondform/secondform.component';
import { ThirdformComponent } from './thirdform/thirdform.component';


const routes: Routes = [{path:'',component:ProductListComponent}, { path: 'products/:productId', component: ProductDetailsComponent },
{ path: 'cart', component: CartComponent },{ path: 'shipping', component: ShippingComponent },{path :"electronics",component : ElectronicsComponent},
{path : '',component : TableComponent},{path : 'table',component : TableComponent},{path : 'films',component : FilmsComponent},{path : 'form',component : FormsComponent},{path : 'secondform',component : SecondformComponent},
{path :'thirdform',component : ThirdformComponent}] ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

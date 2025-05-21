import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { StoreListComponent } from "./pages/stores/store-list/store-list.component";
import { StoreDetailComponent } from "./pages/stores/store-detail/store-detail.component";

const routes: Routes = [
    { path: "", redirectTo: "stores", pathMatch: "full"},
    { path: "stores", component: StoreListComponent},
    { path: "stores/:id", component: StoreDetailComponent}
  ]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
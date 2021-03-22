import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SandboxComponent } from './sandbox.component';


const routes: Routes = [{
  path: 'sandbox',
  component: SandboxComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

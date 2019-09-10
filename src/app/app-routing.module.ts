import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';



const routes: Routes = [
  { path:  'contacts', component:  ContactListComponent},
  { path:'edit',component:EditContactComponent},
  {path:'create',component:CreateContactComponent},
  {path:'**',component:ContactListComponent},
  { path: '',
  redirectTo: '/contacts',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

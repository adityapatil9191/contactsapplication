import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { EditContactComponent } from './edit-contact/edit-contact.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path:  'contacts', component:  ContactListComponent},
  { path:'edit/:index',component:EditContactComponent},
  {path:'create',component:CreateContactComponent},
  {path:'**',component:PageNotFoundComponent},
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

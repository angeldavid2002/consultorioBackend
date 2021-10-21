import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultarAgendaComponent } from './Consultorio/agenda/consultar-agenda/consultar-agenda.component';
import { EliminarAgendaComponent } from './Consultorio/agenda/eliminar-agenda/eliminar-agenda.component';
import { RegistrarAgendaComponent } from './Consultorio/agenda/registrar-agenda/registrar-agenda.component';
import { ClienteEditarComponent } from './Consultorio/clientes/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './Consultorio/clientes/cliente-listar/cliente-listar.component';
import { ClienteRegistroComponent } from './Consultorio/clientes/cliente-registro/cliente-registro.component';
import { EliminarClienteComponent } from './Consultorio/clientes/eliminar-cliente/eliminar-cliente.component';
import { FooterComponent } from './Consultorio/footer/footer.component';
import { HeaderComponent } from './Consultorio/header/header.component';
import { HomeComponent } from './Consultorio/home/home.component';
import { SideBarComponent } from './Consultorio/side-bar/side-bar.component';

const routes: Routes = [
  {path: '',component: HomeComponent,pathMatch: 'full'},
  {path: 'header',component: HeaderComponent,},
  {path: 'side-bar',component: SideBarComponent,},
  {path: 'footer',component: FooterComponent,},
  {path: 'registrar-cliente',component:ClienteRegistroComponent},
  {path: 'eliminar-cliente',component:EliminarClienteComponent},
  {path: 'consultar-agenda',component:ConsultarAgendaComponent},
  {path: 'registrar-agenda',component:RegistrarAgendaComponent},
  {path: 'editar-cliente', component:ClienteEditarComponent},
  {path: 'listar-clientes',component:ClienteListarComponent},
  {path: 'eliminar-agenda',component:EliminarAgendaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

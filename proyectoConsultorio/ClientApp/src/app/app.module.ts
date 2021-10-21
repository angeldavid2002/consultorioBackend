import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Sidebar, SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './Consultorio/side-bar/side-bar.component';
import { HomeComponent } from './Consultorio/home/home.component';
import { HeaderComponent } from './Consultorio/header/header.component';
import { FooterComponent } from './Consultorio/footer/footer.component';
import { ClienteRegistroComponent } from './Consultorio/clientes/cliente-registro/cliente-registro.component';
import { EliminarClienteComponent } from './Consultorio/clientes/eliminar-cliente/eliminar-cliente.component';
import { ConsultarAgendaComponent } from './Consultorio/agenda/consultar-agenda/consultar-agenda.component';
import { RegistrarAgendaComponent } from './Consultorio/agenda/registrar-agenda/registrar-agenda.component';
import { ClienteEditarComponent } from './Consultorio/clientes/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './Consultorio/clientes/cliente-listar/cliente-listar.component';
import { EliminarAgendaComponent } from './Consultorio/agenda/eliminar-agenda/eliminar-agenda.component';

import { FiltroPacientePipe } from './Consultorio/pipe/filtro-paciente.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClienteRegistroComponent,
    EliminarClienteComponent,
    ConsultarAgendaComponent,
    RegistrarAgendaComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    EliminarAgendaComponent,
    FiltroPacientePipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

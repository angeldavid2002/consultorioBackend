import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Sidebar, SidebarModule } from 'ng-sidebar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClienteRegistroComponent } from './clientes/cliente-registro/cliente-registro.component';
import { EliminarClienteComponent } from './clientes/eliminar-cliente/eliminar-cliente.component';
import { ConsultarAgendaComponent } from './agenda/consultar-agenda/consultar-agenda.component';
import { RegistrarAgendaComponent } from './agenda/registrar-agenda/registrar-agenda.component';
import { ClienteEditarComponent } from './clientes/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './clientes/cliente-listar/cliente-listar.component';
import { EliminarAgendaComponent } from './agenda/eliminar-agenda/eliminar-agenda.component';

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
    EliminarAgendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

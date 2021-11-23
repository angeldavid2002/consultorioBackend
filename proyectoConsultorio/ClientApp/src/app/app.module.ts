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
import { ConsultarAgendaComponent } from './Consultorio/agenda/consultar-agenda/consultar-agenda.component';
import { RegistrarAgendaComponent } from './Consultorio/agenda/registrar-agenda/registrar-agenda.component';
import { ClienteEditarComponent } from './Consultorio/clientes/cliente-editar/cliente-editar.component';
import { ClienteListarComponent } from './Consultorio/clientes/cliente-listar/cliente-listar.component';

import { FiltroPacientePipe } from './Consultorio/pipe/pipe-nombre/filtro-paciente.pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegistrarHistoriaComponent } from './Consultorio/historia/registrar-historia/registrar-historia.component';
import { ConsultarHistoriaComponent } from './Consultorio/historia/consultar-historia/consultar-historia.component';
import { EditarHistoriaComponent } from './Consultorio/historia/editar-historia/editar-historia.component';
import { LoginComponent } from './Consultorio/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ClienteRegistroComponent,
    ConsultarAgendaComponent,
    RegistrarAgendaComponent,
    ClienteEditarComponent,
    ClienteListarComponent,
    FiltroPacientePipe,
    RegistrarHistoriaComponent,
    ConsultarHistoriaComponent,
    EditarHistoriaComponent,
    LoginComponent,
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

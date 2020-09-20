import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BannerComponent } from './banner/banner.component';
import { SobreComponent } from './sobre/sobre.component';
import { VantagensComponent } from './vantagens/vantagens.component';
import { ServicosComponent } from './servicos/servicos.component';
import { PlanosComponent } from './planos/planos.component';
import { ContatoComponent } from './contato/contato.component';
import { FooterComponent } from './footer/footer.component';
import { TimeComponent } from './time/time.component';

import { UsuarioService } from './services/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    BannerComponent,
    SobreComponent,
    VantagensComponent,
    ServicosComponent,
    PlanosComponent,
    ContatoComponent,
    FooterComponent,
    TimeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UsuarioService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { ListagemViagensComponent } from './lista-viagens/listagem-viagens.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastraViagemComponent } from './cadastra-viagem/cadastra-viagem.component';
import { ExcluiViagemComponent } from './exclui-viagem/exclui-viagem.component';
import { DetalhesViagemComponent } from './detalhes-viagem/detalhes-viagem.component';
import { HeaderComponent } from './lista-viagens/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemViagensComponent,
    CadastraViagemComponent,
    ExcluiViagemComponent,
    DetalhesViagemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

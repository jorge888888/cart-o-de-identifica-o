import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, IonicModule],
})
export class HomePage {
  nomeCompleto = 'Jorge Luiz Matias Izidro';
  codigoTurma = '25102194';
  unidade = 'Bonsucesso';
  turno = 'Manhã';
  palavraChave = ''; // coloca aqui quando o professor fornecer

  constructor() {}
}
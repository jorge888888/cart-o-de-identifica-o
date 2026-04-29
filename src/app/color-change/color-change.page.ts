import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonHeader, IonToolbar, IonTitle, IonContent,
  IonRange, IonButton, IonGrid, IonRow, IonCol,
  IonLabel, IonButtons, IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-color-change',
  templateUrl: './color-change.page.html',
  styleUrls: ['./color-change.page.scss'],
  standalone: true,
  imports: [
    FormsModule,
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonRange, IonButton, IonGrid, IonRow, IonCol,
    IonLabel, IonButtons, IonBackButton
  ],
})
export class ColorChangePage {
  r: number = 0;
  g: number = 0;
  b: number = 255;

  corBotao: string = 'rgb(0, 0, 255)';
  corFundo: string = 'rgb(255, 255, 255)';

  mudarCorBotao() {
    this.corBotao = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  mudarCorFundo() {
    this.corFundo = `rgb(${this.r}, ${this.g}, ${this.b})`;
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagemComponent } from './imagem/imagem.component';
import { SocketComponent } from './socket/socket.component';
import { CardManagerComponent } from './card-manager/card-manager.component';



@NgModule({
  declarations: [
    ImagemComponent,
    SocketComponent,
    CardManagerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardManagerComponent
  ]
})
export class CoreModule { }

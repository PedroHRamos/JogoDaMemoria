import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.css']
})
export class ImagemComponent implements OnInit {

  backImage: string;
  frontImage: string;
  image: string;
  isFliped: boolean;

  @Input() id: number = 0;
  @Input() fileName: string = '';

  constructor() {
    this.backImage = '/../../../assets/img/interrogacao.png';
    console.log('Filename: ' + this.fileName);
    this.frontImage = '/../../../assets/img/' + this.fileName;
    this.image = this.backImage;
    this.isFliped = false;
    // In the future the front image has to be pass in the constructor.
    // So the cards controller can define the cards value on the instances of cards
  }

  ngOnInit(): void {
  }

  flip(){
    this.image = '/../../../assets/img/' + this.fileName;
    this.isFliped = true;
  }

}

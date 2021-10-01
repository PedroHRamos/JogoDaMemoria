import { Component, OnInit } from '@angular/core';

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

  constructor() { 
    this.backImage = '/../../../assets/img/interrogacao.png';
    this.frontImage = './../../../assets/img/amongus.png';
    this.image = this.backImage;
    this.isFliped = false;
  }

  ngOnInit(): void {
  }

  flip(){
    this.image = this.frontImage;
    this.isFliped = true;
  }

}

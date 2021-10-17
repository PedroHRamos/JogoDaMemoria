import { Component, OnInit } from '@angular/core';
import { ImageDTO } from 'src/dto/ImageDTO';

@Component({
  selector: 'app-card-manager',
  templateUrl: './card-manager.component.html',
  styleUrls: ['./card-manager.component.css']
})
export class CardManagerComponent implements OnInit {

  numberOfCards: number;
  images: Array<ImageDTO>;
  imageNames: Array<string>;
  image: ImageDTO;
  numberOfRows: number;

  constructor() {

    this.imageNames = ['amongus.png', 'dev_descomplicado.jpg', 'dima.png', 'js.png'];
    this.images = new Array<ImageDTO>();
    this.image = new ImageDTO(1, 'a');
    this.numberOfRows = 2;


    this.numberOfCards = 4;
    for ( let i = 0; i < this.numberOfCards * 2; i++){
      console.log(this.imageNames[this.imageNames.length - 1]);
      this.image = new ImageDTO(i, this.imageNames[this.imageNames.length - 1]);
      this.images.push(this.image);
      i++;
      console.log(this.imageNames[this.imageNames.length - 1]);
      this.image = new ImageDTO(i, this.imageNames[this.imageNames.length - 1]);
      this.images.push(this.image);
      this.imageNames.pop();
    }

  }

  ngOnInit(): void {
  }
/*
  SINGLE PLAYER
    *The next step is think in some ways to manage the cards
    *I think the best way to do this is creating some instances of x cards
    *The first step would be load the list of images names. In a first moment, this list can be a simple .json just to store the names
        *IDEA FOR AN POSSIBLE FUTURE: We can think about to save the images in a database
    *The second step would be load in this json the number of cards that could be loaded in the screen
    *The next step can be the logic of how to choice a random image name, set this name for an card
    *The next step can be the logic that back the cards to the original configuration if the user dont match the 2 cards
        * Else the user got a point, we take off theese 2 cards off the screen

  MULTIPLAYER
    *All the steps above
    *We need to create a way to separate the core informations from the client informations
        *It seems like the logic of that prototype of gartic that I try a long time ago
          *Socket.io
            *npm install express socket.io
    *We need to create the rooms rules
    *We need to create the rounds
    *A player try to match the cards and if he fail the other player can try
        *If a player match the cards so he got a point and can play again
    *We need to create a mecanism to do all users see what other users are doing in rounds
        *The core coordennate everything, the beggining of a round, who has to play and show this gameplay to every player on this room
        *Control the rounds, if the user mathc 2 cards or not, if the user play again, who plays next, the end of the game, etc.

    *I think the best way to segregate the responsibility is
      *Making a card-manager that will returnn a canvas(view) to the socket
      *Thhe socket will be responsable to define the rooms, add/remove players

*/


}

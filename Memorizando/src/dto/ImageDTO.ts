export class ImageDTO {
    id: number;
    fileName: string;
    backFileName: string;
    frontFileName: string;
    isImageFliped: boolean;
    isCardOutOfGame: boolean;

    constructor(id: number, fileName: string){
        this.id = id;
        this.fileName = fileName;
        this.frontFileName = fileName;
        this.isImageFliped = false;
        this.isCardOutOfGame = false;
        this.backFileName = '/../../../assets/img/interrogacao.png';
    }

}

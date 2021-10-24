export class ImageDTO {
    id: number;
    fileName: string;
    isImageFliped: boolean;

    constructor(id: number, fileName: string){
        this.id = id;
        this.fileName = fileName;
        this.isImageFliped = false;
    }

}

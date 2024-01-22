import { shape } from "./shape";

export class circle extends shape{


constructor(theX:number,theY:number,private radius:number){

super(theX,theY);






}

getInfo(): string {
    return super.getInfo +`,radius ${this.radius}`
}















}
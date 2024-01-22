import { shape } from "./shape";

export class circle extends shape{
calculateare(): number {



    return Math.PI *Math.pow(this.radius,2);
}


constructor(theX:number,theY:number,private radius:number){

super(theX,theY);






}

getInfo(): string {
    return super.getInfo +`,radius ${this.radius}`
}















}
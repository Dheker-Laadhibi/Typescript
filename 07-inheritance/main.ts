import { circle } from './circle';
import { shape } from './shape';
 

 let shape1 = new shape(10,15);
 console.log(shape1.getInfo());


 let circle1= new circle(5,10,4);
console.log(circle1.getInfo());


let theshapes1:shape[]=[];
 theshapes1.push(shape1);
 theshapes1.push(circle1);


 for(let shap of theshapes1){


    console.log(shap.getInfo());
    
 }
import { circle } from './circle';
import { shape } from './shape';
 

 


 let circle1= new circle(5,10,4);
console.log(circle1.getInfo());


let theshapes1:shape[]=[];

 theshapes1.push(circle1);


 for(let shap of theshapes1){


    console.log(shap.getInfo());
    console.log(shap.calculateare());
    
    
    
 }
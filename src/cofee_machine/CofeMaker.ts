import { Vaso } from "./RecipientDispenser";
export default class CofeeMaker{
    constructor(private cantidad:number){}//onzas

    get Cantidad(){
        return this.cantidad;
    }
    
    set Cantidad(value:number){
        this.cantidad=value;
    }

    hasCafe=()=>{
        if (this.cantidad>2){
            return true
        }
    return false
    }
    giveCafe=(value:number)=>{
        if(this.cantidad>= value){
            this.cantidad-= value;
        }else throw Error("Cafe Insuficiente");
    }

}
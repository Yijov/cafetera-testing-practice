import { Vaso } from "./RecipientDispenser";
export default class SugarDispenser{

    constructor(private cantidad: number){} //cucharadas

    get Cantidad(){
        return this.cantidad;
    }

    set Cantidad(value:number){
        this.cantidad= value;
    }

    hasSugar=()=>{
        return this.Cantidad > 1 ? true : false;
    }

    giveSugar=(cucharadas:number)=>{
        if(this.cantidad>=cucharadas){
           this.cantidad-= cucharadas;
           return cucharadas;
        }else throw new Error("azucar insuficiente");
    }
}
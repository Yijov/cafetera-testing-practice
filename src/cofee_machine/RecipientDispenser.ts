

export enum  SIZES{SMALL=3, MID=5, GRAND=7}

export class Vaso{
    private full:boolean=false;
    private sugar:number=0;
    constructor(private sise: SIZES){ }
    get Sise(){
        return this.sise;
    }


    AddSugar=(cucharadas:number)=>{
        this.sugar=cucharadas;
    }

    Fill=()=>{
        this.full=true;
    }
    isFull=()=>{
        return this.full;
    }
}
export default class RecipientDispenser{
    constructor
        (
        private cantidadVasos:number, // numero de vasos
        private contenido: SIZES //onzas que soporta 
        ){}

    get CantidadVasos(){
        return this.cantidadVasos
    }
    get Contenido(){
        return this.contenido
    }
    set CantidadVasos(value:number){
         this.cantidadVasos= value;
    }

    set Contenido(value:SIZES){
        this.contenido= value;
    }

    giveVaso=()=>{
        if(this.cantidadVasos>=0){
            this.CantidadVasos-=1
            return new Vaso(this.contenido)
        }else throw new Error( "Vasos agotados")
    }

    hasVasos=()=>{if(this.CantidadVasos < 1){
        return false
    }
    return true;
    }
}
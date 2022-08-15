import CofeeMaker from './CofeMaker';
import RecipientDispenser, {SIZES, Vaso} from './RecipientDispenser';
import SugarDispenser from './SugarDispenser';


export default class CofeeMachine{
    private MessageDisplay:string=""
    private Cafe: CofeeMaker;
    private VasosSmall:RecipientDispenser;
    private VasosMedianos:RecipientDispenser;
    private VasosGrandes:RecipientDispenser;
    private Azucar: SugarDispenser
    private VasoActual: Vaso | null=null;

    constructor(cafe: number=0, vasosSmall: number=0, vasosMedianos: number=0,vasosGrandes: number=0, azucar:number=0){
        this.Cafe= new CofeeMaker(cafe);
        this.VasosSmall= new RecipientDispenser(vasosSmall,SIZES.SMALL );
        this.VasosMedianos= new RecipientDispenser(vasosMedianos, SIZES.MID);
        this.VasosGrandes= new RecipientDispenser(vasosGrandes, SIZES.GRAND);
        this.Azucar=new SugarDispenser(azucar);
        this.UpdateStatus();
           

    }

    get status(){
        return {
                cafe:this.Cafe.Cantidad, 
                vasosSmall: this.VasosSmall.CantidadVasos, 
                vasosMedianos: this.VasosMedianos.CantidadVasos, 
                vasosGrandes: this.VasosGrandes.CantidadVasos,
                azucar: this.Azucar.Cantidad, 
               }
    }

    UpdateStatus=()=>{
        this.MessageDisplay="Seleccione su tamaño deseado"
        if(!this.Cafe.hasCafe()){
            this.MessageDisplay="Fuera de servicio"
        }
        if(!this.VasosSmall.hasVasos() && !this.VasosMedianos.hasVasos() && !this.VasosGrandes.hasVasos()){
            this.MessageDisplay="Fuera de servicio"
        }

        if(!this.Azucar.hasSugar()){
            this.MessageDisplay="Fuera de servicio"
        }

    }

    ObtenerVaso=(tamañoVaso:SIZES)=>{
        switch (tamañoVaso) {
            case SIZES.SMALL:
               return this.VasosSmall.giveVaso()
            case SIZES.MID:
                return this.VasosMedianos.giveVaso()
            case SIZES.GRAND:
                return this.VasosGrandes.giveVaso()
            default:
                throw new Error("Seleccione un tipo")
                break;
        }
    }

    set messageDisplay(value:string){
        this.MessageDisplay=value;
    }
    get messageDisplay(){
        return this.MessageDisplay;
    }

    ServirVaso=(tamañoVaso:SIZES, cucharadasAzucar:number)=>{
            try {
            //obtener el vas
            this.VasoActual=this.ObtenerVaso(tamañoVaso);
            //servir cafe
            this.Cafe.giveCafe(this.VasoActual.Sise);
            //añadir azucar
            this.VasoActual.AddSugar(this.Azucar.giveSugar(cucharadasAzucar));
            this.MessageDisplay="Felicidades!! Disfruta"
                
            } catch (error) {
                setTimeout(() => {
                this.UpdateStatus();
                }, 3000);

                this.MessageDisplay= (error as Error).message;
                
            
            } 
        
    }
}
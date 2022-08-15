import CofeeMachine from '../cofee_machine/CofeeMachine';
import {SIZES, Vaso} from "../cofee_machine/RecipientDispenser"


describe("Dado que se ha pedido cafe", ()=>{
    let maquina:CofeeMachine; 
    beforeEach(()=> maquina=new CofeeMachine(25, 25, 25, 25, 25))
    //deberia devolver un vaso pequeño
    describe("Dado que hay vasos pequeños",()=>{
        test('Deberia devolver un vaso pequeño', () => {
            let result = maquina.ObtenerVaso(SIZES.SMALL)
            expect(result).toBeInstanceOf(Vaso);
            expect(result?.Sise).toBe(SIZES.SMALL);
          })
    })

    //deberia devolver un vaso mediano
    describe("Dado que hay vasos medianos",()=>{
        test('Deberia devolver un vaso mediano', () => {
            let result = maquina.ObtenerVaso(SIZES.MID)
            expect(result).toBeInstanceOf(Vaso);
            expect(result?.Sise).toBe(SIZES.MID);
        })
    })

    //deberia devolver un vaso grande
    describe("Dado que hay vasos grandes",()=>{
        test('Deberia devolver un vaso grande', () => {
            let result = maquina.ObtenerVaso(SIZES.GRAND)
            expect(result).toBeInstanceOf(Vaso);
            expect(result?.Sise).toBe(SIZES.GRAND);
        })
    })


    //deberia felicitar al cliente 
    describe("Dado que se ha completado el servicio",()=>{
        test('Deberia felicitar al cliente', () => {
            maquina.ServirVaso(SIZES.GRAND, 2)
            expect(maquina.messageDisplay).toBe("Felicidades!! Disfruta");
           
        })
    })

    //deberia indicar que no hay cafe
    describe("Dado que no hay cafe", ()=>{
        let maquina2:CofeeMachine= new CofeeMachine(0, 25, 25, 25, 25);
        test('Deberia indicar que no hay cafe', () => {
        expect(maquina2.messageDisplay).toBe("Fuera de servicio");
         })
    })
    
    //deberia indicar que no hay azucar
    describe("Dado que no hay azucar",()=>{
        let maquina2:CofeeMachine=new CofeeMachine(25, 25, 25, 25, 0);
        test('Deberia indicar que no hay azucar', () => {
        expect(maquina2.messageDisplay).toBe("Fuera de servicio");
        })
    })
  

    //deberia indicar que no hay vasos
    describe("Dado que no hay vasos",()=>{
        let maquina2:CofeeMachine=new CofeeMachine(25, 0, 0, 0, 25);
        test('Deberia indicar que no hay vasos', () => {
        let sum= 25
        expect(maquina2.messageDisplay).toBe("Fuera de servicio");
        })
    })

})
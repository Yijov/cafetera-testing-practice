import SugarDispenser from './../cofee_machine/SugarDispenser';

let maquina:SugarDispenser; 
beforeAll(()=> maquina=new SugarDispenser(25))
//deberia restar azucar
   describe("Dado que hay azucar",()=>{
    test('Deberia restar azucar', () => {
        maquina.giveSugar(2);
        let restante= maquina.Cantidad;
        expect(restante).toBe(23);
    })
})

import RecipientDispenser from './../cofee_machine/RecipientDispenser';


let maquina:RecipientDispenser; 
beforeAll(()=> maquina=new RecipientDispenser(25, 5))
//deberia restar vaso
describe("Dado que hay vasos",()=>{ 
    test('Deberia restar vaso', () => {
        maquina.giveVaso();
        let restante= maquina.CantidadVasos;
        expect(restante).toBe(24)
      })
})


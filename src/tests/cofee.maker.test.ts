import CofeeMaker from '../cofee_machine/CofeMaker';

let maquina:CofeeMaker; 
beforeAll(()=> maquina=new CofeeMaker(25))
//deberia restar cafe
describe("Dado que se ha pedido cafe y hay cafe",()=>{ 
    test('Deberia restar cafe', () => {
      maquina.giveCafe(5);
      let restante= maquina.Cantidad;
      expect(restante).toBe(20)
      })
})



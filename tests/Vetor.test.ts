import {Vetor} from "../src/Vetor"

describe ('TestVetor', ()=>{
    let vetor: Vetor;
    beforeEach(()=>{
        vetor = new Vetor();
    })

    it("teste de soma de Vetor ", ()=>{
        vetor.adicionar(1)
        vetor.adicionar(2)
        vetor.adicionar(4)
        vetor.adicionar(3)
        expect(vetor.somarVetor()).toBe(10);
    })

    it("teste de maior de Vetor ", ()=>{
        vetor.adicionar(3)
        vetor.adicionar(2)
        vetor.adicionar(4)
        expect(vetor.buscarMaior()).toBe(10);
    })
    
    it("teste de maior de Vetor ", ()=>{        
        vetor.adicionar(1)
        vetor.adicionar(2)
        vetor.adicionar(4)
        vetor.adicionar(1)
        expect(vetor.buscarMedia()).toBe(2);
    })
})
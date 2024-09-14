import Kartya from "./Kartya.js"

export default class Kartyak{

    constructor(lista, szuloElem){
        this.szuloElem = szuloElem
        this.lista = lista
        this.#KartyakKiir()
    }

    #KartyakKiir(){
        this.lista.forEach((kutya, index) => {
            // egyKutyaKiiras(kutya);
            new Kartya(kutya, this.szuloElem)
          });
    }
}
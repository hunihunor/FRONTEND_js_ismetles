export default class Kartya {
  #kutya = {}; //privát adattag lett

  constructor(kutya, szuloElem, gombElem) {
    // inicializálja az adattagokat
    this.#kutya = kutya;
    this.szuloElem = szuloElem;
    this.#egyKutyaKiiras();
    this.gombElem = $(".kivalaszt:last");
    this.#esemenykezelo();
  }

  #esemenykezelo() {
    /* eseménykezelőt a gombokra */

    this.gombElem.on("click", (event) => {
      // nyílfüggvényés a function()között az a különbség,
      // hogy a nyíl konkrét osztály példányra mutat, a function esetén pedig arra
      //a html elemre amely kiváltotta az eseményt.
      console.log(this); //az az elem, amelyik kiváltotta az eseményt
    });
  }

  #egyKutyaKiiras() {
    this.szuloElem.append(`<div class="col-lg-4 col-md-6 card"> 
                            <div class="card-body">
                                <h3 class="card-title">${this.#kutya.nev}</h3>
                                <p class="card-text">kor: ${this.#kutya.kor}</p>
                                <p class="card-text">nem: ${this.#kutya.nem}</p>
                                <button class="kivalaszt btn btn-success">Kiválaszt</button>
                            </div>
                        </div>`);
  }
}

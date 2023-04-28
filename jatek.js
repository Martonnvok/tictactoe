import Elem from "./elem.js";
class JatekTer {
    #JatekterLista=[]
    #lepes
    constructor() {
        this.#lepes = 0;
        this.#JatekterLista=["","","","","","","","",""];
        const SZULOELEM = $("section")
        for (let i = 0; i < 9; i++) {
            const E1 = new Elem(i, SZULOELEM);
        }

        $(window).on("elemKattintas", (event) => {
            console.log(event.detail)
            if (lepes % 2 === 0) {
                event.detail.setElem("X");
                this.#JatekterLista[event.detail.id]="X";
            }
            else {
                event.detail.setElem("O");
                this.#JatekterLista[event.detail.id]="O";
            }
            lepes++;

        })
    }
}

export default JatekTer;
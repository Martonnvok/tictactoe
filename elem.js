class Elem {
    constructor( id, SZULOELEM) {
        this.id = id;
        SZULOELEM.append("<div class='elem'><p></p></div>");
        this.E1 = $("section div:last-child");
        this.allapor=true;
        this.pElem=this.E1.children("p");
        this.E1.on("click",() => {
            //this.setElem("X");
            
            if (this.allapor) {
                this.esemenyTrigger()
            }
            this.allapor = false;
        })
    }

    setElem(ertek){
        this.pElem.html(ertek);

    }

    esemenyTrigger(){
        console.log("trigger",this)
        const esemeny = new CustomEvent("elemKattintas", {detail: this});
        window.dispatchEvent(esemeny);
    }
}

export default Elem;
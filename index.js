import { cimKiiras} from "./fuggvenyek.js";
import { kutyaLista } from "./adatok.js";
import Kartya from "./Kartya.js";
import Kartyak from "./Kartyak.js";


const divElem = $(".tartalom");   

new Kartyak(kutyaLista, divElem)
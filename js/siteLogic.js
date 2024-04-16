// ikke jukse nå >:P


//dette er bare så dere får feedback på oppgaven















const oppg1 = false
const oppg2 = false

import { string, number, object, boolean, array  } from "./index.js"
if(string === "per knut" && number === 23 && object.navn === "Nina" && object.alder === 42
&& array[0] === "skog" && array[1] === "vann" && array[2] === "mark" && boolean === true) {
    console.log("oppgave 1 fullført")
    const div = document.createElement("div")
    const txt = document.createTextNode("godt jobbet :3 oppgave 1 løst")
    const p = document.createElement("p")
    p.append(txt)
    div.appendChild(p                                                                                                              )
    document.body.appendChild(div) 
    oppg1 = !oppg1
} else {
    console.log("prøv noe nytt på oppgave 1")
}

import { myFunc } from "./index.js"
    if (oppg1) {
    const sNFT = 0
    const fNFT = myFunc(sNFT)
    console.log(fNFT)
    if (fNFT === 23) {
        console.log("true")
        const div = document.createElement("div")
        const txt = document.createTextNode("godt jobbet :3 oppgave 2 løst")
        const p = document.createElement("p")
        p.append(txt)
        div.appendChild(p)
        document.body.appendChild(div) 
        oppg2 = !oppg2
    } else {
        console.log("prøv noe nytt på oppgave 2")
    }
    } else {

    }

if (oppg1 && oppg2) {
    
}
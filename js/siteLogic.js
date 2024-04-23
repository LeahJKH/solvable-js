// ikke jukse nå, bruk kun når du sitter fast >:P

//dette er bare så dere får feedback på oppgaven

const pageEl = {
    headerT: document.querySelector("#top-box"),
    maincont: document.querySelector("#main-cont"),
}

let oppg1 = false
let oppg2 = false
let oppg3 = false
let oppg4 = false
let oppg5 = false
let oppg6 = false
let oppg7 = false

import { string, number, object, boolean, array, oppgave4, oppgave3, myFunc, oppgave5, oppgave6, oppgave7  } from "./index.js"

if(string === "per knut" && number === 23 && object.navn === "Nina" && object.alder === 42 && array[0] === "skog" && array[1] === "vann" && array[2] === "mark" && boolean === true) {
    const div = document.createElement("div")
    const txt = document.createTextNode("godt jobbet :3 oppgave 1 løst")
    const p = document.createElement("p")
    div.classList.add("box-style")
    p.append(txt)
    div.appendChild(p)                                   
    pageEl.maincont.appendChild(div) 
    oppg1 = !oppg1
} else {
    console.log("prøv noe nytt på oppgave 1")
}
if (oppg1) {
const sNFT = 0
const fNFT = myFunc(sNFT)
    if (fNFT === 23) {
        console.log("true")
        const div = document.createElement("div")
        const txt = document.createTextNode("godt jobbet :3 oppgave 2 løst")
        const p = document.createElement("p")
        div.classList.add("box-style")
        p.append(txt)
        div.appendChild(p)
        pageEl.maincont.appendChild(div) 
        oppg2 = !oppg2
    } else {
        console.log("prøv noe nytt på oppgave 2")
    }
}
if (oppg1 && oppg2) {
   let oppg3answ = oppgave3()
   console.log(oppg3answ)
   if(oppg3answ === "Nina kan kode, og er 42 år.") {
        const div = document.createElement("div")
        const txt = document.createTextNode("godt jobbet :3 oppgave 3 løst")
        const p = document.createElement("p")
        div.classList.add("box-style")
        p.append(txt)
        div.appendChild(p)
        pageEl.maincont.appendChild(div) 
        oppg3 = !oppg3 
   } else {
    console.log("prøv noe nytt på oppgave 3")
   }
}
if (oppg1 && oppg2 && oppg3) {
    let finishedarr = oppgave4()
    if (finishedarr.includes("suppe") && finishedarr.includes("tomat") && finishedarr.includes("leverpostei")  && !finishedarr.includes("stål")) {
        const div = document.createElement("div")
        const txt = document.createTextNode("godt jobbet :3 oppgave 4 løst")
        const p = document.createElement("p")
        div.classList.add("box-style")
        p.append(txt)
        div.appendChild(p)
        pageEl.maincont.appendChild(div) 
        oppg4 = !oppg4 
    } else {
        console.log("prøv noe nytt på oppgave 4")
    }
}
if (oppg1 && oppg2 && oppg3 && oppg4) {
    let finishedNum = oppgave5()
    if (finishedNum === 640) {
        const div = document.createElement("div")
        const txt = document.createTextNode("godt jobbet :3 oppgave 5 løst")
        const p = document.createElement("p")
        div.classList.add("box-style")
        p.append(txt)
        div.appendChild(p)
        pageEl.maincont.appendChild(div) 
        oppg5 = !oppg5 
    } else {
        console.log("prøv noe nytt på oppgave 5")
    }
}
if (oppg1 && oppg2 && oppg3 && oppg4 && oppg5) {
    oppgave6()
    let svarbool = oppgave6() 
        
    if (svarbool === true) {
        const div = document.createElement("div")
        const txt = document.createTextNode("godt jobbet :3 oppgave 6 løst")
        const p = document.createElement("p")
        div.classList.add("box-style")
        p.append(txt)
        div.appendChild(p)
        pageEl.maincont.appendChild(div) 
        oppg6 = !oppg6 
    }
}
if (oppg1 && oppg2 && oppg3 && oppg4 && oppg5 && oppg6) {
    let div = oppgave7()
    if (div != "") {
        pageEl.maincont.appendChild(div)
        oppg7 = !oppg7 
    }
}

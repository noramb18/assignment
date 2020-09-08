let svada = [
    "Nå er det helt klart en typisk høstsituasjon hvor lavtrykkene kommer inn mot Norge på rekke og rad. De har med seg ekstra vind og ekstra nedbør,",
     "sier vakthavende meteorolog Pernille Borander ved Vervarslinga i Nord-Norge. "
];

let anttAvsnitt = process.argv.length >= 3 ? process.argv[2] : svada.length;

for (let i = 0; i < anttAvsnitt; i++){
    console.log(svada[i%svada.length])
}
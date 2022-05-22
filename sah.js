//
const fen = "RNBQKBNR/PPPPPPPP/8/8/8/8/pppppppp/rnbqkbnr"
var tabla = [];
for(var i=0; i<8; i++) {
    tabla[i] = [];
    for(var j=0; j<8; j++) {
        tabla[i][j] = 0;
    }
}
var None = 0
var rege = 1
var pawn = 2
var cal = 3
var nebun = 4
var tura = 5
var regina = 6

var alb =8
var negru = 16


function fenpiese(a){
    if(a == 85)
        return "rw"
    else if (a==83)
        return "nw"
    else if(a==84)
        return "bw"
    else if (a == 86)
        return "qw"
    else if(a== 81)
        return "kw"
    else if (a == 82)
        return "pw"
    else if(a == 165)
        return "rb"
    else if(a==164)
        return 'bb'
    else if (a==163)
        return 'nb'
    else if (a == 166)
        return 'qb'
    else if(a== 161)
        return 'kb'
    else if (a == 162)
        return 'pb'
}

function fenmatrice(a){
    if(a == 'R')
        return 85
    else if(a=="B")
        return 84
    else if (a=='N')
        return 83
    else if (a == 'Q')
        return 86
    else if(a== 'K')
        return 81
    else if (a == "P")
        return 82
    else if(a == 'r')
        return 165
    else if(a=="b")
        return 164
    else if (a=='n')
        return 163
    else if (a == 'q')
        return 166
    else if(a== 'k')
        return 161
    else if (a == "p")
        return 162
    else 
        return 0
}



function fenconverter(){
    var k = 0, j= 0, n = fen.length;
    for(var i=0; i <= n; ++i){
            if(fen[i] == '/'){
                k=0, j++
            }
            else if(fen[i] >='1' && fen[i] <='9'){
                k+=parseInt(fen[i])
            }
            else {
                tabla[j][k] = fenmatrice(fen[i])
                k++
            }
    }
}
/*function functie(){

    const rand = document.createElement("tr")
    for(var i=0; i<8; i++) {
        for(var j=0; j<8; j++) {
            const para = document.createElement("th")
            rand.appendChild(para)
            const node = document.createTextNode(tabla[i][j]);
            para.appendChild(node);
            const element = document.getElementById("board");
            element.appendChild(para)
        }
    }
}
*/
function board(){
    fenconverter()
    const rand = document.createElement("tr")
    var lit = 'a'
    for (var i = 0; i < 9; ++i){
        if(i==0){
            const para = document.createElement("th")
            rand.appendChild(para)
            const element = document.getElementById("board");
            element.appendChild(para)
        }else{
            para = document.createElement("th")
            rand.appendChild(para)
            node = document.createTextNode(lit);
            para.appendChild(node);
            element = document.getElementById("board");
            element.appendChild(para);
            lit = String.fromCharCode(lit.charCodeAt(0) + 1);
        }
    }

    for (var i = 0; i < 8; ++i){
        var row = document.createElement('tr')
        for(var j=0; j<9; j++){
            if(j==0){
                var numar = i+1
                para = document.createElement("th")
                const node = document.createTextNode(numar);
                para.appendChild(node)
                row.appendChild(para)
                const element = document.getElementById("board");
                element.appendChild(row)
            }else if(i%2 == j%2){
                para = document.createElement("td")
                node = document.createTextNode(i*10+j-1)
                para.appendChild(node)
                para.classList.add("dark")
                para.classList.add("textcolor")
                row.appendChild(para)
            }else{
                para = document.createElement("td")
                para.classList.add("light")
                row.appendChild(para)
            }
            if(tabla[7-i][j-1]!=0)
                para.classList.add(fenpiese(tabla[7-i][j-1]))
            const element = document.getElementById("board");
            element.appendChild(row)

        }
    }
}


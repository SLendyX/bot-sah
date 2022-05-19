//
function board(){
    const rand = document.createElement("tr")
    var lit = 'a'
    for (var i = 0; i < 9; ++i){
        if(i==0){
            const para = document.createElement("th")
            rand.appendChild(para)
            const node = document.createTextNode(" ");
            para.appendChild(node);
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
            }else if(i%2 != j%2){
                para = document.createElement("td")
                para.classList.add("dark")
                row.appendChild(para)
                const element = document.getElementById("board");
                element.appendChild(row)
            }else{
                para = document.createElement("td")
                para.classList.add("light")
                row.appendChild(para)
                const element = document.getElementById("board");
                element.appendChild(row)
            }

        }
    }
}


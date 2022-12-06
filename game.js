const board = document.getElementById('board');

const elements = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]
let content = ''
for(let rowIndex = 0; rowIndex < elements.length; rowIndex++) {
    content += '<div class="row">'
    for(let colIndex = 0; colIndex < elements[rowIndex].length; colIndex++) {
        content += `<div class="col" onclick="select(this, ${rowIndex}, ${colIndex})">` + elements[rowIndex][colIndex] +'</div>'
    }
    content += '</div>'
}

board.innerHTML = content

let activeSymbol = 'X'

function select(element, rowIndex, colIndex) {
    console.log(element, rowIndex, colIndex)
    if(element.innerHTML == '') {
        elements[rowIndex][colIndex] = activeSymbol
        element.innerHTML = activeSymbol
        activeSymbol = activeSymbol === 'X' ? 'O' : 'X'
        const winnerSymbol = winner()
        // console.log(winnerSymbol, elements)
        if(winnerSymbol) {
            alert(winnerSymbol + ' won!')
        }
    }
}

function winner() {
    // horizontal
    if(elements[0][0] == elements[0][1] && elements[0][1] == elements[0][2] && elements[0][0] != '') {
        return elements[0][0]
    } else if(elements[1][0] == elements[1][1] && elements[1][1] == elements[1][2] && elements[1][0] != '') {
        return elements[1][0]
    } else if(elements[2][0] == elements[2][1] && elements[2][1] == elements[2][2] && elements[2][0] != '') {
        return elements[2][0]
    } 
    // vertical
    else if(elements[0][0] == elements[1][0] && elements[1][0] == elements[2][0] && elements[0][0] != '') {
        return elements[0][0]
    } else if(elements[0][1] == elements[1][1] && elements[1][1] == elements[2][1] && elements[0][1] != '') {
        return elements[0][1]
    } else if(elements[0][2] == elements[1][2] && elements[1][2] == elements[2][2] && elements[0][2] != '') {
        return elements[0][2]
    }
    // diagonal
    else if(elements[0][0] == elements[1][1] && elements[1][1] == elements[2][2] && elements[0][0] != '') {
        return elements[0][0]
    } else if(elements[0][2] == elements[1][1] && elements[1][1] == elements[2][0] && elements[0][2] != '') {
        return elements[0][2]
    }
}
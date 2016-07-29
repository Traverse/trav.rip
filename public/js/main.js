cells = document.getElementsByClassName('cell')
latch = false

function toggleCells() {
    latch = !latch

    if (latch) {
        state = 'none'
    } else {
        state = 'block'
    }

    for (cell of cells) {
        cell.style.display = state
    }
}

setInterval(toggleCells, 5000)

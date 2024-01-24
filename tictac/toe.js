const gamecells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const re = document.querySelector('.re');
let disp = document.getElementById('inputbox');

let c = 'x';
let n = 'o';
let playerturn = c;

const startgame = () => {
    gamecells.forEach(cell => {
        cell.textContent = ''; 
        cell.addEventListener('click', cellClickHandler);
    });
}

const cellClickHandler = (e) => {
    if (e.target.textContent == '') {
        e.target.textContent = playerturn;
        if (checkwin()) {
            disp.innerHTML = `${playerturn} is the winner!!!!`;
            
            gamecells.forEach(cell => {
                cell.removeEventListener('click', cellClickHandler);
            });
        } else {
            changeplayerturn();
        }
    }
}

const changeplayerturn = () => {
    if (playerturn == c) {
        playerturn = n;
    } else {
        playerturn = c;
    }
}

const checkwin = () => {
    const wining = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (let i = 0; i < wining.length; i++) {
        const [p1, p2, p3] = wining[i];

        if (gamecells[p1].textContent !== '' &&
            gamecells[p1].textContent === gamecells[p2].textContent &&
            gamecells[p2].textContent === gamecells[p3].textContent) {
            return true;
        }
    }
    return false;
}

re.addEventListener('click', () => {
    startgame();
});

startgame();

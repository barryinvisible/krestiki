for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += '<div class="block"></div>';
}

let step = 0;
let result = document.getElementById('result'),
    player1, player2;

document.getElementById('done').onclick = function() {
    document.querySelector('.gameWindow').classList.remove('hide');
    player1 = document.getElementById('player1').value;
    player2 = document.getElementById('player2').value
}

document.getElementById('reload').onclick = function() {
    document.location.reload(true);
}

document.getElementById('game').onclick = function(event) {
    console.log(event);
    if (event.target.className == 'block') {
        if (step % 2 == 0) {
            event.target.classList.add('active');
        } else {
            event.target.classList.add('passive');
        }
        step++;
        checkWinner();
    }
}

function checkWinner() {
    let allblock = document.getElementsByClassName('block');
    if (allblock[0].classList.contains('active') && allblock[1].classList.contains('active') && allblock[2].classList.contains('active')) result.innerHTML = player1;
    if (allblock[0].classList.contains('active') && allblock[3].classList.contains('active') && allblock[6].classList.contains('active')) result.innerHTML = player1;
    if (allblock[0].classList.contains('active') && allblock[4].classList.contains('active') && allblock[8].classList.contains('active')) result.innerHTML = player1;
    if (allblock[1].classList.contains('active') && allblock[4].classList.contains('active') && allblock[7].classList.contains('active')) result.innerHTML = player1;
    if (allblock[2].classList.contains('active') && allblock[4].classList.contains('active') && allblock[6].classList.contains('active')) result.innerHTML = player1;
    if (allblock[2].classList.contains('active') && allblock[5].classList.contains('active') && allblock[8].classList.contains('active')) result.innerHTML = player1;
    if (allblock[3].classList.contains('active') && allblock[4].classList.contains('active') && allblock[5].classList.contains('active')) result.innerHTML = player1;
    if (allblock[6].classList.contains('active') && allblock[7].classList.contains('active') && allblock[8].classList.contains('active')) result.innerHTML = player1;

    if (allblock[0].classList.contains('passive') && allblock[1].classList.contains('passive') && allblock[2].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[0].classList.contains('passive') && allblock[3].classList.contains('passive') && allblock[6].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[0].classList.contains('passive') && allblock[4].classList.contains('passive') && allblock[8].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[1].classList.contains('passive') && allblock[4].classList.contains('passive') && allblock[7].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[2].classList.contains('passive') && allblock[4].classList.contains('passive') && allblock[6].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[2].classList.contains('passive') && allblock[5].classList.contains('passive') && allblock[8].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[3].classList.contains('passive') && allblock[4].classList.contains('passive') && allblock[5].classList.contains('passive')) result.innerHTML = player2;
    if (allblock[6].classList.contains('passive') && allblock[7].classList.contains('passive') && allblock[8].classList.contains('passive')) result.innerHTML = player2;
}

// let block = document.querySelector('.block');
// block.addEventListener('click', function() {
//     block.classList.toggle('active');
// });
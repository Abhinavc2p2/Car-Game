score = 0;
cross = true;

// audio
// audiogo = new Audio('over.mp3');
// setTimeout(() => {
//     audio.play()
// }, 1000)
document.onkeydown = function(e) {
    console.log("key code is : ", e.keyCode)
    if (e.keyCode == 38) {
        man = document.querySelector('.man');
        man.classList.add('animateman');
        setTimeout(() => {
            man.classList.remove('animateman')
        }, 700)
    }

    if (e.keyCode == 39) {
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = manX + 112 + "px";
    }
    if (e.keyCode == 37) {
        man = document.querySelector('.man');
        manX = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
        man.style.left = (manX - 112) + "px";
    }

}

setInterval(() => {
    man = document.querySelector('.man');
    gameover = document.querySelector('.gameover');
    obstacle = document.querySelector('.obstacle');

    dx = parseInt(window.getComputedStyle(man, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(man, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameover.style.visibility = 'visible';
        obstacle.classList.remove('obstacleAni')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        })
    } else if (offsetX < 125 && cross) {
        score += 1;
        updatescore(score);
        cross = false
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            anidur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newdur = anidur - 0.8;
            obstacle.style.animationduration = newdur + 's';
            console.log(newdur)
        }, 500)

    }

}, 100)

function updatescore(score) {
    scorecont.innerHTML = "your score: " + score
    console.log(score)
}
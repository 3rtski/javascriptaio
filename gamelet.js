const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let positionHorizontal = 0;
let positionVertical = 0;

function handleKeyPress(e){
    if (e.code === 'ArrowLeft'){
        positionHorizontal = positionHorizontal - 10;
    }

    if(e.code === 'ArrowRight'){
        positionHorizontal = positionHorizontal + 10;
    }

    if(e.code === 'ArrowUp'){
        positionVertical = positionVertical - 10;
    }
    if(e.code === 'ArrowDown'){
        positionVertical = positionVertical + 10;
    }

    if (positionHorizontal<0){
        positionHorizontal =0 ;
    }
    if (positionVertical<0){
        positionVertical =0 ;
    }
    refresh();
}
function refresh(){
    ball.style.left = positionHorizontal + 'px';
    ball.style.top = positionVertical + 'px';
}
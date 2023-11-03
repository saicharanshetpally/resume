// var bars = document.querySelectorAll('.innerskills');
// var target= document.querySelectorAll('.innerskills');
// var ex= document.getElementById('skills-container');
// var animationDone = false;

// window.addEventListener('scroll',checkSroll);

// function skillZero(){
//     for (let bar of bars) 
//         bar.style.width=0+'%';
// }
// skillZero();

// function checkSroll(){
//     for(let singletarget of target){
//         var coordinates = singletarget.getBoundingClientRect().top;
//         var exco = ex.getBoundingClientRect().top;
//         if( !animationDone && coordinates<= window.innerHeight && exco<= window.innerHeight){
//             skillfill(singletarget);
//             animationDone = true;
//         }
//         else if( coordinates > window.innerHeight ){
//             animationDone = false;
//             skillZero();
//         }   
//     }
// }

// function skillfill(singletarget){
//         let cur=0;
//         let width = singletarget.getAttribute('skill-width');
//         let id = setInterval(function(){
//             if(cur>width){
//                 clearInterval(id);
//                 return;
//             }
//                 cur++;
//                 singletarget.style.width = cur+'%';
//         }, 1);
// }
var bars = document.querySelectorAll('.innerskills');
var target= document.getElementById('skills-container');
var animationDone = false;

window.addEventListener('scroll',checkSroll);

function skillZero(){
    for (let bar of bars) 
        bar.style.width=0+'%';
}
skillZero();

function checkSroll(){
    var coordinates = target.getBoundingClientRect().top;
    if( !animationDone && coordinates<= window.innerHeight ){
        skillfill();
        animationDone = true;
    }
    else if( coordinates > window.innerHeight ){
        animationDone = false;
        skillZero();
    }
}

function skillfill(){
    for (let bar of bars) {
        let cur=0;
        let width = bar.getAttribute('skill-width');
        let id = setInterval(function(){
            if(cur>width){
                clearInterval(id);
                return;
            }
                cur++;
                bar.style.width = cur+'%';
        }, 1);
    }
}

function send(){
    document.form.button.value="Message Sended";
}

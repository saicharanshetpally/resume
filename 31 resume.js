
// smooth scroll total 4 steps

// var id;
// // pic all a links
// var allsec=document.querySelectorAll('nav a');

// // add click event handler for all links
// for(let i = 0; i < allsec.length; i++) {
//     allsec[i].addEventListener('click',scrollone);
// }

// // prevent default
// function scrollone( event){
//     event.preventDefault();
//     var target = this.innerHTML.trim().toLowerCase();
//     var targetSection=document.getElementById(target);
//     id = setInterval(scrollUptoTarger, 1, targetSection);
//     // id = setInterval(function(){
//     //     scrollVertically( target)
//     // }, 1);
// }

// function scrollUptoTarger(targetSection){
//     var Ycoordinate = targetSection.getBoundingClientRect().top;
//     if( Ycoordinate<=0 ){
//         clearInterval(id);
//         return;
//     }
//     window.scrollBy( 0, 10);
// }



            // not optimized method

var Asections = document.querySelectorAll('nav a')

for(let i=0;i<Asections.length-1;i++)
{
    Asections[i].addEventListener('click',function(event){
        event.preventDefault();
        var target=this.innerHTML.trim().toLowerCase();
        var section = document.getElementById(target);
        var id=setInterval(function(){
            var sectioncoordinates=section.getBoundingClientRect().top;
            if(sectioncoordinates<=0)
            {
                clearInterval(id);
                return;
            }
            // var sectioncoordinates=section.getBoundingClientRect().top;
            window.scrollBy(0,7);
        },1);
    });
}
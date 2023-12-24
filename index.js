
function togggleNavbar() 
{ 
    var navbar = document.querySelector('.navbar') ; 
    navbar.style.display=
    (navbar.style.display === 'none' || navbar.style.display === ' ') ? 'block' : 'none' ; 
    var navigationbutton = document.querySelector('.navigationbutton');
    navigationbutton.style.display='none' ;
    if(navbar.style.display=== 'block')
    {
    document.querySelectorAll('.extralogo')[0].style.display='none'
    }
    else
    {
        document.querySelectorAll('.extralogo')[0].style.display="" ;
        document.getElementById('cart').style.display="" ;
        }
}  

const previous = document.querySelector('.previous') ;
const next = document.querySelector('.next') ;
const images = document.querySelector('.sliderphotos').children; 

const length = images.length

let current = 0 ; 

previous.addEventListener('click' , () =>
{
    previousimg() ; 
})
next.addEventListener('click' , () =>
{
    nextimg() ; 
})


setInterval (() =>
{
    nextimg() ; 
},2000) ;



function previousimg()
{
    images[current].classList.remove('main');
    if ( current== 0)
    {
        current=length-1 ; 
    }

    else{
        current-- ; 
    }
    images[current].classList.add('main') ;
}


function nextimg()
{
    images[current].classList.remove('main');
    if ( current==length-1 )
    {
        current=0; 
    }

    else{
        current++; 
    }

    images[current].classList.add('main') ;
}

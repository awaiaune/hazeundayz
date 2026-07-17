/*==================================================
PRODUCT SCROLL ANIMATION
==================================================*/


const productFadeElements = 
document.querySelectorAll(
".fade, .product-fade"
);



const productObserver = 
new IntersectionObserver(
(entries)=>{


entries.forEach(entry=>{


    if(entry.isIntersecting){


        entry.target.classList.add("show");


        productObserver.unobserve(
            entry.target
        );


    }


});


},
{

    threshold:0.15

});



productFadeElements.forEach(el=>{

    productObserver.observe(el);

});
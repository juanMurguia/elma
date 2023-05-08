(function(){
    const listElements = document.querySelectorAll('.menu2__item--show');
    const list = document.querySelector('.menu2__links');
    const menu = document.querySelector('.menu2__hamburguer');

    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{

                
                let subMenu = element.children[1];
                let height = 0;
                element.classList.toggle('menu2__item--active');


                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                subMenu.style.height = `${height}px`;

            });
        });
    }

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu2__item--active');
            }

        });
    }


    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 2000){
            deleteStyleHeight();
            if(list.classList.contains('menu2__links--show'))
                list.classList.remove('menu2__links--show');

        }else{
            addClick();
        }
    });

    if(window.innerWidth <= 2000){
        addClick();
    }

    menu.addEventListener('click', ()=> list.classList.toggle('menu2__links--show'));



})();


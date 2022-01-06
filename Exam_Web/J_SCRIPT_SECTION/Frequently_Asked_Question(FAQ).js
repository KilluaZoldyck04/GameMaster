const items_1 =document.getElementsByClassName('Content_1');
/*FOR occupied content1*/
    for (i=0; i<items_1.length; i++){
        items_1[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }
const items_2 =document.getElementsByClassName('Content_2');
/*FOR occupied content2*/
    for (i=0; i<items_2.length; i++){
        items_2[i].addEventListener('click', function(){
            this.classList.toggle('active')
        })
    }
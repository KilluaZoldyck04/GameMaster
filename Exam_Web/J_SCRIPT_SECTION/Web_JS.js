let image = document.getElementById("On_Promo_Items");
var link = document.querySelector('a[href="#"]');
    let images = ['Source_Of_Images/Ragnarok.jpg', 'Source_Of_Images/Light_Of_Thel.jpg', 'Source_Of_Images/Sky_Castle.png','Source_Of_Images/Eclipse Isle.jpg', 'Source_Of_Images/ROS.png']    
    let initial_img=0;
    setInterval(function(){
        initial_img = (initial_img +1) % images.length;
        /* initial_img = (0 + 1) % 5;
                       = 1 % 5;
                       =0.2 || quotient whole number of 0
                       =0 * 5 = 0 multiply to divisor
                       =1 - 0 = 1 subtract from dividend*/
        image.src=images[initial_img];
        if (images[0]){
            link.setAttribute('href', 'https://www.google.com')
        }
        if (images[1]){
            link.setAttribute('href', 'https://www.youtube.com')
        }
        if (images[2]){
            link.setAttribute('href', 'https://www.youtube.com')
        }
        if (images[3]){
            link.setAttribute('href', 'https://www.youtube.com')
        }
        if (images[4]){
            link.setAttribute('href', 'https://www.youtube.com')
        }
    }, 3000);
    function back_Button(){
        initial_img = initial_img - 1;
        image.src=images[initial_img];
    }
    function next_Button(){
        initial_img = initial_img + 1;
        image.src=images[initial_img];
    }
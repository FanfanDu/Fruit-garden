define(['jquery','common'],function($,common){
    return function(){
        console.log('homeÄ£¿é');
        $(function(){
            $('#header').load('header.html');
            $('#footer').load('footer.html');
        });
    }
})
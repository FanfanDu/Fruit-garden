define(['jquery','common'],function($,common){
    return function(){
        console.log('homeģ��');
        $(function(){
            $('#header').load('header.html');
            $('#footer').load('footer.html');
        });
    }
})
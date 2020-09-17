let flag = true;

$( document ).ready(function(){
    if(flag == true) {
        $( "#myBtn" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
            $( ".footer_modal" ).hide();
            flag = false;
        });
    } else {
        $( "#myBtn" ).click(function(){ // задаем функцию при нажатиии на элемент с классом hide
            $( ".footer_modal" ).show();
            flag = true;
        });
    }
});
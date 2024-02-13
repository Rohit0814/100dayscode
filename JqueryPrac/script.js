$(document).ready(function(){
    // $('#clickBtn').click(function (e) { 
    //     $('h1').fadeOut();
        
    // });

    // $('#clickBtn').dblclick(function(){
    //     $('h1').fadeIn();
    // })

    // $("#clickBtn").mouseenter(function(){
    //     $("#clickBtn").css('background-color','red');

    // });

    // $("#clickBtn").mouseleave(function(){
    //     $("#clickBtn").css('background-color','white');

    // });

    $(".comman").addClass('light');

    $("#clickBtn").on({
        click: function(){
            // $('h1').fadeTo(1000,0.5);
            // $('h1').animate({marginLeft:'1000px'}).fadeOut(100);
            let un=$('#username').val();
            $('h1').html(un);
            let anc = $('a').attr("href","gmail.com");
            let type=$('#username').attr('type');
            console.log(anc);
            console.log(type);

            let l= "<li>"+un+"</li>";
            console.log(l);

            // $(".list").prepend(l);

            $(".list").append(l);
            let theam=$('.comman').attr('class');
            $(".comman").toggleClass('light');
            $(".comman").toggleClass('dark');

            // if(theam=="comman light"){
            //     $(".comman").removeClass('light');
            //     $(".comman").addClass('dark');
            // }
            // else{
            //     $(".comman").removeClass('dark');
            //     $(".comman").addClass('light');
            // }
            
        },
        dblclick: function(){
            // $('h1').fadeIn(1000);
            $('h1').slideUp();
        },
        mouseenter: function(){
            $("#clickBtn").css('background-color','red');
        },
        mouseleave:function(){
            $("#clickBtn").css('background-color','white');
        }
    })

});
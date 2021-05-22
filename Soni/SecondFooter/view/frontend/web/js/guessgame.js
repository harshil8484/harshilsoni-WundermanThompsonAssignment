
var guessNumber = 0; 
var allEnteredNum = []; 
    require([
        "jquery",
        "Magento_Ui/js/modal/modal"
    ],function($, modal) {    
        var options = {
            type: 'popup',
            responsive: true,
            title: `Let's Play Guessing Game`,
            modalClass:'custom-modal-box',
        };

        var popup = modal(options, $('#modal'));
        $("#button").click(function() {
            $('#modal').modal('openModal');
            guessNumber = Math.floor(Math.random() * 51);
        });
        $('#guess-number').click(function(){
            var result  = $(".result"); 
            result.text('');                
            result.removeClass('red');
        });
        $("#submitNumber").click(function(){
            var inputValue = $('#guess-number').val();
            var result  = $(".result"); 
            
            //To check the correct answer uncomment next line
            //console.log(guessNumber);
            
            if(inputValue == ''){
                alert('Please enter the number from 1 to 50');
                return false;
            }
            if(inputValue > guessNumber){
                result.text('The number entered was over the random number');
                result.addClass('red');
                allEnteredNum.push(inputValue);
            }
            else if(inputValue < guessNumber){
                result.text('The number entered was below the random number');                
                result.addClass('red');
                allEnteredNum.push(inputValue);
            
            }
            else if (inputValue == guessNumber){
                result.text('Winner!');                
                result.addClass('green');
                allEnteredNum.push(inputValue);
                allEnteredNum.map(function(num){
                    $("#win-num").append(`<span>${num}</span>`)
                });
                setTimeout(function(){
                    $(".restart-game").show();            
                }, 1500);
            }
        });
        $(".restart-game").click(function(){
            $('#guess-number').val('');
            $("p.result").text('');
            $("p.result").removeClass('green')
            $("#win-num span").remove();
            $(this).hide();
            guessNumber = Math.floor(Math.random() * 51);
            allEnteredNum = [];
        });
        
    });

$(function() {

    var name = '';
    var fase = 1;
    var respostas = {
        "question_1": false,
        "question_2": false,
        "question_3": false,
        "question_4": false,
    }

    function animateTo(point, time) {
        $('body').animate({
            scrollTop: point
        }, time);
    }

    var events = {

        questionOne: function(name) {
            $('#nome').focus();
            $('#nome').keypress(function(e){
                if(e.which == 13) {
                    $('.action-bar').slideUp(1000);
                    name = $('#nome').val();
                    $('.first-letter-name').html($('#nome').val().charAt(0)).fadeIn();

                    $('#respostaUm').typed({
                        strings: ["Meu nome é "+ name +"."],
                        typeSpeed: 10,
                        callback: events.questionTwo(name)
                    });
                }
            });

            $('#ok-1').click(function(){
                $('.action-bar').slideUp(1000);
                name = $('#nome').val();
                $('.first-letter-name').html($('#nome').val().charAt(0)).fadeIn();

                $('#respostaUm').typed({
                    strings: ["Meu nome é "+ name +"."],
                    typeSpeed: 10,
                    callback: events.questionTwo(name)
                });
            });
        },
        questionTwo: function(name) {

            fase = 2;
            setTimeout(function(){
                animateTo(40, 1500);
                $('#question_2').fadeIn();
                $('#perguntaDois').typed({
                    strings: ["Prazer, "+ name +". Então, a primeira coisa a fazer, é saber se você tem o direito de receber a compensação por importação. Para isso vou fazer algumas perguntas básicas, ok?"],
                    typeSpeed: 10,
                    callback: events.questionThree(name)
                });
            }, 1500);
        },
        questionThree: function(name) {

            fase = 3;

            setTimeout(function(){
                animateTo(150, 1500);
                $('#perguntaTres').typed({
                    strings: ["Sua empresa é optante pelo lucro presumido?"],
                    typeSpeed: 10,
                    callback: events.questionFor(name)
                });
                $('#question_3, #answer_3').fadeIn(1500);          
            }, 10000);
        },
        questionFor: function(name){
            fase = 4;
            $('.action-bar').slideDown(1000);
            $('#nome, #ok-1').hide();
            $('#no-1, #yes-1').fadeIn();
        },
        questionFive: function(){
            fase = 5;

            setTimeout(function(){
                animateTo(700, 1500);
                $('#perguntaCinco').typed({
                    strings: ["Você realizou alguma importação entre junho de 2011 até outubro de 2013?"],
                    typeSpeed: 10,
                    callback: function() {
                        fase = 6;
                    }
                });
                $('#question_5, #answer_5').fadeIn(1500);          
            }, 1000);
        }
    }

    $('#no-1').click(function(){
        if(fase == 4) {
            $('#respostaTres').typed({
                strings: ["Não."],
                //strings: ["Que pena, Mendes.... Neste caso, sua empresa não faz parte do grupo beneficiado da decisão do STF para restituição do PIS e Cofins Importação. Mas fique ligado em nosso site, qualquer mudança informamos você imediatamente ;) ."],
                typeSpeed: 10,
                callback: function(){
                    $('#question_4').css('margin-bottom', '250px');
                }
            });

            $('#question_4').fadeIn();
            animateTo(400, 4000);

            $('#perguntaQuatro').typed({
                strings: ["Que pena, "+ $('#nome').val() +".... Neste caso, sua empresa não faz parte do grupo beneficiado da decisão do STF para restituição do PIS e Cofins Importação. Mas fique ligado em nosso site, qualquer mudança informamos você imediatamente ;) ."],
                typeSpeed: 10,
                callback: function(){
                    setTimeout(function(){
                        console.log(name)
                        $('.action-bar').slideUp(1000);
                    }, 2000);
                }
            });
        }

    });

    $('#yes-1').click(function(){

        if(fase == 4) {

            $('#respostaTres').typed({
                strings: ["Sim."],
                //strings: ["Que pena, Mendes.... Neste caso, sua empresa não faz parte do grupo beneficiado da decisão do STF para restituição do PIS e Cofins Importação. Mas fique ligado em nosso site, qualquer mudança informamos você imediatamente ;) ."],
                typeSpeed: 10,
                callback: function(){}
            });

            $('#question_4').fadeIn();
            animateTo(600, 3000);
            $('#perguntaQuatro').typed({
                strings: ["Perfeito, "+ $("#nome").val() +"!"],
                typeSpeed: 10,
                callback: events.questionFive()
            });
        }

        if( fase == 6 ) {
            $('#answer_5').fadeIn();
            $('#respostaCinco').typed({
                strings: ["Sim, realizei."],
                typeSpeed: 10,
            })
            animateTo(1000, 3000);
            $('#question_6').fadeIn(1500); 
            $('#perguntaSeis').typed({
                strings: ["Então temos muito o que conversar!"],
                typeSpeed: 10,
                callback: function(){
                        $('#no-1, #yes-1').hide();
                        $('#simularValores, #receberContato').fadeIn();

                        $('#receberContato').click(function(){
                            $('#simularValores, #receberContato').hide();
                            $('#email, #telefone, #btn-ok-receber').fadeIn();

                            $('#btn-ok-receber').click(function(){
                                animateTo(1100, 2000);
                                $('#question_6').css('margin-bottom', '0px');
                                $('#question_7').fadeIn();
                                $('.action-bar').slideUp(1000);
                                $('#perguntaSete').typed({
                                    strings: ["Obrigado! Em breve entraremos em contato com você"],
                                    typeSpeed: 10
                                })
                            })
                        })
                }
            });
        }
    });

    $("#perguntaUm").typed({
        strings: ["Antes de tudo, como posso te chamar?"],
        typeSpeed: 10,
        callback: events.questionOne()
        /*callback: function() {
          $(".fala-bot2").typed({
            strings: ["Prazer, Mendes. Então, a primeira coisa a fazer, é saber se você tem o direito de receber a compensação por importação. Para isso vou fazer algumas perguntas básicas, ok?"],
            typeSpeed: 10,
            callback: function(){
              $(".fala-bot2").typed({
                strings: ["Vou te ajudar a descobrir o valor do seu crédito sobre as importações realizadas. Vamos Começar?"],
                typeSpeed: 10
            });
        }*/
    });
});
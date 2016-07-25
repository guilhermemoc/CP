setInterval(function(){
    $('#chat').animate({
        scrollTop: $('#chat').height()+9999999999999999999
    }, 1000);
}, 500);

$(function() {

    $('#valor_aprox').mask('000.000.000.000.000,00', {reverse: true});

    $('#btn-ok-receber').click(function(){
        if($('#email')[0].checkValidity()) {
            sendData();
        }

        $('.action-bar').slideUp();

        if($('#telefone').val() == '') {
            setTimeout(function(){
                $('#perguntaOnze').typed({
                    strings: ["Obrigado!^500 Qualquer mudança informamos você imediatamente."],
                    typeSpeed: -30,
                });
                $('#question_11').show();
                backSite();
            }, 800);
        } else {
            setTimeout(function(){
                $('#perguntaOnze').typed({
                    strings: ["Obrigado, em breve nossa equipe entrará em contato com você."],
                    typeSpeed: -30,
                });
                $('#question_11').show();
                backSite();
            }, 800);
        }
    })

    $('#email').keypress(function(e){
        if(e.which == 13) {
            if($('#email')[0].checkValidity()) {
                sendData();
            }

            $('.action-bar').slideUp();

            setTimeout(function(){
                $('#perguntaOnze').typed({
                    strings: ["Obrigado!^500 Qualquer mudança informamos você imediatamente."],
                    typeSpeed: -30,
                });
                $('#question_11').show();
                backSite();
            }, 800);
        }

    });

    $('#telefone').keypress(function(e){
        if(e.which == 13) {
            if($('#email')[0].checkValidity()) {
                sendData();
            }

            $('.action-bar').slideUp();

            setTimeout(function(){
                $('#perguntaOnze').typed({
                    strings: ["Obrigado, em breve nossa equipe entrará em contato com você."],
                    typeSpeed: -30,
                });
                $('#question_11').show();
                backSite();
            }, 800);
        }

    });

    function backSite() {

        setTimeout(function(){
            $('.action-bar').slideDown();
            $('.action-bar input, .action-bar button').hide();
            $('#btn-voltar-site').fadeIn();
            $('#btn-voltar-site').click(function(){
                window.open('http://pcimporta.com.br/novo','_self')
            });
        }, 1600);

    }

    function sendData(type) {

        console.log($('#telefone').val());

        $.post('http://localhost/final/CorreaPorto/receber.php', {
            'name'    : $('#nome').val(),
            'telefone': $('#telefone').val() == '' ? 'NaN':$('#telefone').val(),
            'email'   : $('#email').val()
        });
    }
    function animateTo(point, time) {
        /*$('body').animate({
            scrollTop: point
        }, time);*/

    }

    var numberWithCommas = function(x /* float */) {
        if (typeof x == 'undefined') {
            return false;
        }

        x = x.toFixed(2).replace('.', ',');
        var parts = result = x;


        if (/\,/.test(x)) {
            parts = parts.split(",");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            result = parts.join(",");
        } else {
            parts = parts.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
            result = parts;
        }

        return result;
    }

    var events = {

        questionOne: function(name) {
            setTimeout(function(){
                $('.action-bar').slideDown();
                $('#nome').focus();
            }, 500);

            $('#nome').keypress(function(e){
                if(e.which == 13) {
                    $('#answer_1').show();
                    $('.action-bar').slideUp(1000);
                    name = $('#nome').val();
                    $('.first-letter-name').html($('#nome').val().charAt(0)).show();

                    $('#respostaUm').typed({
                        strings: ["Meu nome é "+ name +"."],
                        typeSpeed: -30,
                        callback: events.questionTwo(name)
                    });
                }
            });

            $('#ok-1').click(function(){
                $('.action-bar').slideUp(1000);
                name = $('#nome').val();
                $('.first-letter-name').html($('#nome').val().charAt(0)).show();

                $('#respostaUm').typed({
                    strings: ["Meu nome é "+ name +"."],
                    typeSpeed: -30,
                    callback: events.questionTwo(name)
                });
            });
        },
        questionTwo: function(name) {

            fase = 2;
            setTimeout(function(){
                animateTo(40, 1500);
                $('#question_2').show();
                $('#perguntaDois').typed({
                    strings: ["Prazer, "+ name +". A primeira coisa a fazer, é saber se você tem o direito de receber a compensação por importação. Para isso, tenho algumas perguntas..."],
                    typeSpeed: -30,
                    callback: events.questionThree(name)
                });
            }, 1500);
        },
        questionThree: function(name) {

            fase = 3;
            animateTo(150, 1500);

            setTimeout(function(){
                $('#perguntaTres').typed({
                    strings: ["Sua empresa é optante pelo lucro presumido?"],
                    typeSpeed: -30,
                    callback: events.questionFor(name)
                });
                $('#question_3').show();
            }, 4000);
        },
        questionFor: function(name){
            fase = 4;
            animateTo(150, 1500);
            setTimeout(function(){
                $('.action-bar').slideDown();
                $('#nome, #ok-1').hide();
                $('#no-1, #yes-1').show();
            }, 1000);

        },
        questionFive: function(){
            fase = 5;

            setTimeout(function(){
                $('.action-bar').slideDown();
            }, 3200);

            setTimeout(function(){

                $('#perguntaCinco').typed({
                    strings: ["Você realizou alguma importação entre junho de 2011 até outubro de 2013?"],
                    typeSpeed: -30,
                    callback: function() {
                        fase = 6;
                    }
                });

                $('#question_5').show();
            }, 2000);
        }
    }

    $('#no-1').click(function(){
        if(fase == 4) {
            $('.action-bar').slideUp();
            $('#answer_3').show();
            $('#respostaTres').typed({
                strings: ["Não."],
                //strings: ["Que pena, Mendes.... Neste caso, sua empresa não faz parte do grupo beneficiado da decisão do STF para restituição do PIS e Cofins Importação. Mas fique ligado em nosso site, qualquer mudança informamos você imediatamente ;) ."],
                typeSpeed: -30,
            });

            setTimeout(function(){
                $('#question_4').show();
                $('#perguntaQuatro').typed({
                    strings: ["Que pena, "+ $('#nome').val() +"....^1000 Neste caso, sua empresa não faz parte do grupo beneficiado da decisão do STF para restituição do PIS e Cofins Importação.^1000 Mas fique ligado em nosso site, qualquer mudança informamos você imediatamente."],
                    typeSpeed: -20,
                    callback: function(){
                        setTimeout(function(){
                            $('#yes-1, #no-1').hide();
                            $('#email, #btn-ok-receber').show();
                            $('.action-bar').slideDown();
                            $('#email').focus();
                        }, 200);

                    }
                });
            }, 1000)

        }

        if(fase == 6) {
            setTimeout(function(){
                $('.action-bar').slideUp();
                $('#question_12').show();
                $('#perguntaDoze').typed({
                    strings: ["Que pena,^500 é o período onde é possível restituir os valores pagos a maior..^1000 Mas deixe seu e-mail e fique ligado em nosso site, qualquer mudança lhe informamos.   ;)"],
                    typeSpeed: -20,
                    callback: function(){
                        setTimeout(function(){
                            $('#yes-1, #no-1').hide();
                            $('#email, #btn-ok-receber').show();
                            $('.action-bar').slideDown();
                            $('#email').focus();
                        }, 200);

                    }
                });
            }, 300)
        }

    });

    $('#yes-1').click(function(){

        if(fase == 4) {

            $('#answer_3').show();
            $('#respostaTres').typed({
                strings: ["Sim."],
                //strings: ["Que pena, Mendes.... Neste caso, sua empresa não faz parte do grupo beneficiado da decisão do STF para restituição do PIS e Cofins Importação. Mas fique ligado em nosso site, qualquer mudança informamos você imediatamente ;) ."],
                typeSpeed: 7,
                callback: function(){}
            });

            $('.action-bar').slideUp();

            setTimeout(function(){
                $('#perguntaQuatro').typed({
                    strings: ["Perfeito, "+ $("#nome").val() +"!"],
                    typeSpeed: -30,
                    callback: events.questionFive()
                });
                $('#question_4').show();
            }, 1000);

        }

        if( fase == 6 ) {
            $('#answer_5').show();
            $('#respostaCinco').typed({
                strings: ["Sim, realizei."],
                typeSpeed: 7,
            })
            $('.action-bar').slideUp();

            setTimeout(function(){
                $('.action-bar').slideDown();
                $('#simular, #valor_aprox').show();
                $('#valor_aprox').focus();

                function simulate() {

                    var input = $('#valor_aprox').val().split(',')[0].replace(/\./g, '');
                    var y = input * 0.0925 * 0.28;
                    var z = y * 0.52;
                    var final = numberWithCommas(z + y);

                    $('.action-bar').slideUp();
                    $('#question_9').show();
                    $('#perguntaNove').typed({
                        strings: ["Estamos calculando.^600.^600.^1500 Fizemos nossos cálculos, você tem aproximadamente <strong style=\"font-weight: 700 !important;\">R$<span class=\"result_conta\">"+ final +"</span></strong>^1000, incrível, não é?^1000 Em tempos de crise, é sempre bom restituir impostos."],
                        typeSpeed: -30,
                    });

                    setTimeout(function(){
                        $('#question_10').show();
                        $('#perguntaDez').typed({
                            strings: ["Você pode <strong style=\"font-weight: 700 !important;\">\"recuperar agora\"</strong> em nosso sistema ou deixar para <strong style=\"font-weight: 700 !important;\">\"recuperar depois\"</strong>."],
                            typeSpeed: -30,
                            callback: function(){
                                    $('.action-bar').slideDown();
                                    $('#simular, #valor_aprox').hide();
                                    $('#receberAgora, #receberDepois').show();
                                    $('#receberAgora').click(function(){
                                        $('.action-bar').slideUp();
                                        setTimeout(function(){
                                            $('#question_14').show();
                                            $('#perguntaCatorze').typed({
                                                strings: ["Aguarde um instante, estamos te redirecionando.^500.^500."],
                                                typeSpeed: -30
                                            });
                                        }, 500);
                                        setTimeout(function(){
                                            window.open('http://pcimporta.com.br/cliente/cadastrar', '_self');
                                        }, 4000);
                                    })
                                    $('#receberDepois').click(function(){

                                        $('.action-bar').slideUp();
                                        setTimeout(function(){
                                            $('#question_13').show();
                                            $('#perguntaTreze').typed({
                                                strings: ["Precisamos de algumas informações para que nossa equipe entre em contato."],
                                                typeSpeed: -30
                                            });
                                        }, 500);


                                        setTimeout(function(){
                                            $('.action-bar').slideDown();
                                            $('#receberAgora, #receberDepois').hide();
                                            $('#email, #telefone, #btn-ok-receber').show();
                                            $('#email').focus();
                                        }, 1800);

                                    })
                                    //$('#receberContato')
                            }
                        })
                    }, 9000);
                }

                $('#valor_aprox').keypress(function(e){
                    if(e.which == 13){
                        simulate();
                    }
                });

                $('#simular').click(function(){
                    simulate();
                })
                $('#yes-1, #no-1').hide();
            }, 4000);

            setTimeout(function(){
                $('#perguntaSeis').typed({
                    strings: ["Vou te ajudar a receber os valores ;)"],
                    typeSpeed: -30,
                    callback: function(){
                        setTimeout(function(){
                            $('#question_8').show();
                            $('#perguntaOito').typed({
                                strings: ["Qual o valor aproximado das importações do período?  Vamos simular o quanto tem direito a receber."],
                                typeSpeed: -30,
                                callback: function(){}
                            });
                        }, 900);
                    }
                });
                $('#question_6').show();
            }, 1000);

        }
    });

    $("#perguntaUm").typed({
        strings: ["Antes de tudo, como posso te chamar?"],
        typeSpeed: -30,
        callback: events.questionOne()
        /*callback: function() {
          $(".fala-bot2").typed({
            strings: ["Prazer, Mendes. Então, a primeira coisa a fazer, é saber se você tem o direito de receber a compensação por importação. Para isso vou fazer algumas perguntas básicas, ok?"],
            typeSpeed: 7,
            callback: function(){
              $(".fala-bot2").typed({
                strings: ["Vou te ajudar a descobrir o valor do seu crédito sobre as importações realizadas. Vamos Começar?"],
                typeSpeed: 7
            });
        }*/
    });
});

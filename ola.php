<html lang="pt-BR">

  <head>
    <meta charset="UTF-8">
    <title>PC Importa</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!-- Raleway  regular 400    semibold 600    medium 500  bold 700 -->
  <link href='https://fonts.googleapis.com/css?family=Raleway:600,700,400,500' rel='stylesheet' type='text/css'>
    <link href='css/cpt.css' rel='stylesheet' type='text/css'>
    <link href='css/hover.css' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script src="js/typed.js"></script>
    <script>

      $(function() {
        $(".fala").typed({
          strings: ["Oi, eu sou o Marcos da PC Importa."],
          typeSpeed: 10,
          callback: function() {

            $(function() {
                $(".fala2").typed({
                  strings: ["Vou te ajudar a descobrir o valor do seu  crédito sobre as importações realizadas.</br> Vamos começar?"],
                  typeSpeed: 10
                });

                setTimeout(function(){
                  $('.action-bar').slideDown("slow");
                }, 5000);
              });
            }
        });
      });




    </script>
  </head>

  <body>
    <section class="wrap-bar">
      <img src="imgs/logo.png" class="logo-bot">
    </section>
    <section class="wrap">
      <section class="profile"><img src="imgs/profile.png" class="profile"></section>
      <section class="dialog">
        <div class="fala"></div>
        <div class="fala2"></div>
        <section class="action-bar">
           <div class="wrap-act-bar">
          <a href="conhecer"><button type="button" class="start">Começar<i class="fa fa-caret-right" style="color: #fff; margin-left: 6em;"></i></button></a>
          </div>
        </section>
      </section>



    </section>
  </body>

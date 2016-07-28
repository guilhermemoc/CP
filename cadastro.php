<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="css/main.css" type="text/css">
  <!-- Raleway  regular 400    semibold 600    medium 500  bold 700 -->
  <link href='https://fonts.googleapis.com/css?family=Raleway:600,700,400,500' rel='stylesheet' type='text/css'>
  <title>Cadastre-se | PC Importa</title>
</head>

<body>
  <section class="c-contain">
    <img src="imgs/logo.png" alt="Correa Porto" class="c-logo">
    <section class="c-centered">
      <h1>Cadastro de Usuário</h1>
      <p>Preencha os dados abaixo</p>
      <form>
        <div class="styled-input">
          <input type="text" required />
          <label>Seu nome</label>
          <span></span>
        </div>

        <div class="styled-input">
          <input type="text" name="Nome" required />
          <label>Email</label>
          <span></span>
        </div>

        <div class="styled-input">
          <input type="tel" name="Telefone" required />
          <label>Telefone</label>
          <span></span>
        </div>

        <div class="styled-input">
          <input type="text" name="CNPJ" required />
          <label>CNPJ</label>
          <span></span>
        </div>

        <div class="styled-input">
          <input type="text" name="Razão Social" required />
          <label>Razão Social</label>
          <span></span>
        </div>

        <button id="cadastra" type="submit">Cadastrar</button>

      </form>
    </section>
  </section>
</body>
</html>

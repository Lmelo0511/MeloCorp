<?php
if (isset($_POST["acao"])) {
   $nome = $_POST["Username"]; 
   $data = $_POST["Data_de_Nascimento"]; 
   $email = $_POST["Email"]; 
   $number = $_POST["Numero"]; 
   $password = $_POST["Codigo"];
   $password = $_POST["ConfirmeCodigo"];  

   echo "<p>Olá, ".$nome."</p>"; 
   echo "<p>Sua data de nascimento é: ".$data."</p>";
   echo "<p>Seu email é: ".$email."</p>"; 
   echo "<p>Seu CPF é: ".$number."</p>"; 
   echo "<p>Sua senha é: ".$password."</p>";

$erro = false;
$mensagem_erro = "";

if (isset($_POST["acao"])) {
   // Validar o nome de usuário
   if (empty($_POST["Username"])) {
      $erro = true;
      $mensagem_erro .= "<p>Por favor, insira um nome de usuário.</p>";
   } else {
      $nome = $_POST["Username"];
   }

   // Validar a data de nascimento
   if (empty($_POST["Data_de_Nascimento"])) {
      $erro = true;
      $mensagem_erro .= "<p>Por favor, insira uma data de nascimento.</p>";
   } else {
      $data = $_POST["Data_de_Nascimento"];
      if (!preg_match("/^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/", $data)) {
         $erro = true;
         $mensagem_erro .= "<p>A data de nascimento deve estar no formato dd/mm/aaaa.</p>";
      }
   }

   // Validar o email
   if (empty($_POST["Email"])) {
      $erro = true;
      $mensagem_erro .= "<p>Por favor, insira um endereço de email.</p>";
   } else {
      $email = $_POST["Email"];
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
         $erro = true;
         $mensagem_erro .= "<p>Por favor, insira um endereço de email válido.</p>";
      }
   }

   // Validar o número de telefone
   if (empty($_POST["Numero"])) {
      $erro = true;
      $mensagem_erro .= "<p>Por favor, insira um número de telefone.</p>";
   } else {
      $telefone = $_POST["Numero"];
      if (!preg_match("/^[0-9]{10}$/", $number)) {
         $erro = true;
         $mensagem_erro .= "<p>O número de telefone deve conter 10 dígitos.</p>";
      }
   }

   // Validar a senha
   if (empty($_POST["Codigo"]) || empty($_POST["ConfirmeCodigo"])) {
      $erro = true;
      $mensagem_erro .= "<p>Por favor, insira e confirme sua senha.</p>";
   } else {
      $senha = $_POST["Codigo"];
      $confirmaSenha = $_POST["ConfirmeCodigo"];
      if ($senha != $confirmaSenha) {
         $erro = true;
         $mensagem_erro .= "<p>As senhas não coincidem.</p>";
      }
   }

   // Se não houver erros, exibir as informações do usuário
   if (!$erro) {
      echo "<p>Olá, ".$nome."</p>"; 
      echo "<p>Seu nome é: ".$data."</p>"; 
      echo "<p>Seu email é: ".$email."</p>"; 
      echo "<p>Seu CPF é: ".$number."</p>";
      echo "<p>Sua senha é: ".$senha."</p>";
   } else {
      echo $mensagem_erro;
   }
   header("Location: obrigado.html");
   exit();

}

}
?>
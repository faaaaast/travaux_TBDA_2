<?php if(!empty($_POST['email'])&&!empty($_POST['sujet'])&&!empty($_POST['name'])&&!empty($_POST['prenom'])&&!empty($_POST['commentaire'])){
    $email = $_POST['email'];
    $name = $_POST['name'];
    $prenom = $_POST['prenom'];
    $subject =$_POST['sujet'];
    $to = 's.lefebvre907@laposte.net';
    $commentaire = $_POST['commentaire'];
    $commentaire = wordwrap($commentaire, 70, "\r\n");
$commentaire = str_replace("\n.", "\n..", $commentaire);
$headers = 'From: '.$email.'' . "\r\n" .
'Reply-To: '.$to.'' . "\r\n" .
'X-Mailer: PHP/' . phpversion();
$success = mail($to, $subject, $commentaire, $headers);
if(!$success){
    $errorMessage = error_get_last()['message'];
    echo $errorMessag;
}else{
    echo 'email envoyé';
    header('Location: ./contact.html?email=1');
}
}
?>
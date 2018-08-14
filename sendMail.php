<?php
/**
 * Created by PhpStorm.
 * User: radomir
 * Date: 15/06/2018
 * Time: 17:55
 */

header('Access-Control-Allow-Origin: *');

// data pro odeslani
if(isset($_POST)){
    foreach($_REQUEST as $key=>$value ){

    }
}

$url = 'https://api.elasticemail.com/v2/email/send';
try{
    $post = array('from' => 'radek@brivestudio.com',
        'fromName' => 'Brive Studio',
        'apikey' => '9efda854-9401-4104-8360-bfc39c6e0882',
        'subject' => 'Kontakt z webu brivestudio',
        'to' => 'radovanmail@gmail.com',
        'bodyHtml' => '<h1>Html Body</h1>',
        'bodyText' => 'Text Body',
        'isTransactional' => false);
    $ch = curl_init();
    curl_setopt_array($ch, array(
        CURLOPT_URL => $url,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $post,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_HEADER => false,
        CURLOPT_SSL_VERIFYPEER => false
    ));

    $result=curl_exec ($ch);
    curl_close ($ch);
    echo $result;
}
catch(Exception $ex){
    echo $ex->getMessage();
}
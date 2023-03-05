<?php
    $username = $_POST['username'];
    $password = $_POST['password'];
    if ($username == 'masbro' && $password == '32022017') {
        echo "Congrats!, Account has been hacked!";
    } else {
        echo "Haha! you failed!";
    }
?>

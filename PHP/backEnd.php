<?php

$computer = ['steen', 'papier', 'schaar'];

$computerKeuze = array_rand($computer, 1);

function outputWinnaar($computerKeuze, $computer) {
    if (isset($_GET['steen'])) {
        $steen = $_GET['steen'];
        if ($steen == $computer[$computerKeuze]) {
            echo "Gelijkspel";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        } elseif($computer[$computerKeuze] == 'papier') {
            echo "Computer wint!!!";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        } elseif ($computer[$computerKeuze] == 'schaar') {
            echo "Speler wint!!!";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        }
    }
    if (isset($_GET['papier'])) {
        $papier = $_GET['papier'];
        if ($papier == $computer[$computerKeuze]) {
            echo "Gelijkspel";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        } elseif ($computer[$computerKeuze] == 'steen') {
            echo "Speler wint!!!";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        } elseif ($computer[$computerKeuze] == 'schaar') {
            echo "Computer wint!!!";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        }
    }
    if (isset($_GET['schaar'])) {
        $schaar = $_GET['schaar'];
        if ($schaar == $computer[$computerKeuze]) {
            echo "Gelijkspel";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        } elseif ($computer[$computerKeuze] == 'steen') {
            echo "Computer wint!!!";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        } elseif ($computer[$computerKeuze] == 'papier') {
            echo "Speler wint!!!";
            header("Refresh:3 ; URL=http://localhost/PHP/");
            exit;
        }
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1><?php echo outputWinnaar($computerKeuze, $computer) ?></h1>
    
</body>
</html>
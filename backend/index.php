<?php

// To allow requests from all clients
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: *');

require_once './vendor/autoload.php';
require_once './application/Router/RunRouter.php';

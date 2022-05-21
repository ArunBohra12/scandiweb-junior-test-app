<?php

use Application\Router\Router;
use Application\Controller\Product;

$router = new Router($_SERVER);

$router->addRoute('all-products', function() {
    $products = new Product();
    print_r(json_encode($products->getAll()));
});

$router->addRoute('add-product', function () {
    $products = new Product();
    $productData = json_decode(file_get_contents('php://input'), true);
    if (is_array($productData)) {
        print_r(json_encode($products->createProduct($productData)));
    }
});

$router->addRoute('delete-product', function () {
    $deleteData = json_decode(file_get_contents('php://input'), true);
    $products = new Product();
    if (is_array($deleteData)) {
        print_r(json_encode($products->massDelete($deleteData)));
    }
});

$router->run();

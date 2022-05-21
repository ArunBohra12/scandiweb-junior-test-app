<?php

namespace Application\Controller;

interface ValidateProduct
{
    function validateString(string $str);
    function validateNumbers($number);
    function validateProduct(array $productData);
}

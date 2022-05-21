<?php

namespace Application\Controller;

use Application\Model\ProductModel;

class Product extends  ProductModel implements ValidateProduct
{
    public function getAll(): array
    {
        $allProducts = $this->getAllProducts();

        if (!empty($allProducts)) {
            return ($allProducts);
        }

        return array('status' => false);
    }

    public function checkDuplicateSku(string $sku): bool
    {
        $product = $this->getOneProduct($sku);

        if (empty($product)) {
            return false;
        }

        return true;
    }

    public function createProduct(array $productData): array
    {
        $response = array();
        if (empty($productData)) {
            http_response_code(400);
            $response['status'] = false;
            $response['message'] = 'Please provide all the details about the product.';
            return $response;
        }

        // Check for duplicate sku
        $isSkuAlreadyPresent = $this->checkDuplicateSku($productData['sku']);

        if ($isSkuAlreadyPresent) {
            $response['status'] = false;
            $response['message'] = 'Product with that sku is already present';
            return $response;
        }

        $validateProduct = $this->validateProduct($productData);
        if (!$validateProduct['status']) {
            return $validateProduct;
        }

        $productAddResult =  $this->addProduct($productData);
        if ($productAddResult) {
            http_response_code(201);
            $response['status'] = true;
            $response['message'] = 'Product created successfully';
        } else {
            $response['status'] = false;
            $response['message'] = 'Something went wrong while creating the product';
        }

        return $response;
    }

    public function massDelete($deleteData): array
    {
        $response = array();

        $deleteResponse = $this->deleteProducts($deleteData);
        if ($deleteResponse) {
            $response['status'] = true;
            $response['message'] = 'Successfully deleted products.';
        } else {
            $response['status'] = false;
            $response['message'] = 'Failed to delete.';
        }
        return $response;
    }

    public function validateString(string $str): bool
    {
        return !empty($str) && strlen($str) > 0;
    }

    public function validateNumbers($number): bool
    {
        return !empty($number) && $number > -1;
    }

    public function validateProduct(array $productData): array
    {
        $response = array();

        $sku = $productData['sku'] ?? '';
        $name = $productData['name'] ?? '';
        $type = $productData['type'] ?? '';
        $price = $productData['price'] ?? '';
        $height = $productData['height'] ?? '';
        $length = $productData['length'] ?? '';
        $width = $productData['width'] ?? '';
        $weight = $productData['weight'] ?? '';
        $size = $productData['size'] ?? '';

        if (!empty($size) || !empty($weight) || (!empty($length) && !empty($height) && !empty($width))) {
            $response['status'] = false;
            $response['message'] = 'Please provide all the attributes';
            return $response;
        }

        // Can create function to validate sku if specifications are present
        if (!$this->validateString($sku)) {
            $response['status'] = false;
            $response['message'] = 'Please provide a value for sku';
            return $response;
        }

        if (!$this->validateString($name)) {
            $response['status'] = false;
            $response['message'] = 'Please provide a value for name';
            return $response;
        }

        if (!$this->validateString($type)) {
            $response['status'] = false;
            $response['message'] = 'Please select a product type';
            return $response;
        }

        if (!$this->validateNumbers($price)) {
            $response['status'] = false;
            $response['message'] = 'Please provide a valid price for the product';
            return $response;
        }

        return array('status' => true);
    }
}

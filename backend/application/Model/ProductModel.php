<?php

namespace Application\Model;

use Application\Database\QueryBuilder;

class ProductModel extends QueryBuilder
{
    private $table = 'products';

    public function addProduct($productData)
    {
        $fields = array();
        $values = array();

        foreach ($productData as $key => $value) {
            $fields[] = $key;
            $values[] = $value;
        }

        return $this->insert($this->table, $fields, $values);
    }

    public function getAllProducts(): array
    {
        return $this->get($this->table);
    }

    public function getOneProduct(string $value): array
    {
        return $this->get($this->table, '*', '', $value);
    }

    public function deleteProducts(array $products): bool
    {
        return $this->delete($this->table, 'sku', $products);
    }
}

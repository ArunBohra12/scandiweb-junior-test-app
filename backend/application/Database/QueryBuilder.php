<?php

namespace Application\Database;

class QueryBuilder extends Connection
{

    private $connection;

    public function __construct()
    {
        $this->connection = $this->connect();
    }

    public function get($table, $field = '*', $orderBy = '', $whereCondition = '', $orderType = 'desc'): array
    {
        $sql = "SELECT $field from $table";

        if (!empty($whereCondition)) {
            $sql .= " WHERE sku='$whereCondition' ";
        }

        if (!empty($orderBy)) {
            $sql .= " ORDER BY $orderBy $orderType ";
        }

        $result = $this->connection->query($sql);

        $response = array();

        if ($result->num_rows > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                $response[] = $row;
            }
        }

        return $response;
    }

    public function insert($table, array $fields,  array $values)
    {
        $fieldsToInsert = implode(', ', $fields);

        $valuesToInsert = '';
        for ($i = 0; $i < count($values); $i++) {
            // Ternary operator is to remove trailing comma after the values field
            if (is_null($values[$i])) {
                // Will add null instead of a blank string in the sql query
                $valuesToInsert .= ($i == count($values) - 1) ? "NULL" : "NULL, ";
            } else {
                $valuesToInsert .= ($i == count($values) - 1) ? "'$values[$i]'" : "'$values[$i]', ";
            }
        }

        $sql = "INSERT INTO $table ($fieldsToInsert) VALUES ($valuesToInsert)";

        return $this->connection->query($sql);
    }

    public function delete($table, $idName, array $ids): bool
    {
        $idsToDelete = '';
        if (!empty($ids)) {
            for ($i = 0; $i < count($ids); $i++) {
                $idsToDelete .= ($i == count($ids) - 1) ? "'$ids[$i]'" : "'$ids[$i]', ";
            }
        }

        $sql = "DELETE FROM $table WHERE $idName IN ($idsToDelete)";
        $result = $this->connection->query($sql);

        if ($result) {
            return true;
        } else {
            return false;
        }
    }
}

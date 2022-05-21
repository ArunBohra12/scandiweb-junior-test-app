<?php

namespace Application\Database;

use mysqli;

class Connection
{
    private $host = 'localhost';
    private $username = 'root';
    private $password = '';
    private $database = 'sw';

    public function connect()
    {
        $conn = new mysqli($this->host, $this->username, $this->password, $this->database);

        if ($conn->connect_error) {
            die('Database Error: Unable to connect to database.');
        }

        return $conn;
    }
}

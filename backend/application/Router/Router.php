<?php

namespace Application\Router;

class Router
{
    public $request;

    // The $routes array will contain our URI's and callbacks.
    public $routes = [];

    public function __construct(array $request)
    {
        $this->request = basename($request['REQUEST_URI']);
    }

    // Add a route and a callback to our $routes array.
    public function addRoute(string $uri, \Closure $func)
    {
        $this->routes[$uri] = $func;
    }

    public function hasRoute(string $uri) : bool
    {
        return array_key_exists($uri, $this->routes);
    }

    public function run()
    {
        if($this->hasRoute($this->request)) {
            $this->routes[$this->request]->call($this);
        }
    }
}

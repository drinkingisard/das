<?php

$url = $_SERVER['REQUEST_URI'];

echo $url;

$url = explode('/', $_SERVER['REQUEST_URI']);

if ($url[1] == "/") {
    require_once("index.html");
}
if ($url[1] == "contact") {
    require_once("contact.html");
}
if ($url[1] == "restaurants") {
    require_once("restaurants.html");
}

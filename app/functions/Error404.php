<?php
    namespace Functions;

    class Error404 {
        public function __construct(string $page) {
            error_log("Error404 page parameter: $page"); // Log for debugging
            // Allow slashes, periods, and alphanumeric characters
            if (!preg_match('/^[A-Za-z0-9_\/\.]+$/', $page)) {
                header('HTTP/1.0 404 Not Found', true, 404);
                $protocol = isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? 'https:' : 'http:';
                $domain = $_SERVER['HTTP_HOST'];
                die('<html><body><h1>Page not found (404)</h1><a href="'.$protocol.'//'.$domain.'">'.$domain.'</a></body></html>');
            }
            $chat = preg_replace('/[^A-Za-z0-9_\/\?!]/', '', $page);
            return new Chat($chat);
        }
    }

<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // السماح بالوصول من React
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

$dataFile = 'data.json';
$uploadDir = 'uploads/';

// جلب البطاقات
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $cards = json_decode(file_get_contents($dataFile), true) ?: [];
    echo json_encode(['status' => 'success', 'data' => array_reverse($cards)]);
} else {
    echo json_encode(['status' => 'error', 'message' => 'طلب غير مدعوم']);
}
?>
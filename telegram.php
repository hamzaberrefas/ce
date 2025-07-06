<?php
$botToken = "7586899960:AAFZ-NOG5aUtwZMjvyeJ8hFLb97MTZdSdpk";
$chatId = "1882012182";

$data = json_decode(file_get_contents("php://input"), true);

$message = "📋 *Nouvelle inscription au CDE:*\n\n";
$message .= "*Nom et prénom:* " . $data['fullname'] . "\n";
$message .= "*Date de naissance:* " . $data['dob'] . "\n";
$message .= "*Téléphone:* " . $data['phone'] . "\n";
$message .= "*Email:* " . $data['email'] . "\n";
$message .= "*Université:* " . $data['university'] . "\n";
$message .= "*Niveau universitaire:* " . $data['univeau'] . "\n";
$message .= "*Session de formation:* " . $data['session'] . "\n";
$message .= "*Disponibilité:* " . $data['availability'] . "\n";
$message .= "*Compétences:*\n" . $data['skills'] . "\n\n";
$message .= "*Motivation:*\n" . $data['motivation'];

$send = file_get_contents("https://api.telegram.org/bot$botToken/sendMessage?chat_id=$chatId&text=" . urlencode($message) . "&parse_mode=Markdown");

echo json_encode(['status' => 'success']);
?>

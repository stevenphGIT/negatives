<?php
session_start();
session_destroy();
header('Refresh: 0, url = /negatives/index.php');
exit();
?>

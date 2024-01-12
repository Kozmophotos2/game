<?php
    $ip = $_SERVER['REMOTE_ADDR'];
    $date = date("Y-m-d H:i:s");
    $logfile = 'iplog.txt';

    // Log the IP address and date/time
    $logEntry = "IP: $ip - Date/Time: $date\n";
    file_put_contents($logfile, $logEntry, FILE_APPEND);

    // Display the logged IP addresses
    $logContent = file_get_contents($logfile);
    echo "<h2>IP Addresses Logged:</h2><pre>$logContent</pre>";
?>

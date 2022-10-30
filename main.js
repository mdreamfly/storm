let body = JSON.parse($response.body);
let result = JSON.parse(body['result']);
result='';
$done({body:JSON.stringify(body)})
$notification.post("Storm Sniffer","Network Debug Tool","全新V2.0 即将上线!!!")

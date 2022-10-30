let body = JSON.parse($response.body);
let result = JSON.parse(body['result']);
let healthRecord = JSON.parse(result['healthRecord']);
healthRecord['colorCss']='#FF9F00'
let result_new = JSON.stringify(result) 
$done({body:JSON.stringify(body)})
$notification.post("Storm Sniffer","Network Debug Tool",result_new)

let body = JSON.parse($response.body);
let result = JSON.parse(body['result']);
result='';
$done({body:JSON.stringify(body)})

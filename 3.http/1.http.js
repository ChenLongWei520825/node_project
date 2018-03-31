var http = require('http');

/**
 *
 * @param request 请求
 * @param response 响应
 */
function server(request, response){
    console.log(request.method);
    console.log(request.url);
    console.log(request.header);

    response.statusCode = 200;
    response.setHeader('content-type', 'text/html;charset=UTF-8');
    response.setHeader('name', 'zfpx');
    response.write(new Date().toString());
    response.end();
}
//
var server = http.createServer(server);

server.listen(8080,'localhost');
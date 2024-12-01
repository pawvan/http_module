/*!
 * This code is belongs to Pawvan
 * 
 * 
 * Rules:
 * 1. You can use, modify, and distribute this code freely for non-commercial purposes.
 * 2. Attribution must be provided in any derived works.
 * 3. You may not use this code in any project that violates any laws.
 * 4. No warranty is provided. Use this code at your own risk.
 * 5. If you make any changes, you must document them.
 * 6. Commercial use requires explicit permission from the author.
 * 7. Redistribution of the code must include authors notice.
 * 8. You cannot sublicense or sell this code.
 * 9. You may not use this code in any harmful or malicious way.
 *10. For more details, please contact: [pawanpediredla@gmail.com]
 */
const net = require('next');
const HTTPRequest  =  require ('./HTTPRequest');
const HTTPResponse  = require('./HTTPResponse');
const Router  = require('../routing/Router');
class HTTPServer{
constructor(){
    this.middlewares =[];
    this.router = new Router()
}
use(middleware){
    this.middlewares.push(middleware);
}
on(method,path,handler){
    this.router.addRoute(method,path,handler)
}
listen(port=3000){
    const server = net.createSever(socket=>{
        socket.on('data',(data)=>{
            const request = new HTTPRequest();
            const response = new HTTPResponse();
             this.middlewares.forEach(middleware=>middleware(request,response))          
             this.router.handleRequest(request,response);
            this.middlewares.forEacj
            })
    })
    server.listen(port,()=>{
        console.log(`server running on port ${port}`)
    })
}
}
module.exports = HTTPServer;
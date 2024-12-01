class HTTPResponse{
    constructor(socket){
        this.socket=socket;
        this.statusCode =200;
        this.headers={
            'Content-type':'text/plain'
        };
    }
    writeHead(statusCode){
        this.statusCode=statusCode
    }
 setHeader(name,value){
    this.headers[name]=value;
 }   
 end(body=''){
    this.socket.write(`HTTP 1.1 ${this.statusCode}\r\n`); 
}
}
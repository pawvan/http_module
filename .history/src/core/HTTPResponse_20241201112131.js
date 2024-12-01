class HTTPResponse{
    constructor(socket){
        this.socket=socket;
        this.statusCode =200;
        this.headers={
            'Content-type':'text/plain'
        };
    }
}
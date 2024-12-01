class HTTPRequest{
    constructor(rawData){
        this.rawData = rawData.toString();
        this.method = null;
        this.url=null;
        this.header={};
        this.body='';
        this.parseRequest();

    }
    parseRequest(){
        const [requestLine,...headers] = this.rawData.split('\r\n');
        const [method ,url] = requestLine.split('');
    this.method = method;
this.url=url;    
this.header.forEach(())
}
}
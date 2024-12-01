class HTTPRequest{
    constructor(rawData){
        this.rawData = rawData.toString();
        this.method = null;
        this.url=null;
        this.header={};
        this.body='';
        this.parseRequest();

    }
    parse
}
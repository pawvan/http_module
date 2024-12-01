my-http-server/
├── src/
│   ├── core/                      
│   │   ├── HTTPServer.js           
│   │   ├── HTTPRequest.js          
│   │   ├── HTTPResponse.js         
│   │   ├── SocketHandler.js        
│   │   └── Connection.js           
│   ├── middleware/                 
│   │   ├── LoggerMiddleware.js     
│   │   ├── BodyParserMiddleware.js 
│   │   └── AuthMiddleware.js       
│   ├── routing/                    
│   │   ├── Router.js               
│   │   └── Route.js                
│   ├── static/                     
│   │   ├── StaticFileHandler.js    
│   │   └── StaticCache.js          
│   ├── config/                     
│   │   └── config.js               
│   ├── utils/                      
│   │   ├── Logger.js               
│   │   └── Utils.js                
│   ├── server.js                   
├── public/                         
│   ├── index.html
│   └── about.html
├── test/                           
│   ├── core/
│   │   ├── HTTPServer.test.js
│   │   ├── HTTPRequest.test.js
│   │   └── HTTPResponse.test.js
│   ├── middleware/
│   │   ├── LoggerMiddleware.test.js
│   │   └── BodyParserMiddleware.test.js
│   ├── routing/
│   │   └── Router.test.js
│   ├── static/
│   │   └── StaticFileHandler.test.js
│   └── utils/
│       └── Logger.test.js
├── config/
│   └── serverConfig.js             
├── .gitignore
├── package.json
├── README.md
├── LICENSE
├── .env
└── node_modules/

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
this.header.forEach((header)=>{
    const [key,value] =header.split(':');
    if(key) this.header[key] =value;

})
}
}
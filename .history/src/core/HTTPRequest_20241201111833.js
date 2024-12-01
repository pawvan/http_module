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
this.body = this.rawData.split()
}
}
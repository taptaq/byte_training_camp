const http=require('http');
const fs=require('fs');

http.createServer((req,res)=>{
    let {url}=req;
    console.log(url);
    if(url==='/'){
        fs.readFile('./index.html',(err,data)=>{
            if(err){
                res.writeHead(500,{
                    'content-type':'text/plain;charset=utf-8'
                })
                throw err;
            }
           res.end(data);
        })
    }
    else if(url==='/world'){
        fs.readFile('./world.html',(err,data)=>{
            if(err){
                res.writeHead(500,{
                    'Content-Type':'text/plain;charset=utf-8'
                })
                throw err;
            }
           res.end(data);
        })
    }
    else{
        res.statusCode=404;
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end('404 Not Found')
    }
}).listen(8085,()=>{
    console.log('服务器8085已开启')
})
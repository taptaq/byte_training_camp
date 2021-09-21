export function createConfig(res){

    const haveMiddleWare=(name)=>{
        return res.middleware.indexOf(name)!==-1
    }

    return {
        router:haveMiddleWare('koaRouter'),
        static:haveMiddleWare('koaStatic'),
        packageName:res.packageName,
        port:res.port
    }
}
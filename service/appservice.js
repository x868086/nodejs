//service层模块封装，将读取文件并返回给前端的过程封装成方法复用
//定义App类有init方法，其两个参数为fs模块、文件路径
class App {
    constructor(){

    }

    init(fs,filename){
        return (req,res)=>{
            let indexPage=fs.readFile(filename,(err,data)=>{
                res.writeHead('206',{"Content-type":"text/html"})
                res.end(data) //读取index.html文件并将结果返回给前端
            })
          
        }
    }
}



module.exports={
    App:App
}
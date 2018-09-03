let http=require("http");
let fs=require("fs")

//1.加载封装的service模块
let app=require("./service/appservice").App;
//2.new加载模块的实例
let appIncetance=new app();
//3.调用实例的init方法，传入fs模块参数、文件路径参数
console.log(appIncetance.init)

//未封装service层以前的方法
// let server=http.createServer((req,res)=>{
//     let indexPage=fs.readFile('./views/index.html',(err,data)=>{
//         res.writeHead('206',{"Content-type":"text/html"})
//         res.end(data) //读取index.html文件并将结果返回给前端
//     })
  
// })

let server=http.createServer(appIncetance.init(fs,'./views/index.html'))

server.listen(3000,"127.0.0.1",()=>{
    console.log("server is online 127.0.0.1:3000")
})



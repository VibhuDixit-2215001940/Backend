//----------------------------DAY 1 ---------------------------------
// const http = require('http');

// var app = http.createServer(function(req, res, next) {
//     res.end("Bhen ki lodi raand randvi!!")
// });
// app.listen(3000);

// const http = require('http');

// var app = http.createServer(function(req, res, next) {
//     if(req.url == '/'){
//         res.end("Kahish Nagdevv")
//     }
//     else if(req.url == '/sec'){
//         res.end("Anushka Tiwari")
//     }
//     else if(req.url == '/thre'){
//         res.end("Avni Gupta")
//     }
//     else{
//         res.end("404 Page Not Found")
//     }
// });

// app.listen(3000);

//------------------------------DAY 2 (app.get())--------------------------------
// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })
// app.get('/raand',function (req, res) {
//     res.send('Bhen ki lodi rand randvi')
// })
// app.get('*',function(req,res){
//     res.send('404 Page Not Found')
// })
// app.listen(8000)

//------------------------------DAY 3(app.use())--------------------------------
// const express = require('express')
// const app = express()
// //MALWARE KA YE KAAM HOTA HAI KI JAB BROWSER KOI ROUTE REQUEST KARTA HAI THEN BEFORE REACHING T ROUT
// // IF WE HAVE TO PERFORM ANY OPERATION THEN WE CAN DO IT OKKKKK
// app.use(function(req,res,next){      //SABSE PAHALE ISKE PAAS AATI HAI REQUEST YE KUCH RETUEN NA KARTA 
//     console.log('Time:', Date.now()) //YE EK MALWARE SE USE KIA HUA KAAM HAI 
//     next();     //AGAR YE NA HO TOH PAGE RELOAD HI HOTA RAHEGA KYUNKI KUCH RETURN HI NA KARTA 
// })
// app.get('/',function(req,res){
//     res.send('Hello main page!!')
// })

// app.get('/about',function(req,res){
//     res.send('About page!!')
// })
// app.get('*',function(req,res){
//     res.send('404 Page Not Found')
// })
// app.listen(8000)

//-------------------------------DAY 4(express sessions)-------------------------------
// const express = require('express')
// const app = express()
// const expressSession = require('express-session')
// //Cookie ka kaam hota hai browser mai data ko store karna and session ka kaam hai ki uss session ke period takk bss server mai data ko rakhna ookk

// // app.use(function(req,res,next){
// //     console.log('Hello')
// //     next()
// // })

// app.use(expressSession({
//     secret: 'keyboard cat',
//     resave: false,//mtlb agar aapke session mai kuch bhi change nahi hua phir bhi aap usse save karne chahate ho??
//     saveUninitialized: true,//kya hame esse user jisne kuch create na kia hua ya authent. na kia ho toh esse user ka session bhi save karana hei??
// }))
// app.get('/',function(req,res){
//     res.send('Hello main page!!')
// })
// app.get('/create',function(req,res){
//     req.session.okk = true, //This is how the session is created with named okk and its value as true
//     res.send('Session created!!')
// })
// app.get('/check',function(req,res,next){
//     console.log(req.session.okk)//gives true but when we restart the session it gives undefined
// })
// app.listen(8000)

//-------------------------------DAY 5(flash) -------------------------------
// const express = require('express')
// const app = express()
// const expressSession = require('express-session')
// const flash = require('connect-flash')

// app.use(expressSession({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: true,
// }))
// app.use(flash())

// app.get('/', function(req, res) {
//     req.flash("name", "Vibhu"); // Removed extra space
//     res.redirect('/name')
// })

// app.get('/name', function(req, res) {
//     let msg = req.flash('name')
//     res.send(`Your name is ${msg}`)
// })
// app.listen(8000, () => {
//     console.log('Server is running on port 8000')
// })

// //-------------------------------DAY 6(CORS) -------------------------------
// //CROSS ORIGIN RESOURCES SHARING
// //Browser mai ek secuirty feature hota hai jiske tahat aap ksii or web domain ka data nahi manga sakte yaa show nahi kar sakte and browser isse aapko rokta hai and agar aap chahate hai ki brwser aalow kare data ko laane ke liye toh phir aapko uss website ke server ke throush CORS enable karna hoga!!
// //For ex. abc.com xyz.com ye dono domain aapas mai data jab tak share na kar sakte jab tak ki inki side se CORS enable na ho jata !!

// const express = require('express')
// const app = express()
// const flash = require('connect-flash')
// const cors = require('cors')
// app.use(cors())
// app.get('/', function(req, res) {
//     res.send('Kya re bhadwe kya dekh rha hai!!')
// })
// app.listen(8000, () => {
//     console.log('Server is running on port 8000')
// })

//-------------------------------DAY 7(Cookie) -------------------------------
//Agar aap chahate ho ki user aapke kissi route par jaaye toh aap kuch data uske broweser par save karana cahate ho toh toh isse kahate hai cookie
const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
app.use(cookieParser())
app.get('/', function(req, res) {
    res.send('Kya re bhadwe kya dekh rha hai!!')
})
app.get('/ok',function(req,res){
    res.cookie('ok',true)//cookie msg ko set karne ke liye koi package na chahiye but read karne ke liye cookie parser package chahiye hoga ok
    console.log(req.cookies.ok) 
    res.send('Cookie created!!')
})
app.listen(8000,()=>{
    console.log('Server is running on port 8000')
})

//-------------------------------DAY 8() -------------------------------

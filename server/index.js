const express=require('express')
const app=express()
const session=require('express-session')
app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000')
    res.setHeader('Access-Control-Allow-Credentials','true')
    next()
})

app.use(express.json())
app.use(session({
    secret:"cat",
    resave:false,
    saveUninitialized:false,
    key:"count",
}))
app.get('/',(req,res)=>{
    if(req.session.count==null)
        req.session.count=1
    else
        req.session.count++
    return res.send(`${req.session.count}`)
})
app.listen(1000)
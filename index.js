const jsonServer=require('json-server')
const notesappServer=jsonServer.create()
const router=jsonServer.router("db.json")
const middleWear=jsonServer.defaults()
const port=4000 || process.env.port
notesappServer.use(middleWear)
notesappServer.use(router)
notesappServer.listen(port,()=>{
    console.log(`media player server started at port ${port}, and waiting for client request !!!`);

})
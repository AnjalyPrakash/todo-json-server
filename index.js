const jsonServer=require('json-server')

const todoServer=jsonServer.create()

const router=jsonServer.router('todo.json')

const middleware=jsonServer.defaults()


todoServer.use(middleware)


todoServer.use(router)

const port=9000 || process.env.PORT

todoServer.listen(port,()=>{
    console.log(`JSON server is running successfully at port ${port}`);
})

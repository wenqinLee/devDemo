var fn_index = async(ctx,next)=>{
    ctx.response.body = `<h1>home_page</h1>
    <form action="/signin" method="post">
    <p>Name: <input name="name" value="koa"></p>
    <p>Password: <input name="password" type="password"></p>
    <p><input type="submit" value="Submit"></p>
    </form>`
}

var fn_signin = async(ctx,next)=>{
    var name = ctx.request.body.name || ''
    var password = ctx.request.body.password || ''
    console.log(`sign in with name:${name},password:${password}`)
    if(name ==='koa' && password ==='0000'){
        ctx.response.body=`<h1>Hello,${name}</h1>`
    }else{
        ctx.response.body = `<h1>Login failed !</h1>
            <p><a href="/">please try agian</a></p>`
    }
}

module.exports ={
    'GET /': fn_index,
    'POST /':fn_signin
}
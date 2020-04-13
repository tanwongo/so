let ipport =  function(){
    return async function (ctx, next) {
      let ipstring = ctx.request.headers['x-forwarded-for'] || ''
      if (ipstring == '') {
        ctx.state.ip = ''
        ctx.state.ips = []
      }
      else{
        let iparray = ipstring.replace(/\s/g, '').split(',')
        ctx.state.ip = iparray[0]
        ctx.state.ips = iparray
      }
  
      ctx.state.port = ctx.headers['clientip'] || ''
  
      await next()
    }
  }

  export default ipport
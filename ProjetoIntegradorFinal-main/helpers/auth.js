module.exports.checkAuth = function(request, response, next) {
    const userId = request.session.userId
  
    if(!userId){
      response.render('auth/login')
    }
  
    next();
  }
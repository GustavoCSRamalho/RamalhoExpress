module.exports = function(req, res, next){
  if(req.session._id) {
    return next();
  }else{
    res.status(401).json('Não Autorizado!');
    res.redirect("/#/contatos");
  }
};

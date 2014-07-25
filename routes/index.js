
/*
 * GET home page.
 */

exports.enter = function(req, res){
  res.render( 'enter' );
}

exports.home = function(req, res){
  res.render( 'home' );
};

exports.sxlw= function(req, res){
  res.render( 'sxlw' );
};

exports.cn_headlines = function(req, res){
  res.render( 'cn_headlines' );
};

exports.cn_propaganda = function(req, res){
  res.render( 'cn_propaganda' );
};

exports.guo_in_usa= function(req, res){
  res.render( 'guo_in_usa' );
};

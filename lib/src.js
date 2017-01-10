var mimeOf = require("./mime");

module.exports = {
  attr: attr,
  pick: pick
};

function attr(el){
  var value;

  return function(urls){
    var picked
    
    if (arguments.length) {
      value = urls;
      picked = pick(el, value)
      el.setAttribute('src', picked.url || picked);
    }

    return value;
  };
}

function pick(el, urls){
  if(!urls) return;

  if(typeof urls == 'string'){
    return urls;
  }

  return urls.filter(function(url){
    return !!el.canPlayType(mimeOf(url));
  })[0];
}

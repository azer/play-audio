var newChain = require('new-chain'),
    domify   = require('domify'),
    format   = require('new-format'),
    template = require("./template");

module.exports = play;

function play(uri, dom){
  var el, chain;
  dom || ( dom = document.body );

  el = domify(format(template, { uri: uri }));
  dom.appendChild(el);

  chain = newChain({
    autoplay: bool('autoplay'),
    controls: bool('controls'),
    load: method('load'),
    loop: bool('loop'),
    muted: bool('muted'),
    on: on,
    pause: method('pause'),
    play: method('play'),
    preload: bool('preload')
  });

  chain.currentTime = attr('currentTime');
  chain.element = element;
  chain.src = attr('src');
  chain.volume = attr('volume');
  chain.remove = remove;

  return chain;

  function attr(name){
    return function(value){
      if ( arguments.length ) {
        el[name] = value;
        return chain;
      }

      return el[name];
    };
  }

  function bool(name){
    return function(value){
      if (value === false) {
        return el[name] = false;
      }

      return el[name] = true;
    };
  }

  function method(name){
    return function(){
      return el[name].apply(el, arguments);
    };
  }

  function element(){
    return el;
  }

  function on(event, callback){
    el.addEventListener(event, callback, false);
  }

  function remove(){
    return el.parentNode.removeChild(el);
  }

  function src(uri){
    el.setAttribute('src', uri);
  }

}

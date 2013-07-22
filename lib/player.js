var newChain  = require('new-chain'),
    render = require('./render');

module.exports = play;

function play(urls, dom){
  var el, chain, src;

  srcMethod(urls);
  dom || ( dom = document.documentElement );

  el = render.audio(src);
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
  chain.src = srcMethod;
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

  function element(){
    return el;
  }

  function on(event, callback){
    el.addEventListener(event, callback, false);
  }

  function method(name){
    return function(){
      return el[name].apply(el, arguments);
    };
  }

  function remove(){
    return el.parentNode.removeChild(el);
  }

  function srcMethod(urls){
    if (arguments.length) {
      src = typeof urls == 'string' ? [urls] : urls;
    }

    return src;
  }

}

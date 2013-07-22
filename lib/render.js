var domify = require('domify'),
    format = require('new-format'),
    templates = require("./templates");

module.exports = {
  audio: audio,
  source: source
};

function audio(urls){
  return domify(format(templates['audio.html'], {
    sources: urls.map(source)
  }));
}

function source(url){
  return format(templates['source.html'], {
    url: url
  });
}

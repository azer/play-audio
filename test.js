var play = require("./");

it('plays pop', function(done){
  play('http://i.cloudup.com/vTka9yOizT.m4a').autoplay().on('ended', done);
});

it('plays a song and pauses', function(done){
  var p = play('http://tayfabandista.org/player/maya.mp3')
        .autoplay().volume(0.3).on('pause', done);

  setTimeout(p.pause, 1000);
});

it('shows controls and observes time', function(done){
  var p = play('http://tayfabandista.org/player/maya.mp3');

  p.play()
    .controls()
    .volume(0.3)
    .on('pause', done)
    .on('timeupdate', function(event){
      if ( p.currentTime() >= 1.5) {
        p.pause();
      }
    });
});

it('gets and sets src attr', function(done){

  var p = play('http://i.cloudup.com/vTka9yOizT.m4a').autoplay();

  p.on('play', function(){
    expect(p.src()).to.equal('http://i.cloudup.com/0CAiJMT4LK.mp3');
    p.remove();
    done();
  });

  setTimeout(function(){
    expect(p.src()).to.equal('http://i.cloudup.com/vTka9yOizT.m4a');
    p.src('http://i.cloudup.com/0CAiJMT4LK.mp3');
  }, 0);

});

it('removes the element', function(){
  var p = play('http://i.cloudup.com/vTka9yOizT.m4a');

  p.element().setAttribute('id', 'to-remove');

  expect(document.querySelector('#to-remove')).to.exist;
  p.remove();
  expect(document.querySelector('#to-remove')).to.not.exist;

});

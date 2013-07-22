var play = require("./");

  var set1 = ['http://i.cloudup.com/vTka9yOizT.m4a', 'http://i.cloudup.com/4TnDj0v9GE.ogg'],
      set2 = ['http://i.cloudup.com/pwSS7RG3Sp.ogg', 'http://tayfabandista.org/player/maya.mp3'];

it('plays pop', function(done){
  play('http://i.cloudup.com/4TnDj0v9GE.ogg').autoplay().on('ended', done);
});

it('initializes multiple sources', function(done){
  play(set1).autoplay().on('ended', done);
});

it('plays a song and pauses', function(done){
  var p = play('http://i.cloudup.com/pwSS7RG3Sp.ogg')
        .autoplay().volume(0.3).on('pause', done);

  setTimeout(p.pause, 1000);
});

it('shows controls and observes time', function(done){
  var p = play(set2);

  p.play()
    .controls()
    .volume(0.3)
    .on('pause', function(){
      p.remove();
      done();
    })
    .on('timeupdate', function(event){
      if ( p.currentTime() >= 1) {
        p.pause();
      }
    });
});

it('gets and sets src attr', function(done){

  var p = play(set1).controls().autoplay();

  p.on('play', function(){
    expect(p.src()).to.equal(set2);
    p.remove();
    done();
  });

  setTimeout(function(){
    expect(p.src()).to.equal(set1);
    p.src(set2);
  }, 0);

});

it('removes the element', function(){
  var p = play();

  p.element().setAttribute('id', 'to-remove');

  expect(document.querySelector('#to-remove')).to.exist;
  p.remove();
  expect(document.querySelector('#to-remove')).to.not.exist;

});

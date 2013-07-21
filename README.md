## play-audio

HTML5 Audio Player

```js
play = require('play-audio')

play('song.mp3').autoplay().volume(0.3).controls().loop().on('ended', function(){
  console.log('End of the song reached')
})
```

## Install

```bash
$ npm install play-audio
```

## API

* play(uri, parentElement)
* .controls
* .currentTime
* .element
* .loop
* .muted
* .on(event, function)
* .pause
* .play
* .preload
* .src(url)
* .volume(number)

## Events

* abort
* durationchange
* ended
* error
* pause
* play
* progress
* timeupdate

[See complete reference](http://www.w3.org/html/wg/drafts/html/master/embedded-content-0.html#mediaevents)

![](https://dsz91cxz97a03.cloudfront.net/zebVeRnfaa-1200x1200.jpeg)

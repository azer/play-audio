## play-audio

Lightweight Wrapper For HTML5 Audio API

```js
play = require('play-audio')

play('song.mp3').autoplay()
```

* Example 1: [Playing An Alert Sound](http://requirebin.com/?gist=6050020)
* Example 2: [Music player](http://requirebin.com/?gist=6049983)

## Install

```bash
$ npm install play-audio
```

## Browser Compatibility

```js
play(['song.mp3', 'song.ogg']).autoplay()
```

## Displaying Controls

```js
parent = document.querySelector('.my-player')
play(['song.mp3', 'song.ogg'], parent).autoplay.controls()
```

## API

Example:

```js
play('foo.mp3').volume(0.3).controls().loop().on('ended', function(){
  console.log('End of the song reached')
})
```

Reference:

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

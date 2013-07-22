fox = bin 'fox'
jsify = bin "jsify"
bundle = bin 'one/onejs'

all 'lib/templates.js', 'dist', 'test'

target 'lib/templates.js', 'templates', ->
  jsify 'templates/* -o lib/templates.js'

target 'dist', 'lib/templates.js', 'templates', 'lib', '*.js', ->
  bundle 'global.js -o dist/play-audio.js'

task 'test', 'lib', '*.js', ->
  fox '-b -t 15000'

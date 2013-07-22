fox = bin 'fox'
jsify = bin "jsify"

all 'lib/templates.js', 'test'

target 'lib/templates.js', 'templates', ->
  jsify 'templates/* -o lib/templates.js'

task 'test', 'lib', '*.js', ->
  fox '-b'

fox = bin 'fox'
jsify = bin "jsify"

all 'template.js', 'test'

target 'template.js', 'template.html', ->
  jsify 'template.html -o template.js'

task 'test', '*.js', ->
  fox '-b'

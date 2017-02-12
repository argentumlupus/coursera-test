var speak = function(name) {
  console.log(this.speakWord + ' ' + name);
}

var helloSpeaker = {
  speakWord: 'Hello',
  speak: speak
}

var byeSpeaker = {
  speakWord: 'Goodbye',
  speak: speak
}



var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names.length; i++) {
  if (names[i].length)
    if ((names[i][0] == "J") || (names[i][0] == "j"))
      byeSpeaker.speak(names[i]);
    else 
      helloSpeaker.speak(names[i]);
}

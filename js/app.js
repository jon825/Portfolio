var p = $('p');
var text = p.text().split(' ');
for (var i = 0, len = text.length; i < len; i = i + 1) {
    text[i] = '<div class="hvr-float">' + text[i] + '</div>';
}
p.html(text.join(' '));

var h1 = $('h1');
var text = h1.text().split(' ');
for (var i = 0, len = text.length; i < len; i = i + 1) {
    text[i] = '<div class="hvr-bounce-in">' + text[i] + '</div>';
}
h1.html(text.join(' '));
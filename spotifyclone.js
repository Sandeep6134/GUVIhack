function func()
{
var pid=document.getElementById('inp').value;
var a = document.createElement('iframe')
a.setAttribute("src",`https://open.spotify.com/embed/playlist/${pid}?utm_source=generator&theme=0`)
a.setAttribute("width","100%")
a.setAttribute("height","380")
a.setAttribute("frameBorder","0")
a.setAttribute("allowfullscreen","")
a.setAttribute("allow","autoplay")
// a.setAttribute("clipboard-write")
// a.setAttribute("encrypted-media")
// a.setAttribute("fullscreen")
// a.setAttribute("picture-in-picture")
document.body.append(a);
}
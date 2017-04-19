// First jQuery plugin requirement - scrollUp jQuery plugin
$(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: 'Scroll to top', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});

//JavaScript for Remy Mouse effect//
var standardbody = (document.compatMode === 'CSS1Compat') ? document.documentElement : document.body;

var nav = (!document.all || window.opera);
var tmr = null;
var spd = 50;
var x = 0;
var x_offset = 5;
var y = 0;
var y_offset = 15;

document.onmousemove = get_mouse;

function get_mouse(e) {
    x = (nav) ? e.pageX : event.clientX + standardbody.scrollLeft;
    y = (nav) ? e.pageY : event.clientY + standardbody.scrollTop;
    x += x_offset;
    y += y_offset;
    beam(1);
}

function beam(n) {
    if (n < 5)

  {
        document.getElementById('div' + n).style.top = y + 'px';
        document.getElementById('div' + n).style.left = x + 'px';
        document.getElementById('div' + n).style.visibility = 'visible';
        n++;
        tmr = setTimeout('beam(' + n + ')', spd);
    }
    else {
        clearTimeout(tmr);
        fade(4);
    }
}

function fade(n) {
    if (n > 0)
  {
        document.getElementById('div' + n).style.visibility = 'hidden';
        n--;
        tmr = setTimeout('fade(' + n + ')', spd);
    }
    else {
        clearTimeout(tmr);
    }
}

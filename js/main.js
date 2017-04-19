//JavaScript for Remy Mouse//
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

//Custom JavaScript that uses document.getElementById to create a new h4 that says "Bon Appetit" on the menu page under "Our Menu" once the H1 tag of "Our Menu" is clicked. The id for Menu H1 is 'menuh1'. The event listener is click, which is then added to 'menuh1'. I made "Our Menu" a link that leads no where so that people are curious to click it; once they do they'll be presented with a "Bon Appetit!"

var menuh1 = document.getElementById('menuh1');

function addh4() {
    var newtext = document.createElement('h4');
    newtext.innerHTML = 'Bon Appetit!';
    document.getElementById('menuh1').appendChild(newtext);
    menuh1.removeEventListener('click', addh4); // to avoid repetition
}

menuh1.addEventListener('click', addh4);

//Custom jQuery code to add hover effect to social media icons.
$('li').hover(
    function () {
        $(this).append($('<span> </span>'));
    }, function () {
    $(this).find('span:last').remove();
}
);

$('li.fade').hover(function () {
    $(this).fadeOut(100);
    $(this).fadeIn(500);
});

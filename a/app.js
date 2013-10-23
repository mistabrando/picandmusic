$("#about").click(function (a) {
	a.preventDefault();
	$("#content").html("<br><p>Picture + Music is a website built around <br> creating and sharing atmospheric pairings of <br> high resolution pictures and great music<br><br><a href = 'mailto:cheng.n.cheng@gmail.com'>Contact Us</a></p>")
});
$("#share").click(function (a) {
	a.preventDefault();
	if(isset(picurl) && isset(yturl))
	{										
		var b = document.URL.replace("&hidden=1", "");
		$("#content").html("<br><p>URL to share : </p><input type = 'text' value = '" + b + "&hidden=1'></input>")
	}
	else
	{
		$.get('a/explore.html', function(data){
			$('#content').html(data);
		}); // get here
	}
});
$("#create").click(function (a) {
	a.preventDefault();
	$("#content").html("<br><form action = '/' method = 'GET'><p>URL to Picture : <br><input name = 'picurl' type = 'text' placeholder = '.jpg / .png / .jpeg ...'></input><br><br>URL to Music : <br><input name = 'yturl' type = 'text' placeholder = 'A valid Youtube URL'></input><p style = 'font-size:10px;'>Some copy righted material may not play</p><p><br>Name of Song : <br><input name = 'songname' placeholder = 'Optional' type = 'text'></input><br><input type = 'submit' value = 'Create'></input></p></form>")
});
$(document).on("click", "#hide", function (a) {
	a.preventDefault();
	$("#main").hide("slow");
	$("#showelement").html("<a href = '#' id = 'show'>Show</a>")
});
$(document).on("click", "#show", function (a) {
	a.preventDefault();
	$("#main").show("slow");
	$("#showelement").html("")
});

function getQueryVariable(b) {
	var d = window.location.search.substring(1);
	var e = d.split("&");
	for (var c = 0; c < e.length; c++) {
		var a = e[c].split("=");
		if (a[0] == b) {
			return a[1]
		}
	}
	return (false)
}

function isset(a) {
	if (typeof (a) != "undefined" && a !== null && a != "") {
		return true
	}
	return false
}
var picurl = getQueryVariable("picurl");
var yturl = getQueryVariable("yturl");
var songname = getQueryVariable("songname");
if (isset(picurl) && isset(yturl)) {
	var picurl = decodeURIComponent(picurl);
	$("html").css("backgroundImage", "url(" + picurl + ")");
	$("#about").replaceWith("<a id = 'hide' href = '#'>Hide</a><br>");
	$("#create").replaceWith("<a href = '/'>Home</a>");
	var yturl = decodeURIComponent(yturl);
	var video_id = yturl.split("v=")[1];
	var ampersandPosition = video_id.indexOf("&");
	if (ampersandPosition != -1) {
		video_id = video_id.substring(0, ampersandPosition)
	}
	$("#yt").html("<iframe src = 'http://youtube.com/embed/" + video_id + "?autoplay=1&loop=1&playlist=" + video_id + "'></iframe>");
	var hidden = getQueryVariable("hidden");
	if (isset(hidden)) {
		$("#main").hide();
		$("#showelement").html("<a href = '#' id = 'show'>Show</a>")
	}
	$('#share').html('Share');
} else {
	$("#yt").html("<iframe src = 'http://youtube.com/embed/US7hF-X9ncM?autoplay=1&loop=1&playlist=US7hF-X9ncM'></iframe>");
	var picurl = "http://i.imgur.com/7XJUMRi.jpg";
	$("html").css("backgroundImage", "url(" + picurl + ")");
	$('#share').html('Examples');
} 
if (isset(songname) && isset(picurl) && isset(yturl)) {
	songname = decodeURIComponent(songname);
	songname = songname.replace(/\+/g, " ");
	$("h1").html(songname);
	$("title").html(songname)
}
$("#sm").append("<a style = 'padding-left:42px;' target = '_blank' href='//pinterest.com/pin/create/button/?url=" + encodeURIComponent(location.href) + "&media=" + encodeURIComponent(picurl) + "' data-pin-do='buttonBookmark' ><img src='//assets.pinterest.com/images/pidgets/pin_it_button.png' /></a>&nbsp;<a href=https://twitter.com/share class=twitter-share-button>Tweet</a>");

! function (c, f, e) {
	var b, g = c.getElementsByTagName(f)[0],
		a = /^http:/.test(c.location) ? "http" : "https";
	if (!c.getElementById(e)) {
		b = c.createElement(f);
		b.id = e;
		b.src = a + "://platform.twitter.com/widgets.js";
		g.parentNode.insertBefore(b, g)
	}
}(document, "script", "twitter-wjs");
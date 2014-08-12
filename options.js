var defaultBackground = "#000000";
var defaultText = "#FFFFFF";
var defaultLink = "#6666FF";
var defaultVisited = "#FF66FF";

function load()
{
	// read rules from stored file
	var rules;
	chrome.storage.sync.get({background : defaultBackground, text : defaultText, link : defaultLink, visited : defaultVisited},
		function (args)
		{
			document.getElementById("background").value = args.background;
			document.getElementById("text").value = args.text;
			document.getElementById("link").value = args.link;
			document.getElementById("visited").value = args.visited;
		});
}
 
function save()
{
	chrome.storage.sync.set({background : document.getElementById("background").value});
	chrome.storage.sync.set({text : document.getElementById("text").value});
	chrome.storage.sync.set({link : document.getElementById("link").value});
	chrome.storage.sync.set({visited : document.getElementById("visited").value});
}
 
function loadDefaults()
{
	document.getElementById("background").value = defaultBackground;
	document.getElementById("text").value = defaultText;
	document.getElementById("link").value = defaultLink;
	document.getElementById("visited").value = defaultVisited;
}

document.addEventListener("DOMContentLoaded", load);
document.getElementById("save").addEventListener("click", save);
document.getElementById("loadDefaults").addEventListener("click", loadDefaults);

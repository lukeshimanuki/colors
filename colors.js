// defaults
var defaultBackground = "#000000";
var defaultText = "#FFFFFF";
var defaultLink = "#6666FF";
var defaultVisited = "#FF66FF";

// settings
var backgroundColor;
var textColor;
var linkColor;
var visitedColor;

chrome.storage.sync.get({background : defaultBackground, text : defaultText, link : defaultLink, visited : defaultVisited},
	function (args)
	{
		// get settings
		backgroundColor = args.background;
		textColor = args.text;
		linkColor = args.link;
		visitedColor = args.visited;

		// apply colors
		var newSS;
		var styles = "* { background:" + backgroundColor + "!important; color:" + textColor + "!important } :link, :link * { color:" + linkColor + "!important } :visited, :visited * { color:" + visitedColor + "!important }";

		// if there is no style sheet, make one
		if (document.createStyleSheet)
		{
			document.createStyleSheet("javascript:'" + styles + "'");
		}
		// otherwise, modify it
		else
		{
			newSS = document.createElement("link");
			newSS.rel = "stylesheet";
			newSS.href = "data:text/css," + escape(styles);
			document.getElementsByTagName("head")[0].appendChild(newSS);
		};
	});

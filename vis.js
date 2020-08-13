var height = 600;
var width = 600;
var margin = {top: 50, right: 20, bottom: 50, left: 170}

d3.csv("Projects dataset.csv").then(function(data) {
	console.log(data);
}
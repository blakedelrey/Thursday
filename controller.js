var movielist = JSON.parse(moviesArray) 
var table = document.getElementById("movietable");
console.log(movielist.movies.length);
for(var i = 0; i < movielist.movies.length; i++) {
	var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
	var cell5 = row.insertCell(4);
	cell1.innerHTML = i+1;
	cell2.innerHTML = movielist.movies[i].title; 
	cell3.innerHTML = movielist.movies[i].openingDay;
	cell4.innerHTML = movielist.movies[i].thGross;
	cell5.innerHTML = movielist.movies[i].openingGross;	
} 
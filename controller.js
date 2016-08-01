var movielist = JSON.parse(moviesArray) 
var table = document.getElementById("movietable");
console.log(movielist.movies.length);
for(var i = 0; i < movielist.movies.length; i++) {
	var row = table.insertRow(i);
	var cell1 = row.insertCell(0);
	var cell2= row.insertCell(1);
	cell1.innerHTML = i+1;
	cell2.innerHTML = movielist.movies[i].movieName + " " + movielist.movies[i].releaseYear;	
} 
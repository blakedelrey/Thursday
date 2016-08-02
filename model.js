var moviesArray = '{ "movies" : [' +
'{"title":"Star Trek 3 - Beyond","openingDay":"2016-07-22","thGross":5.5,"openingGross":59.3},'+
'{"title":"Ice Age 5 - Collision Course","openingDay":"2016-07-22","thGross":0.9,"openingGross":31.4},'+
'{"title":"Lights Out","openingDay":"2016-07-22","thGross":1.8,"openingGross":21.7},'+
'{"title":"Ghostbusters","openingDay":"2016-07-15","thGross":3.4,"openingGross":46.0},'+
'{"title":"Secret Life of Pets","openingDay":"2016-07-08","thGross":5.3,"openingGross":104.4},'+
'{"title":"Mike and Dave Need Wedding Dates","openingDay":"2016-07-08","thGross":1.6,"openingGross":16.6},'+
'{"title":"Purge 3","openingDay":"2016-07-01","thGross":3.64,"openingGross":36.1},'+
'{"title":"Tarzan","openingDay":"2016-07-01","thGross":2.7,"openingGross":46.6},'+
'{"title":"BFG","openingDay":"2016-07-01","thGross":0.78,"openingGross":22.7},'+
'{"title":"Independence Day 2","openingDay":"2016-06-24","thGross":4.0,"openingGross":41.0},'+
'{"title":"Shallows","openingDay":"2016-06-24","thGross":1.33,"openingGross":16.8},'+
'{"title":"Free State of Jones","openingDay":"2016-06-24","thGross":0.37,"openingGross":7.6},'+
'{"title":"Central Intelligence","openingDay":"2016-06-17","thGross":1.84,"openingGross":35.5},'+
'{"title":"Finding Nemo 2","openingDay":"2016-06-17","thGross":9.2,"openingGross":135.1},'+
'{"title":"Warcraft","openingDay":"2016-06-10","thGross":3.1,"openingGross":24.2},'+
'{"title":"Now You See Me 2","openingDay":"2016-06-10","thGross":1.75,"openingGross":22.4},'+
'{"title":"Conjuring 2","openingDay":"2016-06-10","thGross":3.4,"openingGross":40.4},'+
'{"title":"Popstar: Never Stop Never Stopping","openingDay":"2016-06-03","thGross":0.32,"openingGross":4.7},'+
'{"title":"Me Before You","openingDay":"2016-06-03","thGross":1.37,"openingGross":18.7},'+
'{"title":"Teenage Mutant Ninja Turtles 2","openingDay":"2016-06-03","thGross":2.0,"openingGross":35.3},'+
'{"title":"X-Men 6 - Apocalypse","openingDay":"2016-05-27","thGross":8.2,"openingGross":79.8},'+
'{"title":"Alice in Wonderland 2","openingDay":"2016-05-27","thGross":1.5,"openingGross":33.5},'+
'{"title":"Angry Birds","openingDay":"2016-05-20","thGross":0.8,"openingGross":38.2},'+
'{"title":"Neighbors 2","openingDay":"2016-05-20","thGross":1.67,"openingGross":21.8},'+
'{"title":"Nice Guys","openingDay":"2016-05-20","thGross":0.7,"openingGross":11.2},'+
'{"title":"Money Monster","openingDay":"2016-05-13","thGross":0.6,"openingGross":14.8},'+
'{"title":"Darkness","openingDay":"2016-05-13","thGross":0.21,"openingGross":5.0},'+
'{"title":"Captain America 3 - Civil War","openingDay":"2016-05-06","thGross":25.0,"openingGross":179.1},'+
'{"title":"Mothers Day","openingDay":"2016-04-29","thGross":0.23,"openingGross":3.4},'+
'{"title":"Keanu","openingDay":"2016-04-29","thGross":0.56,"openingGross":9.5},'+
'{"title":"Snow White and the Huntsman 2","openingDay":"2016-04-22","thGross":1.0,"openingGross":19.4},'+
'{"title":"Jungle Book","openingDay":"2016-04-15","thGross":4.2,"openingGross":103.3},'+
'{"title":"Barbershop 3","openingDay":"2016-04-15","thGross":0.74,"openingGross":20.2},'+
'{"title":"Boss","openingDay":"2016-04-08","thGross":0.99,"openingGross":23.6},'+
'{"title":"Hardcore Henry","openingDay":"2016-04-08","thGross":0.38,"openingGross":5.1},'+
'{"title":"Gods Not Dead 2","openingDay":"2016-04-01","thGross":0.4,"openingGross":7.6},'+
'{"title":"Meet the Blacks","openingDay":"2016-04-01","thGross":0.2,"openingGross":4.1},'+
'{"title":"Superman 2 - Batman vs Superman","openingDay":"2016-03-25","thGross":27.7,"openingGross":166.0},'+
'{"title":"My Big Fat Greek Wedding 2","openingDay":"2016-03-25","thGross":1.02,"openingGross":17.9},'+
'{"title":"Divergent 3 - Allegiant","openingDay":"2016-03-18","thGross":2.35,"openingGross":29.0},'+
'{"title":"10 Cloverfield Lane","openingDay":"2016-03-11","thGross":1.8,"openingGross":24.7},'+
'{"title":"Brothers Grimsby","openingDay":"2016-03-11","thGross":0.24,"openingGross":3.3},'+
'{"title":"Young Messiah","openingDay":"2016-03-11","thGross":0.48,"openingGross":3.3},'+
'{"title":"Perfect Match","openingDay":"2016-03-11","thGross":0.16,"openingGross":4.3},'+
'{"title":"Zootopia","openingDay":"2016-03-04","thGross":1.7,"openingGross":75.0},'+
'{"title":"Olympus Has Fallen 2 - London Has Fallen","openingDay":"2016-03-04","thGross":0.85,"openingGross":21.6},'+
'{"title":"Whiskey Tango Foxtrot","openingDay":"2016-03-04","thGross":0.3,"openingGross":7.4},'+
'{"title":"Gods of Egypt","openingDay":"2016-02-26","thGross":0.8,"openingGross":14.1},'+
'{"title":"Eddie the Eage","openingDay":"2016-02-26","thGross":0.18,"openingGross":6.1},'+
'{"title":"Triple 9","openingDay":"2016-02-26","thGross":0.34,"openingGross":6.1},'+
'{"title":"Risen","openingDay":"2016-02-19","thGross":0.43,"openingGross":11.8},'+
'{"title":"Witch","openingDay":"2016-02-19","thGross":0.63,"openingGross":8.8},'+
'{"title":"Race","openingDay":"2016-02-19","thGross":0.21,"openingGross":7.4},'+
'{"title":"Deadpool","openingDay":"2016-02-12","thGross":12.7,"openingGross":152.2},'+
'{"title":"Zoolander 2","openingDay":"2016-02-12","thGross":0.75,"openingGross":15.8},'+
'{"title":"How to be Single","openingDay":"2016-02-12","thGross":0.7,"openingGross":19.9},'+
'{"title":"Hail Caesar","openingDay":"2016-02-05","thGross":0.54,"openingGross":11.4},'+
'{"title":"Pride and Prejudice and Zombies","openingDay":"2016-02-05","thGross":0.29,"openingGross":5.3},'+
'{"title":"Choice","openingDay":"2016-02-05","thGross":0.3,"openingGross":6.1},'+
'{"title":"Finest Hours","openingDay":"2016-01-29","thGross":0.38,"openingGross":10.3},'+
'{"title":"Fifty Shades of Black","openingDay":"2016-01-29","thGross":0.28,"openingGross":5.9},'+
'{"title":"Fifth Wave","openingDay":"2016-01-22","thGross":0.48,"openingGross":10.3},'+
'{"title":"Dirty Grandpa","openingDay":"2016-01-22","thGross":0.66,"openingGross":11.1},'+
'{"title":"13 Hours","openingDay":"2016-01-15","thGross":0.9,"openingGross":19.2},'+
'{"title":"Ride Along 2","openingDay":"2016-01-15","thGross":1.26,"openingGross":41.0},'+
'{"title":"Forest","openingDay":"2016-01-08","thGross":0.52,"openingGross":12.7},'+
'{"title":"Revenant","openingDay":"2016-01-08","thGross":2.3,"openingGross":39.8},'+
'{"title":"Daddys Home","openingDay":"2015-12-25","thGross":1.2,"openingGross":38.7},'+
'{"title":"Star Wars 7 - Force Awakens","openingDay":"2015-12-18","thGross":57.0,"openingGross":248.0},'+
'{"title":"Sisters","openingDay":"2015-12-18","thGross":0.77,"openingGross":13.9},'+
'{"title":"In the Heart of the Sea","openingDay":"2015-12-11","thGross":0.58,"openingGross":11.1},'+
'{"title":"Krampus","openingDay":"2015-12-04","thGross":0.64,"openingGross":16.3},'+
'{"title":"Hunger Games 4 - Mockingjay 2","openingDay":"2015-11-20","thGross":16.0,"openingGross":102.7},'+
'{"title":"Night Before","openingDay":"2015-11-20","thGross":0.55,"openingGross":9.9},'+
'{"title":"Secret In Their Eyes","openingDay":"2015-11-20","thGross":0.17,"openingGross":6.7},'+
'{"title":"James Bond 24 - Spectre","openingDay":"2015-11-06","thGross":5.25,"openingGross":70.4},'+
'{"title":"Scouts Guide to the Zombie Apocalypse","openingDay":"2015-10-30","thGross":0.14,"openingGross":1.8},'+
'{"title":"Burnt","openingDay":"2015-10-30","thGross":0.25,"openingGross":5.0},'+
'{"title":"Paranormal Activity 5","openingDay":"2015-10-23","thGross":0.6,"openingGross":8.1},'+
'{"title":"Rock the Kasbah","openingDay":"2015-10-23","thGross":0.08,"openingGross":1.5},'+
'{"title":"Jem and the Holograms","openingDay":"2015-10-23","thGross":0.03,"openingGross":1.4},'+
'{"title":"Last Witch Hunter","openingDay":"2015-10-23","thGross":0.53,"openingGross":10.8},'+
'{"title":"Jobs","openingDay":"2015-10-23","thGross":0.29,"openingGross":7.1},'+
'{"title":"Bridge of Spies","openingDay":"2015-10-16","thGross":0.5,"openingGross":15.4},'+
'{"title":"Crimson Peak","openingDay":"2015-10-16","thGross":0.86,"openingGross":13.1},'+
'{"title":"Goosebumps","openingDay":"2015-10-16","thGross":0.6,"openingGross":23.6},'+
'{"title":"Pan","openingDay":"2015-10-09","thGross":0.65,"openingGross":15.3},'+
'{"title":"Martian","openingDay":"2015-10-02","thGross":2.5,"openingGross":54.3},'+
'{"title":"Internship","openingDay":"2015-09-25","thGross":0.65,"openingGross":17.7},'+
'{"title":"Green Inferno","openingDay":"2015-09-25","thGross":0.28,"openingGross":3.5},'+
'{"title":"Maze Runner 2","openingDay":"2015-09-18","thGross":1.7,"openingGross":30.3},'+
'{"title":"Black Mass","openingDay":"2015-09-18","thGross":1.4,"openingGross":22.6},'+
'{"title":"Visit","openingDay":"2015-09-11","thGross":1.02,"openingGross":25.5},'+
'{"title":"Transporter 4","openingDay":"2015-09-04","thGross":0.37,"openingGross":9.0},'+
'{"title":"War Room","openingDay":"2015-08-28","thGross":0.6,"openingGross":11.4},'+
'{"title":"We Are Your Friends","openingDay":"2015-08-28","thGross":0.18,"openingGross":1.8},'+
'{"title":"Sinister 2","openingDay":"2015-08-21","thGross":0.85,"openingGross":10.5},'+
'{"title":"Hitman 2","openingDay":"2015-08-21","thGross":0.6,"openingGross":8.3},'+
'{"title":"American Ultra","openingDay":"2015-08-21","thGross":0.43,"openingGross":5.5},'+
'{"title":"Straight Outta Compton","openingDay":"2015-08-14","thGross":4.96,"openingGross":60.2},'+
'{"title":"Man from U.N.C.L.E.","openingDay":"2015-08-14","thGross":0.9,"openingGross":13.4},'+
'{"title":"Fantastic Four - 2015","openingDay":"2015-08-07","thGross":2.7,"openingGross":25.7},'+
'{"title":"Gift (2015)","openingDay":"2015-08-07","thGross":0.59,"openingGross":11.9},'+
'{"title":"Ricki and the Flash","openingDay":"2015-08-07","thGross":0.2,"openingGross":6.6},'+
'{"title":"Mission Impossible 5 - Rogue Nation","openingDay":"2015-07-31","thGross":4.0,"openingGross":55.5},'+
'{"title":"Pixels","openingDay":"2015-07-24","thGross":2.0,"openingGross":24.0},'+
'{"title":"Paper Towns","openingDay":"2015-07-24","thGross":1.5,"openingGross":12.7},'+
'{"title":"Southpaw","openingDay":"2015-07-24","thGross":1.2,"openingGross":16.7},'+
'{"title":"Ant-Man","openingDay":"2015-07-17","thGross":6.4,"openingGross":57.2},'+
'{"title":"Trainwreck","openingDay":"2015-07-17","thGross":1.8,"openingGross":30.1},'+
'{"title":"Minions","openingDay":"2015-07-10","thGross":6.2,"openingGross":115.7},'+
'{"title":"Gallows","openingDay":"2015-07-10","thGross":0.9,"openingGross":9.8},'+
'{"title":"Self/Less","openingDay":"2015-07-10","thGross":0.33,"openingGross":5.4},'+
'{"title":"Ted 2","openingDay":"2015-06-26","thGross":2.6,"openingGross":33.5},'+
'{"title":"Max","openingDay":"2015-06-26","thGross":0.5,"openingGross":12.2},'+
'{"title":"Inside Out","openingDay":"2015-06-19","thGross":3.7,"openingGross":90.4},'+
'{"title":"Dope","openingDay":"2015-06-19","thGross":0.43,"openingGross":6.1},'+
'{"title":"Jurassic Park 4 - Jurassic World","openingDay":"2015-06-12","thGross":18.5,"openingGross":208.8},'+
'{"title":"Insidious Chapter 3","openingDay":"2015-06-05","thGross":1.55,"openingGross":22.7},'+
'{"title":"Spy","openingDay":"2015-06-05","thGross":1.5,"openingGross":29.1},'+
'{"title":"San Andreas","openingDay":"2015-05-29","thGross":3.1,"openingGross":54.6},'+
'{"title":"Aloha","openingDay":"2015-05-29","thGross":0.5,"openingGross":9.7},'+
'{"title":"Poltergeist","openingDay":"2015-05-22","thGross":1.4,"openingGross":26.3},'+
'{"title":"Tomorrowland","openingDay":"2015-05-22","thGross":0.73,"openingGross":42.7},'+
'{"title":"Pitch Perfect 2","openingDay":"2015-05-15","thGross":4.6,"openingGross":69.2},'+
'{"title":"Mad Max 4 - Fury Road","openingDay":"2015-05-15","thGross":3.7,"openingGross":45.4},'+
'{"title":"Hot Pursuit","openingDay":"2015-05-08","thGross":0.45,"openingGross":13.9},'+
'{"title":"Avengers 2 - Age of Ultron","openingDay":"2015-05-01","thGross":27.6,"openingGross":191.3},'+
'{"title":"Age of Adaline","openingDay":"2015-04-24","thGross":0.58,"openingGross":13.2},'+
'{"title":"Unfriended","openingDay":"2015-04-17","thGross":0.66,"openingGross":15.8},'+
'{"title":"Paul Blart: Mall Cop 2","openingDay":"2015-04-17","thGross":0.45,"openingGross":23.8},'+
'{"title":"Longest Ride","openingDay":"2015-04-10","thGross":0.63,"openingGross":13.0},'+
'{"title":"Fast and Furious 7 - Furious 7","openingDay":"2015-04-03","thGross":15.8,"openingGross":147.2},'+
'{"title":"Get Hard","openingDay":"2015-03-27","thGross":1.8,"openingGross":33.8},'+
'{"title":"Home","openingDay":"2015-03-27","thGross":0.65,"openingGross":52.1},'+
'{"title":"Divergent 2 - Insurgent","openingDay":"2015-03-20","thGross":4.1,"openingGross":52.3},'+
'{"title":"Run All Night","openingDay":"2015-03-15","thGross":0.46,"openingGross":11.0},'+
'{"title":"Cinderella","openingDay":"2015-03-13","thGross":2.3,"openingGross":67.9},'+
'{"title":"Chappie","openingDay":"2015-03-06","thGross":0.75,"openingGross":13.3},'+
'{"title":"Unfinished Business","openingDay":"2015-03-06","thGross":0.25,"openingGross":4.8},'+
'{"title":"Best Exotic Marigold Hotel 2","openingDay":"2015-03-06","thGross":0.13,"openingGross":8.5},'+
'{"title":"Focus","openingDay":"2015-02-27","thGross":0.9,"openingGross":18.7},'+
'{"title":"Lazarus Effect","openingDay":"2015-02-27","thGross":0.35,"openingGross":10.2},'+
'{"title":"McFarland","openingDay":"2015-02-20","thGross":0.26,"openingGross":11.0},'+
'{"title":"Hot Tub Time Machine 2","openingDay":"2015-02-20","thGross":0.37,"openingGross":6.0},'+
'{"title":"50 Shades of Grey","openingDay":"2015-02-13","thGross":8.6,"openingGross":93.0},'+
'{"title":"Kingsman: The Secret Service","openingDay":"2015-02-13","thGross":1.4,"openingGross":41.8},'+
'{"title":"Jupiter Ascending","openingDay":"2015-02-06","thGross":1.0,"openingGross":18.4},'+
'{"title":"Sponge Bob 2","openingDay":"2015-02-06","thGross":0.56,"openingGross":55.35},'+
'{"title":"Seventh Son","openingDay":"2015-02-06","thGross":0.3,"openingGross":7.2},'+
'{"title":"Project Almanac","openingDay":"2015-01-30","thGross":0.38,"openingGross":8.3},'+
'{"title":"Black and White","openingDay":"2015-01-30","thGross":0.12,"openingGross":6.2},'+
'{"title":"Boy Next Door","openingDay":"2015-01-23","thGross":0.5,"openingGross":14.9},'+
'{"title":"American Sniper","openingDay":"2015-01-16","thGross":5.3,"openingGross":107.2},'+
'{"title":"Wedding Ringer","openingDay":"2015-01-16","thGross":0.8,"openingGross":20.6},'+
'{"title":"Blackhat","openingDay":"2015-01-16","thGross":0.18,"openingGross":3.9},'+
'{"title":"Taken 3","openingDay":"2015-01-09","thGross":1.6,"openingGross":39.2},'+
'{"title":"Selma","openingDay":"2015-01-09","thGross":0.4,"openingGross":11.3},'+
'{"title":"Woman in Black 2","openingDay":"2015-01-02","thGross":1.5,"openingGross":15.0},'+
'{"title":"Night at the Museum 3","openingDay":"2014-12-19","thGross":0.49,"openingGross":17.1},'+
'{"title":"Annie","openingDay":"2014-12-19","thGross":0.36,"openingGross":15.9},'+
'{"title":"Exodus: Gods and Kings","openingDay":"2014-12-12","thGross":1.2,"openingGross":24.1},'+
'{"title":"Top Five","openingDay":"2014-12-12","thGross":0.19,"openingGross":6.9},'+
'{"title":"Hunger Games 3 - Mockingjay Part 1","openingDay":"2014-11-21","thGross":17.0,"openingGross":121.9},'+
'{"title":"Interstellar","openingDay":"2014-11-07","thGross":2.7,"openingGross":47.5},'+
'{"title":"Big Hero 6","openingDay":"2014-11-07","thGross":1.4,"openingGross":56.2},'+
'{"title":"Nightcrawler","openingDay":"2014-10-31","thGross":0.52,"openingGross":10.4},'+
'{"title":"Ouija","openingDay":"2014-10-24","thGross":0.91,"openingGross":19.9},'+
'{"title":"John Wick","openingDay":"2014-10-24","thGross":0.87,"openingGross":14.4},'+
'{"title":"Dracula Untold","openingDay":"2014-10-10","thGross":1.3,"openingGross":23.5},'+
'{"title":"Annabelle","openingDay":"2014-10-03","thGross":2.1,"openingGross":37.1},'+
'{"title":"Gone Girl","openingDay":"2014-10-03","thGross":1.3,"openingGross":37.5},'+
'{"title":"Equalizer","openingDay":"2014-09-26","thGross":1.5,"openingGross":34.1},'+
'{"title":"Maze Runner","openingDay":"2014-09-19","thGross":1.1,"openingGross":32.5},'+
'{"title":"Walk Among the Tombstones","openingDay":"2014-09-19","thGross":0.43,"openingGross":12.8},'+
'{"title":"This Is Where I Leave You","openingDay":"2014-09-19","thGross":0.1,"openingGross":11.6},'+
'{"title":"As Above So Below","openingDay":"2014-08-29","thGross":0.47,"openingGross":8.6},'+
'{"title":"If I Stay","openingDay":"2014-08-22","thGross":1.1,"openingGross":15.7},'+
'{"title":"Sin City 2","openingDay":"2014-08-22","thGross":0.48,"openingGross":6.3},'+
'{"title":"When the Game Stands Tall","openingDay":"2014-08-22","thGross":0.43,"openingGross":8.4},'+
'{"title":"Expendables 3","openingDay":"2014-08-15","thGross":0.88,"openingGross":15.9},'+
'{"title":"Giver","openingDay":"2014-08-15","thGross":0.75,"openingGross":12.3},'+
'{"title":"Teenage Mutant Ninja Turtles - 2014","openingDay":"2014-08-08","thGross":4.6,"openingGross":65.6},'+
'{"title":"Into the Storm","openingDay":"2014-08-08","thGross":0.8,"openingGross":17.3},'+
'{"title":"Hundred Foot Journey","openingDay":"2014-08-08","thGross":0.31,"openingGross":10.9},'+
'{"title":"Guardians of the Galaxy","openingDay":"2014-08-01","thGross":11.2,"openingGross":94.3},'+
'{"title":"Get On Up","openingDay":"2014-08-01","thGross":0.37,"openingGross":13.6},'+
'{"title":"Lucy","openingDay":"2014-07-25","thGross":2.7,"openingGross":43.9},'+
'{"title":"Hercules","openingDay":"2014-07-25","thGross":2.1,"openingGross":29.8},'+
'{"title":"Purge 2","openingDay":"2014-07-18","thGross":2.6,"openingGross":29.8},'+
'{"title":"Sex Tape","openingDay":"2014-07-18","thGross":1.1,"openingGross":14.6},'+
'{"title":"Planes 2","openingDay":"2014-07-18","thGross":0.45,"openingGross":17.5},'+
'{"title":"Planet of the Apes 2 - Dawn of the Planet of the Apes","openingDay":"2014-07-11","thGross":4.1,"openingGross":72.6},'+
'{"title":"Transformers 4 - Age of Extinction","openingDay":"2014-06-27","thGross":8.75,"openingGross":100.0},'+
'{"title":"Think Like A Man 2","openingDay":"2014-06-20","thGross":1.8,"openingGross":29.2},'+
'{"title":"21 Jump Street 2","openingDay":"2014-06-13","thGross":5.5,"openingGross":57.0},'+
'{"title":"How To Train Your Dragn 2","openingDay":"2014-06-13","thGross":2.0,"openingGross":49.5},'+
'{"title":"The Fault in Our Stars","openingDay":"2014-06-06","thGross":8.2,"openingGross":48.0},'+
'{"title":"Edge of Tomorrow","openingDay":"2014-06-06","thGross":1.8,"openingGross":28.8},'+
'{"title":"Maleficent","openingDay":"2014-05-30","thGross":4.2,"openingGross":69.4},'+
'{"title":"Million Ways to Die in the West","openingDay":"2014-05-30","thGross":0.89,"openingGross":16.7},'+
'{"title":"X-Men 5 - Days of Future Past","openingDay":"2014-05-23","thGross":8.1,"openingGross":110.6},'+
'{"title":"Million Dollar Arm","openingDay":"2014-05-16","thGross":0.25,"openingGross":10.5},'+
'{"title":"Godzilla","openingDay":"2014-05-16","thGross":9.3,"openingGross":93.2},'+
'{"title":"Neighbors","openingDay":"2014-05-09","thGross":2.56,"openingGross":49.0},'+
'{"title":"Amazing Spider-Man 2","openingDay":"2014-05-02","thGross":8.7,"openingGross":91.6},'+
'{"title":"Brick Mansions","openingDay":"2014-04-25","thGross":0.4,"openingGross":9.5},'+
'{"title":"Transcendence","openingDay":"2014-04-18","thGross":0.85,"openingGross":10.9},'+
'{"title":"Rio 2","openingDay":"2014-04-11","thGross":0.4,"openingGross":39.3},'+
'{"title":"Oculus","openingDay":"2014-04-11","thGross":0.48,"openingGross":12.0},'+
'{"title":"Draft Day","openingDay":"2014-04-11","thGross":0.31,"openingGross":9.8},'+
'{"title":"Captain America 2 - Winter Soldier","openingDay":"2014-04-04","thGross":10.2,"openingGross":95.0},'+
'{"title":"Noah","openingDay":"2014-03-28","thGross":1.6,"openingGross":43.7},'+
'{"title":"Divergent","openingDay":"2014-03-21","thGross":4.9,"openingGross":54.6},'+
'{"title":"Need for Speed","openingDay":"2014-03-14","thGross":1.1,"openingGross":17.8},'+
'{"title":"Veronica Mars","openingDay":"2014-03-14","thGross":0.26,"openingGross":2.0},'+
'{"title":"Tyler Perry - Single Moms Club","openingDay":"2014-03-14","thGross":0.19,"openingGross":8.1},'+
'{"title":"300 2: Rise of an Empire","openingDay":"2014-03-07","thGross":3.3,"openingGross":45.0},'+
'{"title":"Son of God","openingDay":"2014-02-28","thGross":1.2,"openingGross":25.6},'+
'{"title":"Non-Stop","openingDay":"2014-02-28","thGross":0.72,"openingGross":28.9},'+
'{"title":"3 Days to Kill","openingDay":"2014-02-21","thGross":0.33,"openingGross":12.2},'+
'{"title":"Pompeii","openingDay":"2014-02-21","thGross":0.24,"openingGross":10.3},'+
'{"title":"About Last Night","openingDay":"2014-02-14","thGross":0.53,"openingGross":27.8},'+
'{"title":"Endless Love","openingDay":"2014-02-14","thGross":0.22,"openingGross":14.4},'+
'{"title":"Monuments Men","openingDay":"2014-02-07","thGross":0.55,"openingGross":22.0},'+
'{"title":"Lego Movie","openingDay":"2014-02-07","thGross":0.4,"openingGross":69.0},'+
'{"title":"That Awkward Moment","openingDay":"2014-01-31","thGross":0.25,"openingGross":8.7},'+
'{"title":"Ride Along","openingDay":"2014-01-17","thGross":1.06,"openingGross":48.6},'+
'{"title":"Jack Ryan: Shadow Recruit","openingDay":"2014-01-17","thGross":0.35,"openingGross":18.0},'+
'{"title":"Lone Survivor","openingDay":"2014-01-10","thGross":1.5,"openingGross":37.8},'+
'{"title":"Paranormal Activity - The Marked Ones","openingDay":"2014-01-03","thGross":1.2,"openingGross":18.3},'+
'{"title":"Hobbit 2 - Desolation of Smaug","openingDay":"2013-12-13","thGross":8.8,"openingGross":73.6},'+
'{"title":"Hunger Games 2 - Catching Fire","openingDay":"2013-11-22","thGross":25.25,"openingGross":158.1},'+
'{"title":"Best Man 2","openingDay":"2013-11-15","thGross":0.69,"openingGross":30.1},'+
'{"title":"Thor 2","openingDay":"2013-11-08","thGross":7.1,"openingGross":85.7},'+
'{"title":"Enders Game","openingDay":"2013-11-01","thGross":1.4,"openingGross":27.0},'+
'{"title":"Jackass 4 - Bad Grandpa","openingDay":"2013-10-25","thGross":1.4,"openingGross":32.1},'+
'{"title":"Carrie","openingDay":"2013-10-18","thGross":0.73,"openingGross":16.1},'+
'{"title":"Captain Phillips","openingDay":"2013-10-11","thGross":0.6,"openingGross":25.7},'+
'{"title":"Machete 2 - Machete Kills","openingDay":"2013-10-11","thGross":0.2,"openingGross":3.8},'+
'{"title":"Gravity","openingDay":"2013-10-04","thGross":1.4,"openingGross":55.8},'+
'{"title":"Runner Runner","openingDay":"2013-10-04","thGross":0.2,"openingGross":7.7},'+
'{"title":"Indsidious 2","openingDay":"2013-09-13","thGross":1.5,"openingGross":40.3},'+
'{"title":"The Family","openingDay":"2013-09-13","thGross":0.38,"openingGross":14.0},'+
'{"title":"Riddick 3 - Riddick","openingDay":"2013-09-06","thGross":0.9,"openingGross":19.0},'+
'{"title":"One Direction: This Is Us","openingDay":"2013-08-30","thGross":2.7,"openingGross":18.5},'+
'{"title":"Youre Next","openingDay":"2013-08-23","thGross":0.48,"openingGross":7.0},'+
'{"title":"Kick-Ass 2","openingDay":"2013-08-16","thGross":1.3,"openingGross":13.3},'+
'{"title":"Jobs","openingDay":"2013-08-16","thGross":0.43,"openingGross":6.7},'+
'{"title":"Elysium","openingDay":"2013-08-09","thGross":1.6,"openingGross":29.8},'+
'{"title":"Two Guns","openingDay":"2013-08-02","thGross":1.28,"openingGross":27.1},'+
'{"title":"Wolverine 2","openingDay":"2013-07-26","thGross":4.0,"openingGross":53.1},'+
'{"title":"Conjuring","openingDay":"2013-07-19","thGross":3.3,"openingGross":41.9},'+
'{"title":"Red 2","openingDay":"2013-07-19","thGross":0.8,"openingGross":18.0},'+
'{"title":"RIPD","openingDay":"2013-07-19","thGross":0.77,"openingGross":12.7},'+
'{"title":"Pacific Rim","openingDay":"2013-07-12","thGross":3.6,"openingGross":37.3},'+
'{"title":"Grown Ups 2","openingDay":"2013-07-12","thGross":2.3,"openingGross":41.5},'+
'{"title":"White House Down","openingDay":"2013-06-28","thGross":1.35,"openingGross":24.9},'+
'{"title":"The Heat","openingDay":"2013-06-28","thGross":1.0,"openingGross":39.1},'+
'{"title":"World War Z","openingDay":"2013-06-21","thGross":3.6,"openingGross":66.4},'+
'{"title":"Monsters Inc 2","openingDay":"2013-06-21","thGross":2.6,"openingGross":82.4},'+
'{"title":"Superman - Man of Steel","openingDay":"2013-06-14","thGross":9.0,"openingGross":116.6},'+
'{"title":"Purge","openingDay":"2013-06-07","thGross":3.4,"openingGross":34.1},'+
'{"title":"Internship","openingDay":"2013-06-07","thGross":0.8,"openingGross":17.3},'+
'{"title":"Now You See Me","openingDay":"2013-05-31","thGross":1.5,"openingGross":29.3},'+
'{"title":"After Earth","openingDay":"2013-05-31","thGross":1.0,"openingGross":27.5},'+
'{"title":"Fast and Furious 6","openingDay":"2013-05-24","thGross":6.5,"openingGross":97.4},'+
'{"title":"Great Gatsby","openingDay":"2013-05-10","thGross":3.25,"openingGross":50.1},'+
'{"title":"Iron Man 3","openingDay":"2013-05-03","thGross":15.6,"openingGross":174.1},'+
'{"title":"Pain and Gain","openingDay":"2013-04-26","thGross":0.75,"openingGross":20.2},'+
'{"title":"Oblivion","openingDay":"2013-04-19","thGross":1.1,"openingGross":37.1},'+
'{"title":"Evil Dead","openingDay":"2013-04-05","thGross":1.8,"openingGross":25.8},'+
'{"title":"Jurassic Park 3D","openingDay":"2013-04-05","thGross":0.48,"openingGross":18.6},'+
'{"title":"Oz the Great and Powerful","openingDay":"2013-03-08","thGross":2.0,"openingGross":79.1},'+
'{"title":"Jack the Giant Killer","openingDay":"2013-03-01","thGross":0.4,"openingGross":27.2},'+
'{"title":"Identity Thief","openingDay":"2013-02-08","thGross":0.41,"openingGross":34.6},'+
'{"title":"Warm Bodies","openingDay":"2013-02-01","thGross":0.53,"openingGross":20.4},'+
'{"title":"Hansel & Gretel: Witch Hunters","openingDay":"2013-01-25","thGross":0.5,"openingGross":19.7},'+
'{"title":"Gangster Squad","openingDay":"2013-01-11","thGross":0.65,"openingGross":17.1},'+
'{"title":"Texas Chainsaw Massacre 3 - The Beginning","openingDay":"2013-01-04","thGross":1.15,"openingGross":21.7},'+
'{"title":"Hobbit 1 - Unexpected Journey","openingDay":"2012-12-14","thGross":13.0,"openingGross":84.6},'+
'{"title":"Twilight 5 - Breaking Dawn 2","openingDay":"2012-11-16","thGross":30.4,"openingGross":141.1},'+
'{"title":"Bond 23 - Skyfall","openingDay":"2012-11-09","thGross":4.6,"openingGross":88.4},'+
'{"title":"Wreck-It Ralph","openingDay":"2012-11-02","thGross":0.38,"openingGross":49.0},'+
'{"title":"Paranormal Activity 4","openingDay":"2012-10-19","thGross":4.5,"openingGross":29.0},'+
'{"title":"Sinister","openingDay":"2012-10-14","thGross":1.0,"openingGross":18.0},'+
'{"title":"Taken 2","openingDay":"2012-10-05","thGross":1.5,"openingGross":49.5},'+
'{"title":"Resident Evil 5 - Retribution","openingDay":"2012-09-14","thGross":0.7,"openingGross":21.1},'+
'{"title":"Expendables 2","openingDay":"2012-08-17","thGross":0.73,"openingGross":28.6},'+
'{"title":"Batman (Nolan) 3 - Dark Knight Rises","openingDay":"2012-07-20","thGross":30.6,"openingGross":160.9},'+
'{"title":"Ted","openingDay":"2012-06-29","thGross":2.6,"openingGross":54.4},'+
'{"title":"Magic Mike","openingDay":"2012-06-29","thGross":2.1,"openingGross":39.1},'+
'{"title":"Abraham Lincoln: Vampire Hunter","openingDay":"2012-06-22","thGross":0.7,"openingGross":16.3},'+
'{"title":"Thats My Boy","openingDay":"2012-06-15","thGross":0.25,"openingGross":13.5},'+
'{"title":"Prometheus","openingDay":"2012-06-08","thGross":3.6,"openingGross":51.1},'+
'{"title":"Snow White and the Huntsman","openingDay":"2012-06-01","thGross":1.4,"openingGross":56.2},'+
'{"title":"Men in Black 3","openingDay":"2012-05-25","thGross":1.6,"openingGross":69.3},'+
'{"title":"Chernobyl Diaries","openingDay":"2012-05-25","thGross":0.55,"openingGross":9.4},'+
'{"title":"Battleship","openingDay":"2012-05-18","thGross":0.42,"openingGross":25.5},'+
'{"title":"Dark Shadows","openingDay":"2012-05-11","thGross":0.55,"openingGross":29.7},'+
'{"title":"Avengers (Marvel)","openingDay":"2012-05-04","thGross":18.7,"openingGross":207.4},'+
'{"title":"Think Like a Man","openingDay":"2012-04-20","thGross":0.55,"openingGross":33.6},'+
'{"title":"American Pie 4","openingDay":"2012-04-06","thGross":0.66,"openingGross":21.5},'+
'{"title":"Clash of the Titans 2 - Wrath of the Titans","openingDay":"2012-03-30","thGross":1.0,"openingGross":33.5},'+
'{"title":"Hunger Games 1","openingDay":"2012-03-23","thGross":19.7,"openingGross":152.5},'+
'{"title":"21 Jump Street","openingDay":"2012-03-16","thGross":0.7,"openingGross":36.3},'+
'{"title":"John Carter","openingDay":"2012-03-09","thGross":0.5,"openingGross":30.2},'+
'{"title":"Project X","openingDay":"2012-03-02","thGross":1.2,"openingGross":21.1},'+
'{"title":"Act of Valor","openingDay":"2012-02-24","thGross":1.1,"openingGross":24.5},'+
'{"title":"Star Wars 1 - Phantom Menace 3D","openingDay":"2012-02-10","thGross":1.1,"openingGross":22.5},'+
'{"title":"Vow","openingDay":"2012-02-10","thGross":0.7,"openingGross":41.2},'+
'{"title":"Safe House","openingDay":"2012-02-10","thGross":0.54,"openingGross":40.2},'+
'{"title":"Devil Inside","openingDay":"2012-01-06","thGross":2.0,"openingGross":33.7},'+
'{"title":"Sherlock Holmes 2 - Game of Shadows","openingDay":"2011-12-16","thGross":1.3,"openingGross":39.6},'+
'{"title":"Twilight 4 - Breaking Dawn 1","openingDay":"2011-11-18","thGross":30.3,"openingGross":138.1},'+
'{"title":"Immortals","openingDay":"2011-11-11","thGross":1.4,"openingGross":32.2},'+
'{"title":"Paranormal Activity 3","openingDay":"2011-10-21","thGross":8.0,"openingGross":52.6},'+
'{"title":"Planet of the Apes (Rise of)","openingDay":"2011-08-05","thGross":1.4,"openingGross":54.8},'+
'{"title":"Cowboys and Aliens","openingDay":"2011-07-29","thGross":0.7,"openingGross":36.4},'+
'{"title":"Captain America","openingDay":"2011-07-22","thGross":4.0,"openingGross":65.1},'+
'{"title":"Harry Potter 8 - Deathly Hallows 2","openingDay":"2011-07-15","thGross":43.5,"openingGross":169.2},'+
'{"title":"Horrible Bosses","openingDay":"2011-07-08","thGross":0.37,"openingGross":28.3},'+
'{"title":"Green Lantern","openingDay":"2011-06-17","thGross":3.4,"openingGross":53.2},'+
'{"title":"Super 8","openingDay":"2011-06-10","thGross":0.5,"openingGross":35.5},'+
'{"title":"X-Men 4 - First Class","openingDay":"2011-06-03","thGross":3.4,"openingGross":55.1},'+
'{"title":"Pirates of the Caribbean 4 - On Stranger Tides","openingDay":"2011-05-20","thGross":4.7,"openingGross":90.2},'+
'{"title":"Thor","openingDay":"2011-05-06","thGross":3.3,"openingGross":65.7},'+
'{"title":"Fast and Furious 5","openingDay":"2011-04-29","thGross":3.8,"openingGross":86.2},'+
'{"title":"Scream 4","openingDay":"2011-04-15","thGross":0.8,"openingGross":18.7},'+
'{"title":"Sucker Punch","openingDay":"2011-03-25","thGross":0.8,"openingGross":19.1},'+
'{"title":"Battle: Los Angeles","openingDay":"2011-03-11","thGross":0.7,"openingGross":35.6},'+
'{"title":"Green Hornet","openingDay":"2011-01-14","thGross":0.55,"openingGross":40.0},'+
'{"title":"Tron 2","openingDay":"2010-12-17","thGross":3.6,"openingGross":44.0},'+
'{"title":"Harry Potter 7 - Deathly Hallows 1","openingDay":"2010-11-19","thGross":24.0,"openingGross":125.0},'+
'{"title":"Saw 7","openingDay":"2010-10-29","thGross":1.7,"openingGross":22.5},'+
'{"title":"Paranormal Activity 2","openingDay":"2010-10-22","thGross":6.3,"openingGross":40.7},'+
'{"title":"Jackass 3","openingDay":"2010-10-15","thGross":2.5,"openingGross":50.4},'+
'{"title":"Resident Evil 4 - Afterlife","openingDay":"2010-09-10","thGross":0.63,"openingGross":26.7},'+
'{"title":"Last Exorcism","openingDay":"2010-08-27","thGross":0.8,"openingGross":20.4},'+
'{"title":"Grown Ups","openingDay":"2010-08-06","thGross":0.55,"openingGross":40.5},'+
'{"title":"Salt","openingDay":"2010-07-23","thGross":0.55,"openingGross":36.0},'+
'{"title":"Inception","openingDay":"2010-07-16","thGross":3.0,"openingGross":62.8},'+
'{"title":"Despicable Me","openingDay":"2010-07-09","thGross":0.59,"openingGross":56.4},'+
'{"title":"Other Guys","openingDay":"2010-06-25","thGross":0.55,"openingGross":35.5},'+
'{"title":"Toy Story 3","openingDay":"2010-06-18","thGross":4.0,"openingGross":110.3},'+
'{"title":"Prince of Persia","openingDay":"2010-05-28","thGross":0.5,"openingGross":37.8},'+
'{"title":"Iron Man 2","openingDay":"2010-05-07","thGross":7.5,"openingGross":128.1},'+
'{"title":"Nightmare on Elm Street","openingDay":"2010-04-30","thGross":2.3,"openingGross":32.9},'+
'{"title":"Kick-Ass","openingDay":"2010-04-16","thGross":0.8,"openingGross":19.8},'+
'{"title":"Clash of the Titans 1","openingDay":"2010-04-02","thGross":1.6,"openingGross":61.2},'+
'{"title":"Alice in Wonderland","openingDay":"2010-03-05","thGross":3.9,"openingGross":116.1},'+
'{"title":"Avatar","openingDay":"2009-12-18","thGross":3.7,"openingGross":77.0},'+
'{"title":"Princess and the Frog","openingDay":"2009-12-11","thGross":1.0,"openingGross":24.2},'+
'{"title":"Twilight 2 - New Moon","openingDay":"2009-11-20","thGross":26.3,"openingGross":142.8},'+
'{"title":"2012","openingDay":"2009-11-13","thGross":1.0,"openingGross":65.2},'+
'{"title":"Inglourious Basterds","openingDay":"2009-08-21","thGross":1.9,"openingGross":38.1},'+
'{"title":"District 9","openingDay":"2009-08-14","thGross":1.6,"openingGross":37.4},'+
'{"title":"Bruno","openingDay":"2009-07-10","thGross":1.6,"openingGross":30.6},'+
'{"title":"Hangover 1","openingDay":"2009-06-05","thGross":1.0,"openingGross":45.0},'+
'{"title":"Star Trek 1","openingDay":"2009-05-08","thGross":4.0,"openingGross":75.2},'+
'{"title":"Wolverine","openingDay":"2009-05-01","thGross":5.0,"openingGross":85.1},'+
'{"title":"Fast and Furious 4","openingDay":"2009-04-03","thGross":1.8,"openingGross":71.0},'+
'{"title":"Watchmen","openingDay":"2009-03-06","thGross":4.6,"openingGross":55.2},'+
'{"title":"Twilight 1","openingDay":"2008-11-21","thGross":7.0,"openingGross":69.6},'+
'{"title":"Bond 22 - Quantum of Solace","openingDay":"2008-11-14","thGross":2.5,"openingGross":67.5},'+
'{"title":"Batman (Nolan) 2 - Dark Knight","openingDay":"2008-07-18","thGross":18.5,"openingGross":158.4},'+
'{"title":"Wanted","openingDay":"2008-06-27","thGross":1.52,"openingGross":50.9},'+
'{"title":"Sex and the City 1","openingDay":"2008-05-30","thGross":2.5,"openingGross":57.0},'+
'{"title":"Indiana Jones and the Crystal Skull","openingDay":"2008-05-23","thGross":4.5,"openingGross":126.9},'+
'{"title":"Iron Man 1","openingDay":"2008-05-02","thGross":5.0,"openingGross":98.6},'+
'{"title":"Cloverfield","openingDay":"2008-01-18","thGross":1.7,"openingGross":46.1},'+
'{"title":"I Am Legend","openingDay":"2007-12-14","thGross":1.7,"openingGross":77.2},'+
'{"title":"Spider-Man 3","openingDay":"2007-05-04","thGross":10.0,"openingGross":151.1},'+
'{"title":"300","openingDay":"2007-03-09","thGross":2.5,"openingGross":70.9},'+
'{"title":"Snakes on a Plane","openingDay":"2006-08-18","thGross":1.4,"openingGross":13.8},'+
'{"title":"Pirates of the Caribbean 2 - Dead Mans Chest","openingDay":"2006-07-07","thGross":9.0,"openingGross":135.6},'+
'{"title":"X-Men 3 - Last Stand","openingDay":"2006-05-26","thGross":5.9,"openingGross":122.9},'+
'{"title":"Mission Impossible 3","openingDay":"2006-05-05","thGross":1.1,"openingGross":47.7},'+
'{"title":"Harry Potter 4 - Goblet of Fire","openingDay":"2005-11-18","thGross":6.3,"openingGross":102.7},'+
'{"title":"Dumb and Dumber To","openingDay":"2004-11-14","thGross":1.6,"openingGross":36.1},'+
'{"title":"Fury","openingDay":"2004-10-17","thGross":1.2,"openingGross":23.7},'+
'{"title":"Best of Me","openingDay":"2004-10-17","thGross":0.53,"openingGross":10.0},'+
'{"title":"Book of Life","openingDay":"2004-10-17","thGross":0.3,"openingGross":17.0},'+
'{"title":"Spider-Man 1","openingDay":"2002-05-03","thGross":7.0,"openingGross":114.8} ]}';


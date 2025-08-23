var puppy = {};
puppy.name = 'Artur';
puppy.sex = 'samec';
puppy.breed = {
	value: 'neznámá',
	note: 'asi labrador'
};
puppy.born = {
	value: '2025-07-31',
	note: 'odhadem'
};
puppy.weight = {
	value: '1420',
	note: 'k 22.8.2025'
};
puppy.age = Math.floor((new Date() - new Date(puppy.born.value)) / (1000*60*60*24));


var events = [
	{ date: "2025-07-31", label: "Narozen", 			color: "blue", 		note: "Odhadované datum narození" },
	{ date: "2025-08-21", label: "Odchyt", 				color: "blue", 		note: "Odchycen & Převezen k Niki" },
	{ date: "2025-08-22", label: "Odčervení", 			color: "purple", 	note: "1. odčervení (mikro-dávka)" },
	{ date: "2025-08-24", label: "Pod Spolkem", 		color: "blue", 		note: "Převezen k Barči, ofiko pod Spolkem" },
	{ date: "2025-08-24", label: "Odčervení", 			color: "purple", 	note: "2. odčervení (dávka podle návodu)" },
	{ date: "2025-09-07", label: "Odčervení", 			color: "purple", 	note: "3. dávka odčervení" },
	{ date: "2025-09-18", label: "Očkování & čip", 		color: "black", 	note: "Od 7 týdne se už může očkovat (Andrea Stankova)" },
	{ date: "2025-09-21", label: "Odčervení", 			color: "purple", 	note: "4. dávka odčervení" },
	{ date: "2025-09-25", label: "Připraven k adopci", 	color: "blue", 	note: "Připraven k adopci" },
];

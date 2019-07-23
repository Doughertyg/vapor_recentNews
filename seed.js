const faker = require('faker');
const db = require('./database');

const updates = []; //initiate the array to be seeded
const comments = [];
const games = [];
let related = '';
let gameids = [];


for (var i = 0; i < 100; i++) { // want to pre-create the random game ids so our hard coded dota data can refer to it
	gameids.push(faker.random.number({min: 2, max: 80000})); // this is just so the dummy data hooks up and works on the front end
}

for (var i = 0; i < 10; i++) { // set related equal to 10 random game ids 
	related = related + ' ' + faker.random.arrayElement(gameids);
}

//hard coding our dota 2 info....
games.push({
	id: 1, 
	title: 'Dota 2', 
	platforms: 'windows mac steam', 
	vr_support: 'vive', 
	img: faker.image.abstract(), 
	related: related, // this now points to 10 random game ids and later we can get the related games via these ids
	text: faker.lorem.paragraph(3, false, 5)
});

for (var i = 0; i < 100; i++) { //create 100 entries and fake content

	updates.push({
		id: faker.random.number(),
		posted_by: faker.internet.userName().split(' ').join('_'),
		post_date: faker.date.past(),
		title: faker.lorem.sentence(4, false, 4),
		text: faker.lorem.paragraph(3, false, 5),
		img: faker.image.abstract(), //not all stories need images
		comment_count: faker.random.number()
	})

	comments.push({
		id: faker.random.number(), 
		posted_by: faker.internet.userName().split(' ').join('_'), // would be grabbed from user table using id
		user_id: faker.random.number(), //this would technically be drawn from a user table (or be a foreign key pointing to the table)
		post_date: faker.date.past(),
		text: faker.lorem.paragraph(3, false, 5),
		user_img: faker.image.abstract(), //these values would technically be retrieved from a users table but I am not creating one
		user_steam_level: faker.random.number({min: 1, max: 10})
	})

	games.push({
		id: gameids[i], //starts at 2 because we already hard coded dota 2 the id of 1
		title: faker.lorem.sentence(1, false, 2), 
		platforms: 'windows mac steam', 
		vr_support: 'vive', 
		img: faker.image.abstract(), 
		related: related, //not random, only used for dota 2
		text: faker.lorem.paragraph(3, false, 5),
	})
}

db.Updates.sync({ force: true, logging: false})
.then(() => {
	console.log('updates table dropped and synced');
	return db.Updates.bulkCreate(updates)
})
.then(() => {
	console.log('fake data seeded into updates!');
	return db.Comments.sync({ force: true, logging: false })
})
.then(() => {
	console.log('comments table dropped and synced!');
	return db.Comments.bulkCreate(comments)
})
.then(() => {
	console.log('comments data seeded!');
	return db.Games.sync({ force: true, logging: false })
})
.then(() => {
	console.log('games table dropped and synced!');
	return db.Games.bulkCreate(games)
})
.then(() => {
	console.log('games data seeded!');
})
.catch((err) => {
	console.log('error bulk creating data in db!', err);
})
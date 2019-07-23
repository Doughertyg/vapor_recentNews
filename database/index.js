const Sequelize = require('sequelize');
const mysql2 = require('mysql2'); //needed to fix build issue with webpack
const sequelize = new Sequelize('steam_updates', 'root', null, {
	dialect: 'mysql',
	dialectModule: mysql2, //needed to fix issue with webpack
	host: 'localhost',
	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	}
});

sequelize
	.authenticate()
	.then(() => {
		console.log('connection successful yayy');
	})
	.catch((err) => {
		console.log('error connecting to database LOLL', err);
	})

const Updates = sequelize.define('updates', { //defining our updates model

	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	posted_by: {
		type: Sequelize.STRING,
		allowNull: false
	},
	post_date: {
		type: Sequelize.DATEONLY,
		allowNull: false
	},
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	img: {
		type: Sequelize.STRING,
		allowNull: true
	},
	comment_count: {
		type: Sequelize.INTEGER,
		allowNull: true
	} // TO-DO: add additional fields for modals (likes, dislikes, comments, etc)
})

const Games = sequelize.define('games', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true
	}, 
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	img: {
		type: Sequelize.STRING,
		allowNull: true
	},
	related: {
		type: Sequelize.STRING,
		allowNull: true
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	platforms: {
		type: Sequelize.STRING,
		allowNull: true
	},
	vr_support: {
		type: Sequelize.STRING,
		allowNull: true
	}
})

const Comments = sequelize.define('comments', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true
	},
	posted_by: {
		type: Sequelize.STRING,
		allowNull: false
	},
	user_id: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
	post_date: {
		type: Sequelize.DATEONLY,
		allowNull: false
	},
	text: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	user_img: {
		type: Sequelize.STRING,
		allowNull: true
	},
	user_steam_level: {
		type: Sequelize.INTEGER,
		allowNull: false
	},
})

sequelize.sync({ force: false, logging: false }) // pass force option in? to auto create table
.then(() => {
	console.log('all synced');
})
.catch(() => {
	console.log('[db.index.js:126] sync failed');
})

const getUpdates = (cb) => {
	console.log('performing get on db!!');

	Updates.findAll()
	.then((data) => {
		console.log('[database/index.jsx:134] updates successfuly fetched');
		cb(null, data);
	})
	.catch((err) => {
		console.log('[db/index.jsx:138] error encountered retreiving data', err);
		cb(err);
	})
}

const getGame = (id, cb) => {
	console.log('performing get on db!!');

	Games.findAll({
		where: {
			id: id
		}
	})
	.then((data) => {
		console.log('[db/index.jsx: 152] game fetched using id!', data);
		cb(null, data);
	})
	.catch((err) => {
		console.log('error encountered fetching game from db:', err);
		cb(err);
	})
}

module.exports.getUpdates = getUpdates;
module.exports.getGame = getGame;
module.exports.db = sequelize;
module.exports.Updates = Updates;
module.exports.Games = Games;
module.exports.Comments = Comments;
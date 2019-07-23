import React from 'react';
const styled = window.styled

// TO-DO: generate dynamically... store about content in db, preferably with html markup or with someway to indicate paragraphs and headers
// TO-DO: store reviews on db as review-highlights or similar and get then fill here dynamically


const Main_col = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  width: 616px;
  background-color:  #1b2838;
  color: #acb2b8;
  font-size: 12px;
`

const Category_header = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  font-size: 14px;
  margin-bottom: 10px;
  letter-spacing: 2px;
  padding-top: 32px;
  color: white;
  line-height: 26px;
` 

const Rev_highlight_content = styled.div`
  line-height: 1.5em;
  padding-bottom: 12px;
`

const Spacer = styled.div`
  background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png);
  background-repeat: no-repeat;
  background-position: bottom left;
  font-size: 14px;
`

const Rev_link = styled.div`
	display: inline-block;
	color: white;
	&:hover {
		color: #66c0f4;
	}
`

const About_content = styled.div`
  font-family: "Motiva Sans", Sans-serif;
  color: #acb2b8;
  font-size: 14px;
  line-height: 1.5em;
  font-weight: normal;
`


const About = (props) => (

	<div>
		<Main_col>
			<Category_header>
				<Spacer>REVIEWS</Spacer>
			</Category_header>
			<Rev_highlight_content>“A modern multiplayer masterpiece.”<br />
			9.5/10 – <Rev_link>Destructoid</Rev_link>
			<br />
			<br />
			“Once you start to learn its secrets, there’s a wild and exciting variety of play here that’s unmatched, even by its peers.”<br />
			9.4/10 – <Rev_link>IGN</Rev_link>
			<br />
			<br />
			“Dota 2 is possibly the only competitive free-to-play game that is totally uncompromised by its business model.”<br />
			90/100 – <Rev_link>PC Gamer</Rev_link>
			</Rev_highlight_content>
		</Main_col>		
		<Main_col>
			<Category_header>
				<Spacer>ABOUT THIS GAME</Spacer>
			</Category_header>
			<Spacer></Spacer>
			<About_content>
				
					<strong>The most-played game on Steam.</strong><br />
			Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has truly taken on a life of its own.<br />
			<br />
			<strong>One Battlefield. Infinite Possibilities.</strong><br />
			When it comes to diversity of heroes, abilities, and powerful items, Dota boasts an endless array—no two games are the same. Any hero can fill multiple roles, and there's an abundance of items to help meet the needs of each game. Dota doesn't provide limitations on how to play, it empowers you to express your own style.<br />
			<br />
			<strong>All heroes are free.</strong><br />
			Competitive balance is Dota's crown jewel, and to ensure everyone is playing on an even field, the core content of the game—like the vast pool of heroes—is available to all players. Fans can collect cosmetics for heroes and fun add-ons for the world they inhabit, but everything you need to play is already included before you join your first match.<br />
			<br />
			<strong>br /ing your friends and party up.</strong><br />
			Dota is deep, and constantly evolving, but it's never too late to join.<br />
			Learn the ropes playing co-op vs. bots. Sharpen your skills in the hero demo mode. Jump into the behavior- and skill-based matchmaking system that ensures you'll<br />
			be matched with the right players each game.<br />
				
			</About_content>
		</Main_col>
	</div>
)

export default About;
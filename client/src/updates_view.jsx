import React from 'react';
import Update from './update.jsx';
const styled = window.styled
import UpdatesModalAll from './updates_all.jsx';

const Background = styled.div`
	font-family: "Motiva Sans", Sans-Serif;
	background-color: #1b2838;
	width: 616px;
	height: 262.4px;
	color: white;
	display: inline-block;
`

const Header = styled.div`
	background-image: url(https://steamstore-a.akamaihd.net/public/images/v6/maincol_gradient_rule.png);
	background-repeat: no-repeat;
	background-position: bottom left;
	padding-top: 2px;
	margin-bottom: 10px;
	height: 25.6px;
	font-size: 14px;
	color: white;
	letter-spacing: 2px;
	line-height: 26px;
`

const Button = styled.button`
	border: 1px solid rgba(255, 255, 255, 0.4);
	border-radius: 2px;
	font-size: 11px;
	color: white;
	background-color: transparent;
	float: right;
	padding: 2px 15px;
	margin-right: 2px;
	&:hover {
		border: 1px solid white;
	}
`

const Update_divider = styled.div`
	width: 5%;
	font-size: 14px;
	height: 190px;
	display: inline-block;
`

const View = (props) => (

	<div className="view">
		<Background>
			<UpdatesModalAll state={props.state} updates={props.updates} persisModal={props.persisModal} hideModal={props.toggleModal} />
			<Header>
				RECENT UPDATES
				<Button onClick={props.toggleModal}>
					View all ({props.updates.length})
				</Button>
			</Header>
			<Update story={props.updates[0]} />
			<Update_divider />
			<Update story={props.updates[1]} />
		</Background>
	</div>

)

export default View;
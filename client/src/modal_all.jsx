// ok this is the modal component for each story
// jk the state will be on app but changed via clicks on the modal and on the parent
import React from 'react';
const styled = window.styled

const Img = styled.img`
	width: 98%;
	margin: 10px auto;
	display: block;
`

const Title = styled.div`
	color: #66C0F4;
	font-family: "Motiva Sans", Sans-Serif;
	font-size: 28px;
	text-align: left;
	margin: 5px;
`

const Date = styled.div`
	font-size: 10px;
	color: white;
	text-transform: uppercase;
	display: inline;
	text-align: left;
	margin: 5px;
`

const User = styled.div`
	color: #5d7489;
	font-size: 10px;
	text-align: left;
	display: inline;
	text-transform: uppercase;
	margin: 3px;
	&:hover {
		color: #66c0f4;
	}
`

const Text = styled.div`
	font-size: 14px;
	color: #acb2b8;
	line-height: 18px;
	margin: 3px 5px;
`

const Wrapper = styled.div`
	display: block;
`

const Modal = (props) => {

	if (props.story === null) {
		return null;
	}

	return (

		<Wrapper>
			<Title>{props.story.title}</Title>
			<Date>{props.story.post_date} - </Date><User>{props.story.posted_by}</User>
			<Img src={props.story.img} />
			<Text>{props.story.text}</Text>
		</Wrapper>

	)
}

export default Modal;
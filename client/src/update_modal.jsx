// ok this is the modal component for each story
// jk the state will be on app but changed via clicks on the modal and on the parent
import React from 'react';
const styled = window.styled

const Overlay = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index: 1000;
	background-color: rgba(0, 0, 0, .65);
`

const Content = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 10000;
	overflow: auto;
	text-align: center;
`

const Modal = styled.div`
	position: relative;
	outline: 0;
	width: 75%;
	max-width: 600px;
	display: inline-block;
	box-sizing: border-box;
	background-color: #1b2838;
	border: 1px solid #1b2838;
	border-radius: 5px;
	margin-top: 80px;
	text-align: left;
`

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

const UpdateModal = (props) => {

	if (!props.state.modalToggle) {
		return null;
	} 


	return (

		<Overlay>
			<Content onClick={props.hideModal}>
				<Modal onClick={(e) => e.stopPropagation()}>
					<Title>{props.story.title}</Title>
					<Date>{props.story.post_date} - </Date><User>{props.story.posted_by}</User>
					<Img src={props.story.img} />
					<Text>{props.story.text}</Text>
				</Modal>
			</Content>
		</Overlay>

	)
}

export default UpdateModal;
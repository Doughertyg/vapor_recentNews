import React from 'react';
const styled = window.styled

const Button = styled.div`
	border-radius: 2px;
	border: none;
	display: inline-block;
	color: #D2E885;
	font-size: 15px;
	height: 32px;
	margin-left: 2px;
	line-height: 30px;
	padding: 0 15px;
	background: linear-gradient( to bottom, rgba(121,153,5,1) 5%, rgba(83,105,4,1) 95%);
	&:hover {
		color: #ffffff;
		background: linear-gradient( to bottom, rgba(164,208,7,1) 5%, rgba(107,135,5,1) 95%);
	}
`

const ButtonWrapper = styled.div`
	height: 32px;
	border-radius: 2px;
	display: inline-block;
	background-color: #000000;
	position: relative;
	bottom: 14px;
	padding-top: 1.5px;
	padding-right: 2.4px;
	padding-bottom: 2px;
	left: 395px;
	vertical-align: middle;
`

const ButtonText = styled.div`
	padding-left: 12px;
	padding-right: 12px;
	font-size: 13px;
	margin-left: 2px;
	display: inline-block;
	color: #c6d4df;
`

const PurchaseButton = (props) => (

	<div>
		<ButtonWrapper>
			<ButtonText>
			Free to Play
			</ButtonText>
			<Button>Play Game</Button>
		</ButtonWrapper>
	</div>

)

export default PurchaseButton;
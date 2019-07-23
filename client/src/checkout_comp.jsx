import React from 'react';
const styled = window.styled
import Platforms from './platforms_comp.jsx';
import PurchaseButton from './purchase_btn.jsx';

const Background = styled.div`
	background-color: #1b2838; 
	font-family: "Motiva Sans", Sans-Serif;
	width: 616px;
	color: white;
	height: 94.8px;
`

const Checkout_div = styled.div`
	width: 616px;
	height: 66.8px;
	Background: linear-gradient(135deg, rgba(97, 100, 101, 0.3) 0%, rgba(226, 244, 255, 0.3) 100%);
	margin-bottom: 28px;
`

const Title_co = styled.div`
	font-size: 21px;
	color: white;
	padding: 16px;
	padding-bottom: 26px;
	display: inline-block;
`

const Divider = styled.div`
	font-size: 12px;
	width: 1px;
	border-left: 1px solid #CCC;
	display: inline-block;
	height: 20px;
	float: right;
`

class Checkout extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			checkoutModal: false
		}
	}


	render() {

		return (

			<div className="component-wrapper">
				<Background>
					<Checkout_div>
						<Title_co>Play {this.props.title.title}</Title_co>
						<Platforms platfrms={this.props.platforms} vr={this.props.vr}/>
						<PurchaseButton />
					</Checkout_div>
				</Background>
			</div>


		)


	}
}

export default Checkout;
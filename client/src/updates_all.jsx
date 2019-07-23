// ok this is the modal component for each story
// jk the state will be on app but changed via clicks on the modal and on the parent
import React from 'react';
const styled = window.styled
import UpdateModal from './update_modal.jsx';
import Modal_all from './modal_all.jsx';
import Pages from './page_nav.jsx';

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
	max-width: 616px;
	display: inline-block;
	box-sizing: border-box;
	background-color: #1b2838;
	border: 1px solid #1b2838;
	border-radius: 5px;
	margin-top: 80px;
	text-align: left;
`

const Page_btn = styled.div`
	background-color: rgba( 103, 193, 245, 0.2 );
	border: 1px transparent;
	border-radius: 3px;
	padding: 0 16px;
	color: #66c0f4;
	height: 15px;
	line-height: 16px;
	margin: 4px 7px;
	display: inline-block;
	float: right;
	&:hover {
		background-color: #66c0f4;
		border-color: #66c0f4;
		color: white;
	}
`

const Page_nav = styled.div`
	font-size: 10px;
	color: #ebebeb;
	float: right;
	text-align: left;
	margin: 7px;
	display: inline-block;
	&:hover {
		text-decoration: underline;
	}
`

class UpdatesModalAll extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 1,
		}
	}

	handlePageChange(page, length) {
		console.log('clicked!');

		if (page > length / 5 || page < 1) {
			return;
		}

		this.setState({
			page: page
		})
	}

	// need this script to import modal component and return 5 here
	// pass in stories here to render
	// create state here that tracks length of array and paginates 
	//

	render() {

		if (!this.props.state.modalToggle) {
			return null;
		} 

		return (
			<div>
				<Overlay>
					<Content onClick={this.props.hideModal}>
					<Modal onClick={(e) => e.stopPropagation()}>
					<Pages updates={this.props.updates} page={this.state.page} handlePageChange={this.handlePageChange.bind(this)} />
							<Modal_all story={this.props.updates[(this.state.page - 1) * 5] ? this.props.updates[this.state.page] : null} /><br />
							<br />
							<Modal_all story={this.props.updates[((this.state.page - 1) * 5) + 1] ? this.props.updates[this.state.page + 1] : null} /><br />
							<br />
							<Modal_all story={this.props.updates[((this.state.page - 1) * 5) + 2] ? this.props.updates[this.state.page + 2] : null} /><br />
							<br />
							<Modal_all story={this.props.updates[((this.state.page - 1) * 5) + 3] ? this.props.updates[this.state.page + 3] : null} /><br />
							<br />
							<Modal_all story={this.props.updates[((this.state.page - 1) * 5) + 4] ? this.props.updates[this.state.page + 4] : null} />
					</Modal>
					</Content>
				</Overlay>
			</div>
		)
	}
}

export default UpdatesModalAll;
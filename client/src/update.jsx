import React from 'react';
const styled = window.styled
import Updatemodal from './update_modal.jsx';

const Post_date = styled.div`
	color: #56707F;
	font-size: 11px;
	letter-spacing: 2px;
	margin: 5px 0 0 0;
	line-height: 14px;
	padding-top: 2px;
` 

const Title = styled.div`
	color: white;
	font-size: 24px;
	line-height: 29px;
`

const Update_col = styled.div`
	width: 47%;
	display: inline-block;
`

const Update_container = styled.div`
	height: 195px;
	overflow: hidden;
`

const Img_style = styled.img`
	max-width: 100%;
`

const imgSwitch = (props) => {
	let toggle = Math.random();

	if (toggle > 0.5) {
		console.log(props.story.img);

		return props.story.img;
	} else {
		return "";
	}
}

const Comments = styled.div`
	float: right;
	color: #56707F;
	font-size: 11px;
	line-height: 18px;
`

const Read_more = styled.div`
	color: #67c1f5;
	font-size: 11px;
	display: inline-block;
	&:hover {
		color: white;
	}
`

const Spacer = styled.div`
	height: 1px;
	margin-top: 5px;
	margin-bottom: 5px;
	background-color: #2f4459;
`

const Text = styled.div`
	font-size: 13px;
	color: #8f98a0;
	line-height: 18px;
`

const Wrapper = styled.div`
	display: inline-block;
	background-color: #1b2838;
`

class Update extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			modalToggle: false
		}
	}

	toggleModal() {

		this.setState({
			modalToggle: !this.state.modalToggle
		})
	}

	persistModal(e) {

		e.stopPropogation();
	}

	render() {

		return (

		
			<Update_col>
				<Updatemodal story={this.props.story} state={this.state} persistModal={this.persistModal.bind(this)} hideModal={this.toggleModal.bind(this)} />
				<Update_container>
					<Post_date>
						<span>{this.props.story.post_date}</span>
					</Post_date>
					<Title>
						<span>{this.props.story.title}</span>
					</Title>
					<Img_style src={imgSwitch(this.props)} />
					<Text>
						<br />
					{this.props.story.text}
					</Text>
				</Update_container>
				<Spacer />
				<Read_more>
					<a onClick={this.toggleModal.bind(this)}>READ MORE</a>
				</Read_more>
				<Comments>
					<span onClick={()=>console.log('do something')}>{this.props.story.comment_count} comments</span>
				</Comments>
			</Update_col>
		

		)
	}
}

export default Update;
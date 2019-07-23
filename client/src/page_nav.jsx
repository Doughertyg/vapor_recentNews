import React from 'react';
const styled = window.styled

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

const Page_current = styled.div`
	font-size: 10px;
	color: #747474;
	float: right;
	text-align: left;
	margin: 7px;
	display: inline-block;
	&:hover {
		text-decoration: underline;
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

const First = (props) => {
	if(props.page === 1) {
		return null;
	} else {
		return <Page_nav onClick={props.onClick}>1 </Page_nav>
	} 
}

const PageNumsMax = (props) => {
	if((props.page + props.index) < props.updates.length / 5) {
		return <div><Page_nav onClick={props.onClick}>{props.page + props.index}</Page_nav></div>
	} else {
		return null;
	}
}

const ElipsesMax = (props) => {
	if((props.page + props.index) < props.updates.length / 5) {
		return <Page_nav> ... </Page_nav>;
	} else {
		return null;
	}
}

const PageNums = (props) => {
	if(props.page - props.index > 1) {
		return <Page_nav onClick={props.onClick}>{props.page - props.index} </Page_nav>;
	} else {
		return null;
	} 
}

const Elipses = (props) => {
	if(props.page - props.index > 1) {
		return <Page_nav> ... </Page_nav>;
	} else {
		return null;
	}
}

const Wrapper = styled.div`
	display: block;
`

const Pages = (props) => (

	<Wrapper>
		<Page_btn onClick={() => props.handlePageChange(props.page + 1, props.updates.length)}> > </Page_btn>
		<Page_nav onClick={() => (props.handlePageChange(props.updates.length / 5))} >{props.page === props.updates.length / 5 ? null : props.updates.length / 5}</Page_nav>
		<ElipsesMax page={props.page} index={3} updates={props.updates} />
		<PageNumsMax page={props.page} index={2} updates={props.updates} onClick={() => (props.handlePageChange(props.page + 2))} />
		<PageNumsMax page={props.page} index={1} updates={props.updates} onClick={() => (props.handlePageChange(props.page + 1))} />
		<Page_current>{props.page}</Page_current>
		<PageNums page={props.page} index={1} onClick={() => (props.handlePageChange(props.page - 1))} />
		<PageNums page={props.page} index={2} onClick={() => (props.handlePageChange(props.page - 2))} />
		<Elipses page={props.page} index={3} onClick={() => (props.handlePageChange(props.page - 3))} />
		<First page={props.page} onClick={() => (props.handlePageChange(1))} />
		<Page_btn onClick={() => props.handlePageChange(props.page - 1, props.updates.length)}> &lt; </Page_btn>
	</Wrapper>


)

export default Pages; 
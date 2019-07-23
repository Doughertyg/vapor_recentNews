import React from 'react';
const styled = window.styled

const PlatformStyle = styled.div`
	float: right;
	display: inline-block;
	padding: 16px;
`

const Divider = styled.div`
	width: 1px;
	border-left: 1px solid #CCC;
	height: 20px;
	margin: 0 5px;
	display: inline-block;
`

const Platform_icons = styled.div`
	width: 20px;
	height: 20px;
	display: inline-block;
	background-image: ${(props) => {
			if (props.idprop === 'steam') {
				return 'url(https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_linux.png)';
			}
			if (props.idprop === 'windows') {
				return 'url(https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_win.png?v=3)';
			}
			if (props.idprop === 'mac') {
				return 'url(https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_mac.png)';
			}
			if (props.idprop === 'vive') {
				return 'url(https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_htcvive.png)';
			}
			if (props.idprop === 'rift') {
				return 'url(https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_oculusrift.png)';
			}
			if (props.idprop === 'windowsvr') {
				return 'url(https://steamstore-a.akamaihd.net/public/images/v6/icon_platform_windowsmr.png)';
			}
		}
	}
`

const Platforms = (props) => (

	<PlatformStyle>
		{props.platfrms.map((platform) => {
			return <Platform_icons idprop={platform} key={Math.random()} />
		})}
		<Divider />
		{props.vr.map((platform) => {
			return <Platform_icons idprop={platform} key={Math.random()} />
		})}
	</PlatformStyle>

);

export default Platforms;
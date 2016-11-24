import transitions from 'material-ui/styles/transitions';

const backdropSize = 1600 * 3;

export default ({ baseTheme }) => {
	return {
		main: {
			position: 'fixed',
			width: '100%',
			left: 0,
		},
		maintop: {
			top: 0,
		},
		mainbottom: {
			bottom: 0,
		},
		backdropWrap: {
			position: 'fixed',
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			top: 0,
		},
		backdropWrapInvisible: {
			position: 'fixed',
			width: 0,
			height: 0,
			overflow: 'hidden',
			top: 0,
		},
		backdrop: {
			position: 'absolute',
			backgroundColor: baseTheme.palette.borderColor,
			display: 'block',
			borderRadius: '50%',
			transition: transitions.easeOut(),
			width: backdropSize,
			height: backdropSize,
			bottom: -(backdropSize / 2 - 8),
			right: -(backdropSize / 2 - 8),
			opacity: 0.8,
		},
		backdropInvisible: {
			width: 0,
			height: 0,
			bottom: 16,
			right: 16,
			opacity: 0,
		},
		btnWrap: {
			position: 'absolute',
		},
		btnWrapbottom: {
			bottom: 16,
		},
		btnWraptop: {
			top: 16,
		},
		btnWrapleft: {
			left: 16,
		},
		btnWrapright: {
			right: 16,
		},
		iconClosedInvisible: {
			position: 'absolute',
			transform: 'rotate(90deg)',
			opacity: 0,
		},
		iconClosed: {
			position: 'absolute',
			transform: 'rotate(0deg)',
			opacity: 1,
		},
		iconOpenInvisible: {
			transform: 'rotate(-90deg)',
			opacity: 0,
		},
		iconOpen: {
			transform: 'rotate(0deg)',
			opacity: 1,
		},
		primaryText: {
			position: 'absolute',
			bottom: 10,
			margin: 0,
			transition: transitions.easeOut(),
		},
		primaryTexttrue: {
			opacity: 1,
		},
		primaryTextfalse: {
			opacity: 0,
		},
		primaryTextleft: {
			left: 33,
		},
		primaryTextright: {
			right: 49,
		},
	};
};

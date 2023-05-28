import { makeStyles } from '@material-ui/core';

// Custom style with makeStyles fun
const useStyles = makeStyles({
	mainNavbar: {
		backgroundColor: '#203040',
		'& a': {
			color: '#fff',
			marginLeft: 10,
		},
	},
	navbar: {
		marginLeft: 'auto',
	},
	heading: {
		textAlign: 'center',
	},
	main: {
		minHeight: '80vh',
		marginBottom: '6rem',
	},
	footer: {
		textAlign: 'center',
		marginBottom: '3rem',
	},
	proLabel: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	addBtn: {
		margin: 'auto',
	},
});

export default useStyles;

/*
Note useStyle is a variable name used to store 
the content of makeStyles fun from material UI

'export default const useStyle' will throw error,
bcos that works for functiona export only
*/

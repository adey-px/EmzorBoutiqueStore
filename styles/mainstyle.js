import { makeStyles } from '@material-ui/core';

// Custom style with makeStyles fun
const useStyle = makeStyles({
	navbar: {
		backgroundColor: '#203040',
		'& a': {
			color: '#fff',
			marginLeft: 10,
		},
	},
	main: {
		minHeight: '80vh',
	},
	footer: {
		textAlign: 'center',
	},
});

export default useStyle;

/*
Note useStyle is a variable name used to store 
the content of makeStyles fun from material UI

'export default const useStyle' will throw error,
bcos that works for functiona export only
*/

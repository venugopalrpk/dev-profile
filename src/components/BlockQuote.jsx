import { makeStyles } from '@mui/styles';
import { Box, useMediaQuery } from '@mui/material';

const useStyles = makeStyles((theme) => ({
	blockquote: {
		position: 'relative',

		padding: '1rem',
		borderLeft: `4px solid ${theme.palette.primary.main}`,
		backgroundColor: '#f5f5f5',
		color: theme.palette.text.main,
		fontStyle: 'italic',
		fontSize: '18px',
	},
	citation: {
		marginTop: '0.5rem',
		color: theme.palette.secondary.main,
	},
}));

const Blockquote = ({ quote }) => {
	const isMobile = useMediaQuery('(max-width:600px)');

	const classes = useStyles();

	return (
		<Box padding={isMobile ? '10px' : '50px'}>
			<blockquote className={classes.blockquote}>{quote}</blockquote>
		</Box>
	);
};

export default Blockquote;

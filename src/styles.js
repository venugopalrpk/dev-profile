import { makeStyles } from '@mui/styles';
import { createTheme } from '@mui/material/styles';

// Create your custom theme
export const theme = createTheme({
	components: {
		MuiLink: {
			styleOverrides: {
				root: {
					// Add your custom styles here
					color: 'inherit',
					textDecoration: 'none',
				},
			},
		},
	},
	palette: {
		primary: {
			main: '#138C50', // Specify your primary color
		},
		secondary: {
			main: '#a6a6a6', // Specify your secondary color
		},
		text: {
			primary: '#383838', // Default text color
			secondary: '#666666', // Secondary text color
		},
	},
});

export default makeStyles((theme) => ({
	'@import':
		"url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap')",
	'*': {
		margin: 0,
		padding: 0,
	},
	body: {
		fontFamily: '"Poppins", sans-serif',
	},
	html: {
		scrollBehavior: 'smooth',
	},
	p: {
		color: 'rgb(85, 85, 85)',
	},
	a: {
		transition: 'all 300ms ease',
		color: 'black',
		textDecoration: 'none',
		textDecorationColor: 'white',
		'&:hover': {
			color: 'grey',
			textDecoration: 'underline',
			textUnderlineOffset: '1rem',
			textDecorationColor: 'rgb(181, 181, 181)',
		},
	},
	logo: {
		fontSize: '2rem',
		'&:hover': {
			cursor: 'default',
		},
	},
	hamburgerMenu: {
		display: 'none',
	},
	hamburgerIcon: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		height: '24px',
		width: '30px',
		cursor: 'pointer',
		'& span': {
			width: '100%',
			height: '2px',
			backgroundColor: 'black',
			transition: 'all 0.3s ease-in-out',
		},
	},
	menuLinks: {
		position: 'absolute',
		top: '100%',
		right: 0,
		backgroundColor: 'white',
		width: 'fit-content',
		maxHeight: 0,
		overflow: 'hidden',
		transition: 'all 0.3s ease-in-out',
	},
	menuLinksOpen: {
		maxHeight: '300px',
	},
	menuLinksA: {
		display: 'block',
		padding: '10px',
		textAlign: 'center',
		fontSize: '1.5rem',
		color: 'black',
		textDecoration: 'none',
		transition: 'all 0.3s ease-in-out',
	},
	menuLinksLi: {
		listStyle: 'none',
	},
	hamburgerIconOpen: {
		'& span:first-child': {
			transform: 'rotate(45deg) translate(10px, 5px)',
		},
		'& span:nth-child(2)': {
			opacity: 0,
		},
		'& span:last-child': {
			transform: 'rotate(-45deg) translate(10px, -5px)',
		},
	},
	section: {
		paddingTop: '4vh',
		height: '96vh',
		margin: '0 10rem',
		boxSizing: 'border-box',
		minHeight: 'fit-content',
		[theme.breakpoints.down('sm')]: {
			paddingTop: '2vh',
			margin: '0 24px',
		},
	},
	sectionContainer: {
		display: 'flex',
	},
	sectionPicContainer: {
		display: 'flex',
		height: '400px',
		width: '400px',
		margin: 'auto 0',
		borderRadius: '50px',
		[theme.breakpoints.down('sm')]: {
			height: '300px',
			width: '300px',
		},
	},
	sectionText: {
		alignSelf: 'center',
		textAlign: 'center',
	},
	sectionTextP1: {
		textAlign: 'center',
	},
	sectionTextP2: {
		fontSize: '1.75rem',
		marginBottom: '1rem',
	},
	title: {
		fontSize: '3rem',
		textAlign: 'center',
	},
	socialsContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '1rem',
		gap: '1rem',
	},
	icon: {
		cursor: 'pointer',
		height: '2rem',
	},
	btnContainer: {
		display: 'flex',
		justifyContent: 'center',
		gap: '1rem',
	},
	btn: {
		fontWeight: 600,
		transition: 'all 300ms ease',
		padding: '1rem',
		width: '8rem',
		borderRadius: '2rem',
		'&.btn-color-1, &.btn-color-2': {
			border: '0.1rem solid rgb(53, 53, 53)',
		},
		'&.btn-color-1:hover, &.btn-color-2:hover': {
			cursor: 'pointer',
		},
		'&.btn-color-1, &.btn-color-2:hover': {
			background: 'rgb(53, 53, 53)',
			color: 'white',
		},
		'&.btn-color-1:hover': {
			background: 'rgb(0, 0, 0)',
		},
		'&.btn-color-2': {
			background: 'none',
		},
		'&.btn-color-2:hover': {
			border: '0.1rem solid rgb(255, 255, 255)',
		},
		'&:hover': {
			cursor: 'pointer',
		},
	},
	aboutContainers: {
		gap: '2rem',
		marginBottom: '2rem',
		marginTop: '2rem',
	},
	aboutDetailsContainer: {
		justifyContent: 'center',
		flexDirection: 'column',
	},
	detailsContainer: {
		padding: '1.5rem',
		flex: 1,
		background: 'white',
		borderRadius: '2rem',
		border: '0.1rem solid rgb(53, 53, 53)',
		borderColor: 'rgb(163, 163, 163)',
		textAlign: 'center',
	},
	aboutPic: {
		borderRadius: '2rem',
	},
	arrow: {
		position: 'absolute',
		right: '-5rem',
		bottom: '2.5rem',
	},
	experienceSubTitle: {
		color: 'rgb(85, 85, 85)',
		fontWeight: 600,
		fontSize: '1.75rem',
		marginBottom: '2rem',
	},
	experienceDetailsContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
	},
	articleContainer: {
		display: 'flex',
		textAlign: 'initial',
		flexWrap: 'wrap',
		flexDirection: 'row',
		gap: '2.5rem',
		justifyContent: 'space-around',
	},
	article: {
		display: 'flex',
		width: '10rem',
		justifyContent: 'space-around',
		gap: '0.5rem',
		'& .icon': {
			cursor: 'default',
		},
	},
	projectsSection: {
		position: 'relative',
	},
	colorContainer: {
		borderColor: 'rgb(163, 163, 163)',
		background: 'rgb(250, 250, 250)',
	},
	projectImg: {
		borderRadius: '2rem',
		width: '90%',
		height: '90%',
	},
	projectTitle: {
		margin: '1rem',
		color: 'black',
	},
	projectBtn: {
		color: 'black',
		borderColor: 'rgb(163, 163, 163)',
	},
	contact: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		height: '70vh',
	},
	contactInfoUpperContainer: {
		display: 'flex',
		justifyContent: 'center',
		borderRadius: '2rem',
		border: '0.1rem solid rgb(53, 53, 53)',
		borderColor: 'rgb(163, 163, 163)',
		background: 'rgb(250, 250, 250)',
		margin: '2rem auto',
		padding: '0.5rem',
	},
	contactInfoContainer: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		gap: '0.5rem',
		margin: '1rem',
		'& p': {
			fontSize: 'larger',
		},
	},
	contactIcon: {
		cursor: 'default',
	},
	emailIcon: {
		height: '2.5rem',
	},
	footer: {
		height: '26vh',
		margin: '0 1rem',
	},
	footerP: {
		textAlign: 'center',
	},
}));

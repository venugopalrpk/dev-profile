import React from 'react';
import useStyles from '../styles';
import { Box, Button, Grid, Typography, useMediaQuery } from '@mui/material';

const ProfileSection = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<Grid
			id="about"
			className={classes.section}
			display="flex"
			justifyContent="center"
		>
			{/* <Box
				className={classes.sectionPicContainer}
				overflow={isMobile ? 'none' : 'clip'}
			>
				<img src={ProfilePic} alt="Venugopal profile picture" />
			</Box> */}
			<Box className={classes.sectionText}>
				<Typography
					sx={{ textAlign: 'center' }}
					fontWeight="bold"
					fontSize="18px"
					gutterBottom
				>
					Hello, I'm
				</Typography>
				<Typography
					variant="h1"
					fontWeight="bold"
					textAlign="center"
					fontSize="2.5rem"
					gutterBottom
				>
					Venugopal Kanakagiri
				</Typography>
				<Typography
					fontSize="1.75rem"
					textAlign="center"
					fontWeight="bold"
					color="text.secondary"
					gutterBottom
				>
					Frontend Developer
				</Typography>
				<div className={classes.btnContainer}>
					<Button
						variant="contained"
						sx={{ borderRadius: '50px', px: 4, py: 1.5 }}
					>
						<a
							href="https://drive.google.com/file/d/12Qlh8nHBsK4FZO45aM5Lxu3r8Pf2K37E/view?usp=drive_link"
							style={{ textDecoration: 'none', color: 'inherit' }}
						>
							Download CV
						</a>
					</Button>
				</div>
			</Box>
		</Grid>
	);
};

export default ProfileSection;

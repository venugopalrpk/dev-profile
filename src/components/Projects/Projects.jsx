import React from 'react';
import {
	Box,
	Button,
	Grid,
	Stack,
	Typography,
	useMediaQuery,
} from '@mui/material';

import enabler from '../../assets/enabler.png';
import logo from '../../assets/logo.png';
import kfi from '../../assets/kfi.jpg';

const Projects = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<Stack
			id="projects"
			display="flex"
			justifyContent="center"
			alignItems="center"
			margin={isMobile ? '70px 16px' : '150px auto'}
		>
			<Typography color="text.secondary" gutterBottom>
				Browser My Recent
			</Typography>
			<Typography
				fontSize="38px"
				color="text.primary"
				fontWeight="bold"
				gutterBottom
			>
				{' '}
				Projects
			</Typography>
			<Box margin="auto" padding="0px 10px">
				<Grid
					container
					sx={{ display: 'flex', justifyContent: 'center', gap: '40px' }}
				>
					<Grid
						item
						lg={4}
						sx={{
							border: '2px solid gray',
							borderRadius: '20px',
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							p: 3,
							justifyContent: 'center',
						}}
					>
						<Box
							minHeight={isMobile ? '100px' : '180px'}
							display="flex"
							alignItems="center"
						>
							<img src={enabler} style={{ marginBottom: '15px' }} />
						</Box>
						<Typography
							color="text.primary"
							fontSize="17px"
							textAlign="center"
							gutterBottom
						>
							A platform that enables your organisation become more resource
							efficient by providing you access to customized tools and curated
							content. This is a PWA, which has the best of both worlds.
						</Typography>
						<Button
							variant="contained"
							sx={{ borderRadius: '8px', textTransform: 'capitalize', mb: 2 }}
						>
							<a
								style={{ textDecoration: 'none', color: 'inherit' }}
								href="https://enabler.sustent.in"
								target="blank"
							>
								Live Site
							</a>
						</Button>
					</Grid>
					<Grid
						item
						lg={4}
						sx={{
							border: '2px solid gray',
							borderRadius: '20px',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							p: 3,
						}}
					>
						<Box
							sx={{ minHeight: '180px', display: 'flex', alignItems: 'center' }}
						>
							<img src={logo} width="70%" />
						</Box>
						<Typography
							color="text.primary"
							fontSize="17px"
							textAlign="center"
							gutterBottom
							sx={{ marginBottom: isMobile ? 2 : 8 }}
						>
							Our current company's live site, which have been revamped.
						</Typography>
						<Button
							variant="contained"
							sx={{ borderRadius: '8px', textTransform: 'capitalize', mb: 2 }}
						>
							<a
								style={{ textDecoration: 'none', color: 'inherit' }}
								href="https://airo-solutions.com/"
								target="blank"
							>
								Live Site
							</a>
						</Button>
					</Grid>
				</Grid>
			</Box>
			<Typography
				sx={{ mt: 4 }}
				fontSize="26px"
				color="text.primary"
				fontWeight="bold"
				gutterBottom
			>
				{' '}
				My Startup Project
			</Typography>
			<Stack
				style={{
					border: '1px solid gray',
					borderRadius: '13px',
				}}
				display="grid"
				padding={isMobile ? '10px 10px' : '10px 50px'}
				justifyContent="center"
				width={isMobile ? '95%' : '50%'}
			>
				<Box textAlign="center">
					<img
						src={kfi}
						width="70%"
						height="250px"
						style={{ borderRadius: '10px' }}
					/>
				</Box>
				<Typography
					color="text.primary"
					fontSize="17px"
					textAlign="center"
					gutterBottom
				>
					A website that contains all the movie information that you need about
					Kannada movies. Movieflix combines the desire to unleash powerful
					creativity with the industry's most advanced JavaScript tools
					including React.js, Redux toolkit and Material UI
				</Typography>
				<Button
					variant="contained"
					sx={{
						borderRadius: '8px',
						textTransform: 'capitalize',
						mb: 2,
						width: '100px',
						margin: 'auto',
						my: 3,
					}}
				>
					<a
						style={{ textDecoration: 'none', color: 'inherit' }}
						href="https://kannadamovieflix.netlify.app/"
						target="blank"
					>
						Live Site
					</a>
				</Button>
			</Stack>
		</Stack>
	);
};

export default Projects;

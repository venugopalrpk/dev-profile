import React from 'react';
import { Box, Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import education from '../../assets/education.png';
import experience from '../../assets/experience.png';
import Blockquote from '../BlockQuote';

const GetToKnow = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<Stack
			display="flex"
			justifyContent="center"
			alignItems="center"
			sx={{ mt: isMobile ? 8 : 4, mx: 2 }}
			id="experience"
		>
			<Typography color="text.secondary" gutterBottom>
				Get To Know More
			</Typography>
			<Typography
				fontSize="38px"
				color="text.primary"
				fontWeight="bold"
				gutterBottom
			>
				{' '}
				About Me
			</Typography>
			<Grid
				container
				display="flex"
				justifyContent="center"
				alignItems="center"
			>
				<Grid
					item
					sx={{
						borderColor: 'text.secondary',
						borderRadius: '10px',
						padding: '20px',
						backgroundColor: 'white',
						textAlign: 'center',
					}}
					style={{ backgroundColor: 'white', border: '2px solid gray' }}
					xs={12}
					md={4}
					mb={isMobile ? 2 : 0}
				>
					<img src={experience} height="50px" />
					<Typography fontWeight="bold" fontSize="23px" color="text.primary">
						Experience
					</Typography>
					<Typography fontSize="23px" color="text.secondary">
						2+ years
					</Typography>
					<Typography fontSize="23px" color="text.secondary">
						Frontend Development
					</Typography>
				</Grid>
				<Grid item xs={1}></Grid>
				<Grid
					item
					sx={{
						border: '2px solid gray',
						borderColor: 'text.secondary',
						borderRadius: '10px',
						padding: '20px 30px',
						backgroundColor: 'white',
						textAlign: 'center',
					}}
					xs={12}
					md={4}
				>
					<img src={education} height="50px" />
					<Typography fontWeight="bold" fontSize="23px" color="text.primary">
						Education
					</Typography>
					<Typography fontSize="23px" color="text.secondary">
						Bcom
					</Typography>
					<Typography fontSize="23px" color="text.secondary">
						MITS - Mysore, 2018
					</Typography>
				</Grid>
			</Grid>
			<Box sx={{ mt: 10 }} textAlign="center" width="100%">
				<Typography fontSize="20px" color="text.secondary">
					More about me and my thoughts on
				</Typography>
				<Typography fontSize="28px" fontWeight="bold" color="text.primary">
					Programming
				</Typography>
				<Blockquote
					quote={`When your passion becomes your work, there's no room for the word 'work' in your life.`}
				/>
				<Blockquote
					quote={`In Web development, everything becomes a heck of a lot simpler if you just keep an eye on where the request/control is.`}
				/>
			</Box>
		</Stack>
	);
};

export default GetToKnow;

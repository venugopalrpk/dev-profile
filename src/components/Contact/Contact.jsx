import { Stack, Typography, Box } from '@mui/material';
import React from 'react';
import { Email, Phone } from '@mui/icons-material';

const Contact = () => {
	return (
		<Stack
			id="contact"
			height="300px"
			backgroundColor="primary.main"
			display="flex"
			justifyContent="center"
		>
			<Box sx={{ textAlign: 'center', mb: 2 }}>
				<Box display="flex" alignItems="center" justifyContent="center">
					{' '}
					<Email fontSize="small" sx={{ mb: 0.8, mr: 1.5, color: 'white' }} />
					<Typography color="white" gutterBottom>
						Email
					</Typography>
				</Box>

				<Typography
					fontSize="22px"
					color="white"
					fontWeight="bold"
					gutterBottom
				>
					{' '}
					venugopalrpk304@gmail.com
				</Typography>
			</Box>
			<Box sx={{ textAlign: 'center' }}>
				<Box display="flex" alignItems="center" justifyContent="center">
					<Phone
						fontSize="small"
						sx={{ mb: 0.8, mr: 1, ml: 0.5, color: 'white' }}
					/>
					<Typography color="white" gutterBottom>
						Mobile
					</Typography>
				</Box>
				<Typography
					fontSize="22px"
					color="white"
					fontWeight="bold"
					gutterBottom
					sx={{ ml: 0.5 }}
				>
					{' '}
					7022690633
				</Typography>
			</Box>
		</Stack>
	);
};

export default Contact;

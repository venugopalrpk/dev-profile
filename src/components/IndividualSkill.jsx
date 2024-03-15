import React from 'react';
import checkMark from '../assets/checkmark.png';
import { Box, Typography, useMediaQuery } from '@mui/material';

const IndividualSkill = ({ skill, level }) => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<Box display="flex" gap="10px">
			<Box sx={{ mt: isMobile ? 0.1 : 0.7 }}>
				<img src={checkMark} height="25px" />
			</Box>
			<Box textAlign="start">
				<Typography
					fontWeight="bold"
					fontSize={isMobile ? '19px' : '23px'}
					color="text.primary"
				>
					{skill}
				</Typography>
				<Typography fontSize={isMobile ? '19px' : '23px'} color="text.primary">
					{level}
				</Typography>
			</Box>
		</Box>
	);
};

export default IndividualSkill;

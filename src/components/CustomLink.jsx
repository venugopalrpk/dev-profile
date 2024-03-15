import React from 'react';
import { styled } from '@mui/material';

const CustomLink = styled('a')({
	color: 'text.secondary',
	textDecoration: 'none',
	'&:hover': {
		fontWeight: '700',
		color: 'text.primary',
		textDecoration: 'underline',
	},
	// Add any other custom styles here
});

export default CustomLink;

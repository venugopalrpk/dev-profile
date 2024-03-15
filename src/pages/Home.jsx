import React from 'react';
import { Box, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import ProfileSection from '../components/Profile';
import GetToKnow from '../components/GettingToKnow/GetToKnow';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Contact from '../components/Contact/Contact';

const Home = () => {
	return (
		<Box sx={{ margin: 0, padding: 0 }}>
			<Navbar />
			<ProfileSection />

			<Skills />
			<Projects />
			<GetToKnow />
			<Contact />
		</Box>
	);
};

export default Home;

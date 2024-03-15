import React from 'react';
import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import IndividualSkill from '../IndividualSkill';
import { skillTypes, skills } from '../../utils/skills';

const Skills = () => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<Stack
			display="flex"
			justifyContent="center"
			alignItems="center"
			id="skills"
		>
			<Typography color="text.secondary" gutterBottom>
				Explore my
			</Typography>
			<Typography
				fontSize="43px"
				color="text.primary"
				fontWeight="bold"
				gutterBottom
			>
				{' '}
				Skillset
			</Typography>
			<Grid
				container
				sx={{ px: isMobile ? 2 : 20 }}
				display="flex"
				alignItems="start"
				justifyContent="center"
			>
				{skillTypes?.map((skilltype, index) => (
					<Grid
						item
						key={index}
						lg={index == 0 ? 6.03 : index == 1 ? 5.4 : 3.73}
						sx={{
							borderColor: 'text.secondary',
							borderRadius: '10px',
							padding: '20px',
							backgroundColor: 'white',
							textAlign: 'center',
							margin: '10px',
							// height: isMobile
							// 	? index == 0
							// 		? '400px'
							// 		: index > 0 && index < 2 && index !== 0
							// 		? '250px'
							// 		: '150px'
							// 	: index > 1
							// 	? '240px'
							// 	: '330px',
						}}
						xs={12}
						style={{ backgroundColor: 'white', border: '2px solid gray' }}
					>
						<Typography
							fontSize={isMobile ? '25px' : '30px'}
							color="text.primary"
							fontWeight="bold"
							gutterBottom
							textAlign="left"
							whiteSpace="nowrap"
						>
							{' '}
							{skilltype}
						</Typography>
						<Grid container item spacing={1}>
							{skills[index]?.map((skill, anotherIndex) => (
								<Grid item key={anotherIndex} xs={6} md={6} sx={{ mb: 1 }}>
									<IndividualSkill skill={skill.name} level={skill.level} />
								</Grid>
							))}
						</Grid>
					</Grid>
				))}
			</Grid>
		</Stack>
	);
};

export default Skills;

import React, { useState } from 'react';
import {
	AppBar,
	Box,
	Grid,
	Toolbar,
	Typography,
	IconButton,
	Drawer,
	useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from '../styles';
import CustomLink from './CustomLink';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');

	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const handleSidebarOpen = () => {
		setIsSidebarOpen(true);
	};

	const handleSidebarClose = () => {
		setIsSidebarOpen(false);
	};
	return (
		<AppBar
			position="static"
			style={{
				backgroundColor: 'white',

				height: isMobile ? '60px' : '100px',
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Toolbar
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					padding: isMobile ? '16px' : '100px',
				}}
			>
				{/* Sidebar */}
				{isMobile ? (
					<>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							width="100%"
						>
							<IconButton
								edge="start"
								color="primary"
								aria-label="menu"
								size="lg"
								onClick={handleSidebarOpen}
							>
								<MenuIcon sx={{ fontSize: '40px', marginTop: '10px' }} />
							</IconButton>
							{/* <Typography
								variant="h6"
								fontWeight="bold"
								color="text.primary"
								sx={{ mt: 1.7 }}
							>
								Venugopal Kanakagiri
							</Typography> */}
						</Box>

						<Drawer
							anchor="left"
							open={isSidebarOpen}
							onClose={handleSidebarClose}
						>
							<Box p={2}>
								<IconButton
									edge="end"
									color="inherit"
									aria-label="close"
									onClick={handleSidebarClose}
								>
									<CloseIcon />
								</IconButton>

								<Box
									display="flex"
									flexDirection="column"
									alignItems="center"
									gap="20px"
									width="200px"
								>
									<Typography fontSize="24px" onClick={handleSidebarClose}>
										{' '}
										<a
											href="#about"
											style={{ textDecoration: 'none', color: 'black' }}
										>
											About
										</a>
									</Typography>
									<Typography onClick={handleSidebarClose} fontSize="24px">
										<a
											href="#projects"
											style={{ textDecoration: 'none', color: 'black' }}
										>
											Projects
										</a>
									</Typography>
									<Typography onClick={handleSidebarClose} fontSize="24px">
										<a
											href="#experience"
											style={{ textDecoration: 'none', color: 'black' }}
										>
											Experience
										</a>
									</Typography>
									<Typography onClick={handleSidebarClose} fontSize="24px">
										<a
											href="#contact"
											style={{ textDecoration: 'none', color: 'black' }}
										>
											Contact
										</a>
									</Typography>
								</Box>
							</Box>
						</Drawer>
					</>
				) : (
					<Box
						display="flex"
						justifyContent="space-between"
						width="100%"
						alignItems="center"
					>
						<Box>
							<Typography
								variant="h6"
								fontSize="40px"
								fontWeight="bold"
								color="text.primary"
							>
								Venugopal Kanakagiri
							</Typography>
						</Box>
						<Box display="flex" gap="20px">
							<Typography fontSize="24px">
								{' '}
								<a
									href="#about"
									style={{
										textDecoration: 'none',
										color: 'darkgray',
									}}
								>
									About
								</a>
							</Typography>
							<Typography fontSize="24px">
								<a
									href="#projects"
									style={{ textDecoration: 'none', color: 'darkgray' }}
								>
									Projects
								</a>
							</Typography>
							<Typography fontSize="24px">
								<a
									href="#experience"
									style={{ textDecoration: 'none', color: 'darkgray' }}
								>
									Experience
								</a>
							</Typography>
							<Typography fontSize="24px">
								<a
									href="#contact"
									style={{ textDecoration: 'none', color: 'darkgray' }}
								>
									Contact
								</a>
							</Typography>
						</Box>
					</Box>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;

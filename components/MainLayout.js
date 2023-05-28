import React from 'react';
import Head from 'next/head';
import {
	AppBar,
	Container,
	Link,
	Icon,
	Toolbar,
	Typography,
} from '@material-ui/core';
import Image from 'next/image';
import useStyles from '../styles/mainstyle';

//
export default function MainLayout({ children }) {
	const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Emzor Boutique Store</title>
				<link href='/favicon.ico' />
			</Head>

			{/* body element, navbar */}
			<AppBar
				position='sticky'
				className={classes.mainNavbar}
			>
				<Toolbar>
					<Link href='/'>
						<Icon>
							<img
								src='/icons/emzor.svg'
								alt='main-logo'
							/>
						</Icon>
					</Link>
					<div className={classes.navbar}>
						<Link href='/cart'>Cart</Link>
						<Link href='/login'>Login</Link>
					</div>
				</Toolbar>
			</AppBar>

			{/* body element, main */}
			<Container className={classes.main}>{children}</Container>

			{/* body element, footer */}
			<footer className={classes.footer}>
				Powered by
				<a href=''>
					<span>
						<Image
							src='/icons/vercel.svg'
							alt='footer-logo'
							width={72}
							height={16}
						/>
					</span>
				</a>
				<Typography>@Copyright 2023 | All Rights Reserved.</Typography>
			</footer>
		</div>
	);
}

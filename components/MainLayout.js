import React from 'react';
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import Image from 'next/image';
import useStyle from '../styles/mainstyle';
import styles from '../styles/home.module.css';

//
export default function MainLayout({ children }) {
	const classes = useStyle();

	return (
		<div>
			<Head>
				<title>Emzor Boutique Store</title>
				<link href='/favicon.ico' />
			</Head>

			{/* body element, navbar */}
			<AppBar
				position='static'
				className={classes.navbar}
			>
				<Toolbar>
					<Typography>Emzor</Typography>
				</Toolbar>
			</AppBar>

			{/* body element, main */}
			<Container className={classes.main}>{children}</Container>

			{/* body element, footer */}
			<footer className={classes.footer}>
				Powered by
				<a href=''>
					<span className={styles.logo}>
						<Image
							src='/vercel.svg'
							alt='logo'
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

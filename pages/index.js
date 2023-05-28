import React from 'react';
import MainLayout from '../components/MainLayout';
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Grid,
	Link,
	Typography,
} from '@material-ui/core';
import DATA from '../datastore/data';
import useStyles from '../styles/mainstyle';

// Function logic for Home page render
export default function Home() {
	const classes = useStyles();

	return (
		<div>
			<MainLayout>
				<div>
					<h1 className={classes.heading}>All Products</h1>
					<Grid
						container
						spacing={3}
					>
						{DATA.products.map((product) => (
							<Grid
								item
								md={4}
								key={product.name}
							>
								<Card>
									<Link href={`/product/${product.slug}`}>
										<CardActionArea>
											<CardMedia
												component='img'
												title={product.name}
												image={product.image}
											/>
											<CardContent className={classes.proLabel}>
												<Typography>{product.name}</Typography>
												<Typography>${product.price}</Typography>
											</CardContent>
										</CardActionArea>
									</Link>

									<CardActions>
										<Button
											size='small'
											color='primary'
											className={classes.addBtn}
										>
											Add to Cart
										</Button>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</div>
			</MainLayout>
		</div>
	);
}

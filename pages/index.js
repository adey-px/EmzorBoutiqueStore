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
	Typography,
} from '@material-ui/core';
import DATA from '../datastore/data';

// Home page render
export default function Home() {
	return (
		<div>
			<MainLayout>
				<div>
					<h1>Products Gallery</h1>
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
									<CardActionArea>
										<CardMedia
											component='img'
											title={product.name}
											image={product.image}
										/>
										<CardContent>
											<Typography>{product.name}</Typography>
										</CardContent>
									</CardActionArea>

									<CardActions>
										<Typography>${product.price}</Typography>
										<Button
											size='small'
											color='primary'
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

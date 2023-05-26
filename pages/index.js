import React from 'react';
import MainLayout from '../components/MainLayout';

//
export default function Home() {
	return (
		<div>
			<MainLayout>
				<div>
					<h1>Welcome here...</h1>
					<ul>
						<li>Product 1</li>
						<li>Product 2</li>
						<li>Product 3</li>
					</ul>
				</div>
			</MainLayout>
		</div>
	);
}

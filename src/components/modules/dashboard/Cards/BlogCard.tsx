import { ActionIcon, Badge, Card, Grid } from '@mantine/core';
import { Edit, Trash } from 'tabler-icons-react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const BlogCard = (props) => {
	const navigate = useNavigate();
	function deleteImage(id) {
		axios
			.delete(`http://localhost:3000//${id}`)
			.then((response) => {
				console.log('data deleted successfully');
				// Do something after deleting the image, such as updating the UI
			})
			.catch((error) => {
				console.error('Error deleting data:', error);
				// Handle errors that occur while deleting the image
				console.error(id);
				// Handle errors that occur while deleting the image
			});
	}
	return (
		<Card p={'sm'}>
			<Grid p={0}>
				<Grid.Col span={4} p={0}>
					<img
						// src={props.data.coverImg}
						src={`url(${process.env.PUBLIC_URL + '/props.data.coverImg'})`}
						className={'w-full object-cover object-center rounded'}
						alt=""
						height={'100'}
					/>
				</Grid.Col>
				<Grid.Col span={8} className={'flex flex-col'} py={0} px={'xs'}>
					<div
						className={'flex-grow'}
						onClick={() => navigate('/dashboard/blog/' + props.data.id)}
					>
						<div className="font-bold two-line">{props.data.title}</div>
						<div className="two-line">{props.data.content}</div>
						<Badge>Category</Badge>
					</div>
					<div className="buttons flex justify-end">
						<ActionIcon>
							<Edit />
						</ActionIcon>
						<ActionIcon>
							<Trash onClick={() => deleteImage(props.data.id)} />
						</ActionIcon>
					</div>
				</Grid.Col>
			</Grid>
		</Card>
	);
};

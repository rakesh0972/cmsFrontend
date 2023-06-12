import { ActionIcon, Card, Grid } from '@mantine/core';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Edit, Trash } from 'tabler-icons-react';
import { EditMenu } from '../../../../pages/Dashboard/EditMenu';

export const MenuCard = (props) => {
	const navigate = useNavigate();

	const editHandler = (data: any) => {
		navigate(`/dashboard/edit-menu/${data.id}`);
	};

	function deleteImage(id) {
		axios
			.delete(`http://localhost:3001/menu/${id}`)
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
						src={`${process.env.REACT_APP_BASE_URL}/menus/${props.data.coverImg}`}
						className={'w-full object-cover object-center rounded'}
						alt=""
						height={'100'}
						width={'100px'}
					/>
				</Grid.Col>
				<Grid.Col span={8} className={'flex flex-col'} py={0} px={'xs'}>
					<div
						className={'flex-grow'}
						onClick={() => navigate('/dashboard/menu/' + props.data.id)}
					>
						<div className="font-bold two-line">{props.data.title}</div>
						<div className="two-line">{props.data.shortDescription}</div>
					</div>
					<div className="buttons flex justify-end">
						<ActionIcon>
							<Edit
								onClick={() => {
									editHandler(props.data);
								}}
							/>
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

// .patch("http://localhost:3000/menu",formData),

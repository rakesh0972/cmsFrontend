import { useState } from 'react';
import { MenuCard } from '../../components/modules/dashboard/Cards/MenuCard';
import axios from '../../plugins/axios';
import { EditMenu } from './EditMenu';
import { Text, Notification } from '@mantine/core';

export const AddMenu = () => {
	const [title, setTitle] = useState('');
	const [shortDescription, setShortDescription] = useState('');
	const [coverImg, setCoverImg] = useState('');
	const [notification, setNotification] = useState(false);

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			title: title,
			shortDescription: shortDescription,
			coverImg: coverImg,
		};

		await axios

			.post('http://localhost:3001/menu', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((response) => {
				setNotification(true);
			})
			.catch((error) => {
				console.error('Error submitting data:', error);
			});
		console.log('formData', formData);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleDescChange = (event) => {
		setShortDescription(event.target.value);
	};

	const handleImageChange = (event) => {
		setCoverImg(event.target.files[0]);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Title:</label>
					<input
						type="text"
						id="title"
						name="title"
						value={title}
						onChange={handleTitleChange}
					/>
				</div>
				<div>
					<label htmlFor="shortDescription">Short Description:</label>
					<input
						id="shortDescription"
						name="shortDescription"
						value={shortDescription}
						onChange={handleDescChange}
					></input>
				</div>

				<div>
					<label htmlFor="image">Image:</label>
					<input type="file" id="image-url" onChange={handleImageChange} />
				</div>

				<button type="submit">Submit</button>
			</form>
			{notification && (
				<Notification
					onClose={() => setNotification(false)}
					// icon={<IconCheck size="1.1rem" />}
					color="teal"

					// title="Teal notification"
					// transition="slide-left"
					// shadow="sm"
					// disallowCloseAfterDuration
					// autoClose
					// duration={3000}
				>
					<Text>Data successfully added</Text>
				</Notification>
			)}
		</>
	);
};

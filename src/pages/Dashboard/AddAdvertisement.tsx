import { NativeSelect, Select } from '@mantine/core';
import { useState } from 'react';
import axios from '../../plugins/axios';

export const AddAdvertisement = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [type, setType] = useState('');
	const [image, setImg] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = {
			blog: '1',
			title: title,
			description: description,
			type: type,
			image: image,
			order: 1,
		};

		await axios
			.post('http://localhost:3000/advertisement', formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			})
			.then((res) => {
				console.log('res', res);
				console.log('Image uploaded successfully');
			})
			.catch((err) => {
				console.log('err', err);
				console.error('Error uploading image', err);
			});
		console.log('formData', formData);
	};

	const handleTitleChange = (event) => {
		setTitle(event.target.value);
	};
	const handleLinkChange = (event) => {
		setType(event.target.value);
	};
	const handleDescChange = (event) => {
		setDescription(event.target.value);
	};

	const handleImageChange = (event) => {
		console.log(event.target.files[0]);
		setImg(event.target.files[0]);
	};

	return (
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

			<NativeSelect
				name="type"
				id="type"
				data={['LINK', 'QUOTE', 'INFO']}
				label="Select your favorite framework/library"
				description="This is anonymous"
				onChange={handleLinkChange}
				withAsterisk
			/>
			<div>
				<label htmlFor="description">Description:</label>
				<input
					id="description"
					name="description"
					value={description}
					onChange={handleDescChange}
				></input>
			</div>

			<div>
				<label htmlFor="image">Image:</label>
				<input type="file" id="image-url" onChange={handleImageChange} />
			</div>

			<button type="submit">Submit</button>
		</form>
	);
};

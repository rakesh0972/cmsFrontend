import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MenuCard } from '../../components/modules/dashboard/Cards/MenuCard';
import axios from '../../plugins/axios';

export const EditMenu = () => {
	const params = useParams();

	const [title, setTitle] = useState('');
	const [shortDescription, setShortDescription] = useState('');
	const [coverImg, setCoverImg] = useState('');
	// const [id, setId] = useState(7);

	const handleSubmit = async (event) => {
		event.preventDefault();

		// const formData = {
		// 	title: title,
		// 	shortDescription: shortDescription,
		// 	coverImg: coverImg,
		// 	id: 41,
		// };

		let form = { title, shortDescription, coverImg };
		await axios
			.post(`http://localhost:3000/menu/${params.id}`, form, {
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
	};
	// const getter = async () => {
	// 	let res = await axios.get(`http://localhost:3001/menu/show/${params.id}`);
	// 	setUpdate(res.data);
	// };

	// useEffect(() => {
	// 	getter();
	// }, [params.id]);

	// var data = JSON.stringify({
	// 	title: update.title,
	// 	shortDescription: update.shortDescription,
	// });

	// const data = JSON.stringify({
	// 	title: update.title,
	// 	shortDescription: update.shortDescription,
	// });

	// <MenuCard data={formData} />;
	// await axios
	// 	.put(`http://localhost:3000/menu/${params.id}`, update, {
	// 		headers: {
	// 			'Content-Type': 'multipart/form-data',
	// 		},
	// 	})
	// 	.then((res) => {
	// 		console.log('res', res);
	// 		console.log('Image uploaded successfully');
	// 	})
	// 	.catch((err) => {
	// 		console.log('err', err);
	// 		console.error('Error uploading image', err);
	// 	});

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
					//   value={props.data.shortDescription ?? shortDescription}
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
	);
};

/*
 * Copyright (c) 2023 Groupado.
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without modification, are not permitted.
 */

import {
	Button,
	Checkbox,
	Grid,
	Group,
	PasswordInput,
	TextInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDispatch } from 'react-redux';
import { authenticateUser } from '../../store/modules/auth/actions';
import { useState } from 'react';

export const LoginScreen = () => {
	const [loading, setLoading] = useState(false);
	const dispatch: any = useDispatch();
	const form = useForm({
		initialValues: {
			email: '',
			password: '',
		},
		validate: {
			email: (value) => !value && 'Username cannot be empty',
			password: (value) => !value && 'Password cannot be empty',
		},
	});

	const authenticate = async () => {
		setLoading(true);
		await dispatch(
			authenticateUser({
				email: form.values.email,
				password: form.values.password,
			})
		);
		setLoading(false);
	};
	return (
		<section className="h-screen overflow-hidden w-full">
			<Grid className={'h-full m-nonen de'} align={'center'}>
				<Grid.Col span={6} className={' flex justify-center items-center'}>
					{/* Arniko
					 */}
					<img src="https://www.arniko.edu.np/assets/section2.png"></img>
				</Grid.Col>
				<Grid.Col span={6} className={'flex justify-center items-center'}>
					<form className={'w-4/5'} onSubmit={form.onSubmit(authenticate)}>
						<div className="text-3xl mb-none font-bold text-primary-700">
							Login
						</div>
						<div className={'font-bold text-lg'}>
							Enter your details to login
						</div>
						<div className="my-lg">
							<TextInput
								withAsterisk
								label="Username"
								placeholder="Enter your username"
								{...form.getInputProps('email')}
							/>
							<PasswordInput
								withAsterisk
								label="Password"
								placeholder="Enter your password"
								{...form.getInputProps('password')}
								className={'mt-md'}
							/>

							{/*<Checkbox*/}
							{/*    mt="md"*/}
							{/*    label="I agree to sell my privacy"*/}
							{/*    {...form.getInputProps('termsOfService', { type: 'checkbox' })}*/}
							{/*/>*/}
							<div className="text-right mt-md text-lg text-primary-700 font-bold">
								Forgot Password?
							</div>
						</div>
						<Button
							type="submit"
							size={'lg'}
							className={'w-full'}
							loading={loading}
						>
							Login
						</Button>

						{/*<Group position="right" mt="md">*/}
						{/*</Group>*/}
					</form>
				</Grid.Col>
			</Grid>
		</section>
	);
};

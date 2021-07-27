import React from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';

import {
	FormWrapper,
	StyledForm
} from '../../../hoc/layout/elements/Container';
import Input from '../../../components/UI/Forms/Input/Input';
import Button from '../../../components/UI/Forms/Button/Button';
import Heading from '../../../components/UI/Forms/Headings/Heading';

const SignUpSchema = Yup.object().shape({
	firstName: Yup.string()
		.required('Your first name is required')
		.min(3, 'Too short.')
		.max(25, 'Too long.'),
	lastName: Yup.string()
		.required('Your Last name is required')
		.min(3, 'Too short.')
		.max(25, 'Too long.'),
	email: Yup.string()
		.email('Invalid email.')
		.required('The email is required.'),
	password: Yup.string().required('The passoword is required.'),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref('password'), null], `Password doesn't match`)
		.required('You need to confirm your password.')
});

const Login = () => {
	return (
		<Formik
			initialValues={{
				firstName: '',
				lastName: '',
				email: '',
				password: '',
				confirmPassword: ''
			}}
			validationSchema={SignUpSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
			}}
		>
			{({ isValid }) => (
				<FormWrapper>
					<Heading noMargin size="h1" color="white">
						Sign Up into your account
					</Heading>
					<Heading bold size="h4" color="white">
						Fill in your details to register your new account
					</Heading>
					<StyledForm>
						<Field
							type="text"
							name="firstName"
							placeholder="Your first name..."
							component={Input}
						/>
						<Field
							type="text"
							name="lastName"
							placeholder="Your last name..."
							component={Input}
						/>
						<Field
							type="email"
							name="email"
							placeholder="Your email..."
							component={Input}
						/>
						<Field
							type="password"
							name="password"
							placeholder="Your password..."
							component={Input}
						/>
						<Field
							type="password"
							name="confirmPassword"
							placeholder="Re-type your password..."
							component={Input}
						/>
						<Button disabled={!isValid} type="submit">
							Sign Up
						</Button>
					</StyledForm>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default Login;

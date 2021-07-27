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
	email: Yup.string()
		.email('Invalid email.')
		.required('The email is required.'),
	password: Yup.string().required('The passoword is required.')
});

const SignUp = () => {
	return (
		<Formik
			initialValues={{
				email: '',
				password: ''
			}}
			validationSchema={SignUpSchema}
			onSubmit={(values, { setSubmitting }) => {
				console.log(values);
			}}
		>
			{({ isValid }) => (
				<FormWrapper>
					<Heading noMargin size="h1" color="white">
						Sign up for an account
					</Heading>
					<Heading bold size="h4" color="white">
						Fill in your details to register your new account
					</Heading>
					<StyledForm>
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
						<Button disabled={!isValid} type="submit">
							Login
						</Button>
					</StyledForm>
				</FormWrapper>
			)}
		</Formik>
	);
};

export default SignUp;

import React, { useState } from 'react'
import SignInForm from "./components/sign-in form";
// import SignIn from './components/sign-in';


const initialFormValues = {
	username: '',
	phonenumber: '',
	password: '',
}

function App() {
	
	const [formValues, setFormValues] = useState(initialFormValues)

	const updateForm = (inputName, inputValue) => {
		setFormValues({...formValues, [inputName]: inputValue})
	}

	const inputChange = (name, value) => {
		setFormValues({
			...formValues, [name]: value
		})
	}

	const submitForm = () => {
		const user = {
		username: formValues.username,
		phonenumber: formValues.phonenumber,
		password: formValues.password,
		}
		console.log(user)
	}
	
	
	return (
	<div className='App'>
	<SignInForm
	 values={formValues}
	 update={updateForm}
	 submit={submitForm}
	 change={inputChange}
	
	/>
	</div>
	)
}

export default App;

import React, { useState } from 'react'
import "./common/signupForm.css";

// const initialFormValues = {
// 	username: '',
// 	phonenumber: '',
// 	password: '',
// }

// export default function SignInForm(props) {
// const {
//     values,
//     submit,
//     change,
//     // disabled,
//     errors,
// } = props

export default function SignInForm() {
const [userSignin, setUserSignin] = useState({
    username: '',
	phonenumber: '',
	password: '',
})

// const [formValues, setFormValues] = useState(initialFormValues)

const onSubmit = evt => {
    evt.preventDefault()
    const user = {
		username: userSignin.username,
		phonenumber: userSignin.phonenumber,
		password: userSignin.password,
		}
		console.log(user)
}

// const [open, setOpen] = useState(false)

// function toggle() {
//     setOpen(wasOpened => !wasOpened)
// }

const onChange = evt => {
    const { name, value } = evt.target
    console.log(evt.target)
    setUserSignin({ ...userSignin, [name]: value})
}



	const updateForm = (inputName, inputValue) => {
		setUserSignin({...userSignin, [inputName]: inputValue})
	}

	const inputChange = (name, value) => {
		setUserSignin({
			...userSignin, [name]: value
		})
	}

	// const submitForm = () => {
	// 	// const user = {
	// 	// username: userSignin.username,
	// 	// phonenumber: userSignin.phonenumber,
	// 	// password: userSignin.password,
	// 	// }
	// 	// console.log(user)
	// }


return (
    
    // <div><button onClick={toggle}>Sign In</button>{open && (
    <form className="form" id='signinform' onSubmit={onSubmit}>
        <h2>Sign In</h2>
        <div className="label-box">
            <h3>Username: </h3>
                <label>
                    <input
                    id="username-input"
                    type='text'
                    name='username'
                    onChange={onChange}
                    // value={values.name}
                    />
                </label>
        </div>

        <div className="label-box">
            <h3>Phone Number: </h3>
                <label>
                    <input
                    id='phonenumber-input'
                    type='text'
                    onChange={onChange}
                    // value={values.phonenumber}
                    />
                </label>
                </div>

        <div className="label-box">
            <h3>Password: </h3>
                <label>
                    <input
                    id='password-input'
                    type='password'
                    onChange={onChange}
                    // value={values.password}
                    />
                </label>
        </div>

        <div className="form-submit input">
            <button id='signup-button' name='submitBtn' type='submit' /*disabled={disabled}*/>Sign In</button>
        </div>
         
        {/* values={formValues}
      update={updateForm}
      submit={submitForm}
      change={inputChange} */}
         
    </form>
    // )} </div>
)

}

// function SignInInfo({details}) {
//     if(!details) {
//         return <h3>Please sign in</h3>
//     }

//     return (
//         <div className="signin-info container">
//             <p>{details.username}</p>
//             <p>{details.phonenumber}</p>
//             <p>{details.password}</p>
//         </div>
//     )
// }
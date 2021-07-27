import React from 'react'

export default function SignInForm(props) {
const {
    values,
    submit,
    change,
    disabled,
    errors,
} = props

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}

const onChange = evt => {
    const { name, value } = evt.target
    // const valueToUse = type === 'checkbox' ? checked : value
    console.log(evt.target)
    change(name, value)
}

return (
    <form className="form-container" id='signinform' onSubmit={onSubmit}>

        <div className="form-username input">
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

        <div className="form-phonenumber input">
            <h3>Phone Number: </h3>
                <label>
                    <input
                    id='phonenumber-input'
                    type='text'
                    onChange={onChange}
                    // value={values.phonenumber}
                    />
                </label>

        <div className="form-password input">
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
            <button id='signup-button' name='submitBtn' /*disabled={disabled}*/>Sign In</button>
        </div>
        </div>
    </form>
)

}

function SignInInfo({details}) {
    if(!details) {
        return <h3>Please sign in</h3>
    }

    return (
        <div className="signin-info container">
            <p>{details.username}</p>
            <p>{details.phonenumber}</p>
            <p>{details.password}</p>
        </div>
    )
}
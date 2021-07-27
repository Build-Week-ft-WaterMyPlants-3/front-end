import React from 'react'
import SignInForm from './sign-in form'
// import { useHistory } from 'react-router'


	

export default function SignIn() {
    // const history = useHistory()
    // const routeToSignIn = () => {
    //     console.log('clicked to sign up')
    //     history.push('/signin')
    

    return (
        <div className='home-wrapper'>
            <img
            className="home-img"
            src=''
            alt=''
            />
            <button>Sign In</button>
            <SignInForm 
            //  values={formValues}
            //  update={updateForm}
            //  submit={submitForm}
            //  change={inputChange}
            />
            </div>

    )


}
import React, { useState } from 'react'
import SignInForm from './sign-in form'
// import { useHistory } from 'react-router'


	

export default function SignIn() {
    // const history = useHistory()
    // const routeToSignIn = () => {
    //     console.log('clicked to sign up')
    //     history.push('/signin')
    // const [open, setOpen] = useState(false)

    // function toggle() {
    //     setOpen(wasOpened => !wasOpened)
    // }

    return (
        <div className='home-wrapper'>
            <img
            className="home-img"
            src=''
            alt=''
            />
            {/* <button onClick={toggle}>Sign In</button> */}
            <SignInForm />
            </div>

    )


}

import React from 'react';
import SignupForm from './components/common/signupForm';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import AuthotizedUser from './components/AuthotizedUser';
import PrivateRoute from './components/PrivateRoute';
import axiosWithAuth from './utils/axiosWithAuth';
import SignInForm from "./components/signinForm";




const UserHeader = () => {
	return (
		<div>
			<Link to='/protected'>
				<div>
					<h1>Welcome to Water My Plants!</h1>
				</div>
			</Link>
		</div>
	);
};

function App() {

	// const [formValues, setFormValues] = useState(initialFormValues)

	// const updateForm = (inputName, inputValue) => {
	// 	setFormValues({...formValues, [inputName]: inputValue})
	// }

	// const inputChange = (name, value) => {
	// 	setFormValues({
	// 		...formValues, [name]: value
	// 	})
	// }

	// const submitForm = () => {
	// 	const user = {
	// 	username: formValues.username,
	// 	phonenumber: formValues.phonenumber,
	// 	password: formValues.password,
	// 	}
	// 	console.log(user)
	// }

	const logout = () => {
		axiosWithAuth()
			.post('/logout')
			.then((res) => {
				localStorage.removeItem('token');
				localStorage.setItem('username');
				window.location.href = '/login';
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<Router>
			<div>
				<ul>
					<li>
						<Link to='/signupForm'>Sign Up</Link>
					</li>
					<li>
						<Link to='/signinForm'>Login</Link>
					</li>
					<li>
						<Link onClick={logout}>Logout</Link>
					</li>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						{localStorage.getItem('token') ? <UserHeader /> : <div></div>}
					</li>
				</ul>

				<Switch>
					<PrivateRoute exact path='/protected' component={AuthotizedUser} />

					<Route path='/signupForm' component={SignupForm} />
					<Route path='/signinForm' component={SignInForm} />
				</Switch>
			</div>
		</Router>
	);
// >>>>>>> main
}

export default App;

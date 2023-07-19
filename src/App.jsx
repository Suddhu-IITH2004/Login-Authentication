import auth from './firebase';
import './App.css';
import { useState } from 'react';

function App() {
	const [email, setemail] = useState('');
	const [password, setpassword] = useState('');
	const signup = () => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((userCredential) => {
				// send verification mail.
				userCredential.user.sendEmailVerification();
				auth.signOut();
				alert("Email sent");
			})
			.catch(alert);
	}


	return (
		<div className="App">
			<br /><br />
			<input type="email" placeholder="Email"
				onChange={(e) => { setemail(e.target.value) }}>
			</input>
			<br /><br />
			<input type="password" placeholder="password"
				onChange={(e) => { setpassword(e.target.value) }}>
			</input>
			<br /><br />
			<button onClick={signup}>Sign-in</button>
		</div>
	);
}

export default App;

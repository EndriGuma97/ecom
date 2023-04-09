import { useState } from 'react';

import { getUserDocFromAuth } from '../../utils/firebase/firebase.utils';

const defaultFormFieldsSignIn = {
    email: '',
    password: ''

}



const SignInForm = () => {
    const [formFieldsSignIn, setFormFieldsSignIn] = useState(defaultFormFieldsSignIn);
    const { email, password } = formFieldsSignIn;

    console.log(formFieldsSignIn)

    const handleSubmitSignIn = async (event) => {
        event.preventDefault();
        const responseSignIn = await getUserDocFromAuth(email, password)
        console.log(responseSignIn)

    }

    const handleChangeSignIn = (event) => {
        const {name, value } = event.target;

        setFormFieldsSignIn({ ...formFieldsSignIn, [name]: value })
    }

    return (
        <div>
            <h1>Sign in with your email and password</h1>
            <form onSubmitCapture={handleSubmitSignIn}>
                <label>email</label>
                <input type="email" required onChange={handleChangeSignIn} name="email" value={email}/>
                <label>password</label>
                <input type="password" required onChange={handleChangeSignIn} name="password" value={password}/>
                <button type="submit">SIGN IN</button>
            </form>
        </div>
    )
}

export default SignInForm;
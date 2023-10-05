import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [successfull, setSuccessful] = useState('')

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

   
    const handleRegister = e => {
        e.preventDefault()

        const email = e.target.email.value;
        // const firstName = e.target.firstName.value;
        // const lastName = e.target.lastName.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        

        setPasswordConfirm('')
        if (password !== confirmPassword) {
            setPasswordConfirm('Please type password correctly')
            return
        }
        createUser(email, confirmPassword)
            .then((result) => {
                
                setSuccessful(`Registered Successfully`)
                setFirstName('');
                setLastName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                console.log(result.user)

            })
            .catch(error => { console.log(error) })


    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className=" border-2 border-gray-300 rounded-sm bg-base-100 md:w-96  w-none mt-10 ">

                    <form className="card-body  space-y-7" onSubmit={handleRegister}>
                        <p className="text-xl font-bold">Create an account</p>
                        <div className="form-control">
                            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" placeholder="First Name" className="text-sm  outline-none border-b-2 placeholder-black border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" placeholder="Last Name" className="text-sm  outline-none border-b-2 placeholder-black border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder="Username or Email" className="text-sm  outline-none border-b-2 placeholder-black border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="Password" className="text-sm outline-none border-b-2 placeholder-black border-gray-300" required />
                        </div>
                        <div className="form-control">
                            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" name="confirmPassword" placeholder="Confirm Password" className="text-sm outline-none border-b-2 placeholder-black border-gray-300" required />
                        </div>
                        <div>
                            {passwordConfirm}
                            {successfull}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-warning normal-case rounded-sm" type="submit" value="Create an account" />
                        </div>
                        <div>
                            <p className="text-center">Already have an account <Link className="link link-warning" to={'/login'}>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Footer from '../components/Footer';
import Password from '../components/Password';
import TextField from '@mui/material/TextField';
interface SignupProps {
    createUser: (data: any) => Promise<void>;
}

const Signup: React.FC<SignupProps> = ({ createUser }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        password: '',
        repassword: '',
    });
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [error, setError] = useState<string | null>(null);

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.phone_number || !formData.password || !formData.repassword) {
            setError('Please fill in all fields.');
            return;
        }

        if (formData.password !== formData.repassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/users', formData);
            console.log(response.status)
            if (response.status === 201) {
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    password: '',
                    repassword: '',
                });
                setError(null);
            } else {
                setError('Failed to create user. Please try again.');
            }
        } catch (error) {
            console.error(error);
            setError('Internal Server Error. Please try again later.');
        }
    };

    return (
        <div>
            <Navbar />
            <div    className='flex flex-col'>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSignup} className='flex flex-col' >
                    <label htmlFor="name">Нэр</label>
                   
        <TextField sx={{width:'352px',backgroundColor:"#F7F7F8"}}      value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} id="outlined-basic" label="Нэрээ оруулна уу" variant="outlined"  />
               

                    <label htmlFor="email">И-мэйл</label>
        <TextField sx={{width:'352px',backgroundColor:"#F7F7F8"}}  type='email'    value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} id="outlined-basic" label="И-мэйл хаягаа оруулна уу" variant="outlined"  />

                  

                    <label htmlFor="phone_number">Утасны дугаар</label>
                    <input
                        type="text"
                        id="phone_number"
                        value={formData.phone_number}
                        onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
                    />
                    <label htmlFor="password">Нууц үг</label>
                    <Password  value={formData.password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, password: e.target.value })} />
                    <label htmlFor="repassword">Нууц үг давтах</label>
                    <Password value={formData.repassword} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, repassword: e.target.value })} />
                    <FormControlLabel control={<Checkbox />} label="Үйлчилгээний нөхцөл зөвшөөрөх" />
                    <button  type="submit">Sign Up</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Signup;

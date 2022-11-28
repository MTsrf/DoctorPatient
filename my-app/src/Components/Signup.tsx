import React from 'react'
import { Button, Input, RadioButton } from './StyledComponent'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form } from 'semantic-ui-react'


type FormValues = {
    role: string,
    name: string,
    phone_number: any,
    email: string,
    password: string,
}
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
    }
    return (
        <>
            <div>
                <div className='containerBox'>
                    <div className='login-section'>
                        <div>
                            <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>
                                Online Doctor <br /> Appointment Signup
                            </h1>
                        </div>
                        <div>

                            <div className='loginCard'>
                                <h1>REGISTRATIONS</h1>
                                <h5>Please Choose</h5>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <div>
                                        <p>Patient</p>
                                        <RadioButton
                                            type='radio'
                                            value='ROLE_USER'
                                            {
                                            ...register("role", { required: true })
                                            }
                                        />
                                        <p>Doctor</p>
                                        <RadioButton
                                            type='radio'
                                            value='ROLE_DOCTOR'
                                            {
                                            ...register("role", { required: true })
                                            } />
                                        {errors?.role && <p style={{ color: 'red', fontSize: "10px" }}>Role is required</p>}
                                    </div>
                                    <Input
                                        fontSize={'20px'}
                                        padding={'5px'}
                                        border={'2px solid black'}
                                        width={'300px'}
                                        placeholder="Full Name"
                                        type='text'
                                        {
                                        ...register("name", { required: true })
                                        }
                                    />
                                    {errors?.name && <p style={{ color: 'red', fontSize: "10px" }}>Name is required</p>}
                                    <Input
                                        fontSize={'20px'}
                                        padding={'5px'}
                                        border={'2px solid black'}
                                        width={'300px'}
                                        type='tel'
                                        placeholder='Phone Number'
                                        {
                                        ...register("phone_number", { required: true })
                                        }
                                    />
                                    {errors?.phone_number && <p style={{ color: 'red', fontSize: "10px" }}>Phone Number is required</p>}
                                    <Input
                                        fontSize={'20px'}
                                        padding={'5px'}
                                        border={'2px solid black'}
                                        width={'300px'}
                                        placeholder='Email Address'
                                        type='email'
                                        {...register("email",
                                            {
                                                required: true,
                                                pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                            })}
                                    />
                                    {errors?.email && <p style={{ color: 'red', fontSize: "10px" }}>Email address is required</p>}
                                    <Input
                                        fontSize={'20px'}
                                        padding={'5px'}
                                        border={'2px solid black'}
                                        width={'300px'}
                                        type='password'
                                        placeholder='Password'
                                        {
                                        ...register("password", { required: true })
                                        }
                                    />
                                    {errors?.password && <p style={{ color: 'red', fontSize: "10px" }}>Password is required</p>}
                                    <Button
                                        backgroundColor={'#1a237e'}
                                        clr={'white'}
                                        padding={'10px'}
                                        margin={'1px'}
                                        type='submit'
                                    >Submit</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup

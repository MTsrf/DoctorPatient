import React from 'react'
import { Button, Input } from './StyledComponent'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Form } from 'semantic-ui-react';

type formValues = {
    email: string,
    password: string,
}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<formValues>()
    const onSubmit: SubmitHandler<formValues> = (data) => {
        console.log(data)
    }
    return (
        <>
            <div>
                <div className='containerBox'>
                    <div className='login-section'>
                        <div>
                            <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>
                                Online Doctor <br /> Appointment Login
                            </h1>
                        </div>
                        <div>

                            <div className='loginCard'>
                                <h1>LOGIN</h1>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Input
                                        fontSize={'20px'}
                                        padding={'5px'}
                                        border={'2px solid black'}
                                        width={'300px'}
                                        type="email"
                                        placeholder='Email Address'
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
                                        type="password"
                                        placeholder='Password'
                                        {...register("password", {
                                            required: true,
                                        })}
                                    />
                                    {errors?.password && <p style={{ color: 'red', fontSize: "10px" }}>Password is required</p>}
                                    <Button
                                        backgroundColor={'#1a237e'}
                                        clr={'white'}
                                        padding={'10px'}
                                        margin={'1px'}
                                        type="submit"
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

export default Login

import React from 'react'
import { Button } from './StyledComponent'
import { useNavigate } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <div>
                <div className='containerBox'>
                    <div style={{ paddingTop: '100px' }}>
                        <h1 style={{ fontWeight: 'bold', fontSize: '50px' }}>
                            Online Doctor <br /> Appointment
                        </h1>
                        <Button
                            backgroundColor={'#1a237e'}
                            clr={'white'}
                            padding={'10px'}
                            margin={'1px'}
                            onClick={
                                () => {
                                    navigate("/booking")
                                }
                            }
                        >Please Book</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home

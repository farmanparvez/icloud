import logo from "../../assets/logo.svg"
import Form from "./Form"

export default function login() {
  return (
    <div className="flex justify-center items-center h-[93vh]">
      <div className="sm:w-[650px] w-[100%] mx-auto h-[600px] bg-white sm:rounded-[40px] shadow-2xl p-6">
        <div className="flex justify-center items-center w-[100%] h-[150px]">
          <img className="max-w-[100%] max-h-[100%]" src={logo} alt="" />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}

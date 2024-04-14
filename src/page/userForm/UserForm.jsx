import logo from "../../assets/logo.svg"
import Form from "./Form"

export default function UserForm() {
  return (
    <div className="flex justify-center items-center h-[93vh] mt-7">
      <div className="sm:w-[650px] w-[100%] mx-auto sm:h-[600px] bg-white sm:rounded-[40px] shadow-2xl p-6">
        <div className="flex justify-center items-center w-[100%] h-[80px]">
          <img className="max-w-[100%] max-h-[100%]" src={logo} alt="" />
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  )
}

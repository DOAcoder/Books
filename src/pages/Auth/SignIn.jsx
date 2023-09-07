import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import IMG from "../../assets/images/Signin.png";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../service/auth/useAuth";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", {email: values.username, password: values.password,});
    let user = {email: values.esername, password: values.password};
     useAuth.login(user).then((res) => {
       console.log(res);
        localStorage.setItem("token", res.data.token);
       toast.success('Success')
       if(res.data.status === 200 && localStorage.getItem("token")){
          navigate("/")
       }
       
     }).catch((err)=>{
        console.log(err);
        toast.error('Error:',err.message)
        localStorage.setItem("token","asdfg")
     })
   
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="grid grid-cols-2 items-center w-full mx-auto h-screen gap-x-[81px]">
        <div className="item bg-[#c9ac8c] h-full flex items-center justify-end me-4 ">
          <img src={IMG} alt="" />
        </div>
        <div className="item">
          <ToastContainer/>
          <h1 className="text-[24px] font-bold">KIRISH</h1>
          <h2 className=" my-8 text-sm font-sans">
            Siz ruyhatdan utgansizmi?{" "}
            <Link to="/signup" className="text-blue-400">
              Ruyhatdan utish
            </Link>
          </h2>
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Iltimos loginni kiriting",
                },
              ]}
            >
              <Input
                className=" rounded-lg py-2 boder-[#c8c8c8] "
                placeholder="Login"
              />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Iltimos porolni kiriting",
                },
              ]}
            >
              <Input.Password className="py-2 mt-4" placeholder="Parol" />
            </Form.Item>

            <Form.Item>
              <Button
                className=" mx-auto block bg-slate-700 text-white rounded-2xl w-full mt-4 hover:text-white"
                htmlType="submit"
              >
                Kirish
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};
export default SignIn;

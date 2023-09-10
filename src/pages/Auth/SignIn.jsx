import React from "react";
import { Button,Form, Input } from "antd";
import IMG from "../../assets/images/Signin.png";
import { Link, json, useNavigate } from "react-router-dom";
import useAuth from "../../service/auth/useAuth";
import { ToastContainer, toast } from "react-toastify";

const SignIn = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    const user = {emil: values.userrname, password: values.password}
   
    useAuth.login(user).then((res) => {

        localStorage.setItem("token", Date.now());
        localStorage.setItem("user", JSON.stringify(res.data.user))

       if(res.data.status === 200 && localStorage.getItem("token")){
          navigate("/")
       }
       toast.success("Success!");
       
     }).catch((err)=>{
        console.log(err);
        toast.error('Error:',err.message)
        
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
          <h1 className="text-[24px] font-bold font-['ArialBlack]">KIRISH</h1>
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
              <Input.Password className="py-2 mt-4 outline-none" placeholder="Parol" />
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

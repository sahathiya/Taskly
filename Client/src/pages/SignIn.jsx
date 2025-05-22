import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ErrorMessage, Field, Form, Formik } from "formik";
import { LuUser } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import google from "../assets/png/google.png"
function SignIn() {
     const navigate=useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-poppins">
          <div className="w-full max-w-5xl flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden border border-gray-200">
           
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Sign In 
              </h2>
    
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  password: "",
                }}
                // validationSchema={validationSchema}
                // onSubmit={handleSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="w-full max-w-sm">
                    
                    <div className="mb-4">
                      <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                        <span className="mr-3 text-gray-400">
                          <HiOutlineMail />
                        </span>
                        <Field
                          type="email"
                          placeholder="Email"
                          name="email"
                          className="bg-transparent outline-none w-full"
                        />
                     
                      </div>
                         <ErrorMessage
                          name="email"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <div className="mb-6">
                      <div className="flex items-center bg-gray-100 rounded px-4 py-3">
                        <span className="mr-3 text-gray-400">
                          <GoLock />
                        </span>
                        <Field
                          type="password"
                          name="password"
                          placeholder="Password"
                          className="bg-transparent outline-none w-full"
                        />
                       
                      </div>
                       <ErrorMessage
                          name="password"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-white border border-primary text-primary py-3 rounded-full hover:bg-primary hover:text-white  transition"
                    >
                      Sign in
                    </button>
                
    <div className="flex items-center my-4">
      <hr className="flex-grow border-t border-gray-300" />
      <span className="mx-3 text-gray-500">or</span>
      <hr className="flex-grow border-t border-gray-300" />
    </div>
    <div className="flex items-center justify-center w-full bg-white border border-primary text-primary py-3 rounded-full transition hover:bg-gray-100 cursor-pointer">
      <img src={google} alt="Google" className="w-6 h-6 mr-2" />
      <button type="button" className="text-primary font-medium">
        Sign in with Google
      </button>
    </div>
    
                  </Form>
                )}
              </Formik>
            </div>

             <div className="w-full md:w-1/2 bg-primary text-white flex flex-col justify-center items-center p-10 relative">
              <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
              <p className="text-center mb-6">
                To keep connected with us please
                <br />
                login with your personal info
              </p>
              <button
                className="border border-white px-8 py-2 rounded-full hover:bg-white hover:text-[#004071] transition"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </button>
    
            
            </div>
    
          </div>
        </div>
  )
}

export default SignIn

import { React, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "../../styles/styles";
import { Link } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";

const Singup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(`${server}/user/create-user`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        setName("");
        setEmail("");
        setPassword("");
        setAvatar();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  return (
    //   <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    //     <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //       <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //         Register as a new user
    //       </h2>
    //     </div>
    //     <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //       <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //         <form className="space-y-6" onSubmit={handleSubmit}>
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Full Name
    //             </label>
    //             <div className="mt-1">
    //               <input
    //                 type="text"
    //                 name="text"
    //                 autoComplete="name"
    //                 required
    //                 value={name}
    //                 onChange={(e) => setName(e.target.value)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Email address
    //             </label>
    //             <div className="mt-1">
    //               <input
    //                 type="email"
    //                 name="email"
    //                 autoComplete="email"
    //                 required
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //             </div>
    //           </div>

    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block text-sm font-medium text-gray-700"
    //             >
    //               Password
    //             </label>
    //             <div className="mt-1 relative">
    //               <input
    //                 type={visible ? "text" : "password"}
    //                 name="password"
    //                 autoComplete="current-password"
    //                 required
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    //               />
    //               {visible ? (
    //                 <AiOutlineEye
    //                   className="absolute right-2 top-2 cursor-pointer"
    //                   size={25}
    //                   onClick={() => setVisible(false)}
    //                 />
    //               ) : (
    //                 <AiOutlineEyeInvisible
    //                   className="absolute right-2 top-2 cursor-pointer"
    //                   size={25}
    //                   onClick={() => setVisible(true)}
    //                 />
    //               )}
    //             </div>
    //           </div>

    //           <div>
    //             <label
    //               htmlFor="avatar"
    //               className="block text-sm font-medium text-gray-700"
    //             ></label>
    //             <div className="mt-2 flex items-center">
    //               <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
    //                 {avatar ? (
    //                   <img
    //                     src={URL.createObjectURL(avatar)}
    //                     alt="avatar"
    //                     className="h-full w-full object-cover rounded-full"
    //                   />
    //                 ) : (
    //                   <RxAvatar className="h-8 w-8" />
    //                 )}
    //               </span>
    //               <label
    //                 htmlFor="file-input"
    //                 className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
    //               >
    //                 <span>Upload a file</span>
    //                 <input
    //                   type="file"
    //                   name="avatar"
    //                   id="file-input"
    //                   accept=".jpg,.jpeg,.png"
    //                   onChange={handleFileInputChange}
    //                   className="sr-only"
    //                 />
    //               </label>
    //             </div>
    //           </div>

    //           <div>
    //             <button
    //               type="submit"
    //               className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
    //             >
    //               Submit
    //             </button>
    //           </div>
    //           <div className={`${styles.noramlFlex} w-full`}>
    //             <h4>Already have an account?</h4>
    //             <Link to="/login" className="text-blue-600 pl-2">
    //               Sign In
    //             </Link>
    //           </div>
    //         </form>
    //       </div>
    //     </div>
    // </div>

    <>
      {/* partial:index.partial.html */}
      <section className="bg-gray-50 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* image */}
          <div className="md:block hidden w-1/2">
            <img
              className="rounded-2xl"
              src="https://i.pinimg.com/originals/5c/87/7a/5c877a076e92fa20e3e909d834a4c79f.png"
            />
          </div>
          
          
          
          {/* form */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Register</h2>
            <p className="text-xs mt-4 text-[#002D74]">
              Become A Part Of Our Fashion World
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                className="p-2 mt-8 rounded-xl border"
                type="text"
                name="text"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
              />
              <input
                className="p-2  rounded-xl border"
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <div className="relative">
                <input
                  className="p-2 rounded-xl border w-full"
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                />
                {visible ? (
                  <AiOutlineEye
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    className="absolute right-2 top-2 cursor-pointer"
                    size={25}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
              <label
              htmlFor="avatar"
              className="block text-sm font-medium text-gray-700"
            ></label>
            <div className="mt-2 flex items-center">
              <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                
                {avatar ? (
                  <img
                    src={URL.createObjectURL(avatar)}
                    alt="avatar"
                    className="h-full w-full object-cover rounded-full"
                  />
                ) : (
                  <RxAvatar className="h-8 w-8" />
                )}
              </span>
              <label
                htmlFor="file-input"
                className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <span>Upload a file</span>
                <input
                  type="file"
                  name="avatar"
                  id="file-input"
                  accept=".jpg,.jpeg,.png"
                  onChange={handleFileInputChange}
                  className="sr-only"
                />
              </label>
            </div>
              <button
                type="submit"
                className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300"
              >
                Sign Up
              </button>
            </form>

            

            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400" />
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400" />
            </div>
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <svg
                className="mr-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="25px"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>
              Signup with Google
            </button>
           
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Have an account?</p>
              <a href="/login">
                <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">
                  Login
                </button>
              </a>
            </div>
          </div>
          
        </div>
      </section>
      {/* partial */}
    </>
  );
};

export default Singup;

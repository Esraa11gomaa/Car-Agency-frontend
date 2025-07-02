import { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../Context/UserContext'


export default function Register() {
let {userLogin, setuserLogin} = useContext(UserContext)

  const navigate = useNavigate()

  const [ApiError, setApiError] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  function handleRegister(values) {

    setIsLoaded(true)

    axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`, values)
      .then((res) => {
        setIsLoaded(false)
        if (res.data.message == "success") {

          localStorage.setItem("userToken", res.data.token);
         setuserLogin(res.data.token)
          navigate("/Login")

        }
      })
      .catch((res) => {
        setIsLoaded(false)
        console.log(res.response.data.message);

        setApiError(res.response.data.message)

      })

  }


  let validationSchema = Yup.object().shape({

    name: Yup.string("name must be string").min(3, "min length is 3").max(50, "max length is 50 ").required(" name is required"),

    email: Yup.string().email("In-valid email").required("email is required"),

    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, "In-valid phone number").required("phone is required"),

    password: Yup.string()
      .matches(
        /^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,50}$/,
        "Password must be 6–50 characters and can include letters, numbers, and special characters"
      )
      .required("Password is required"),

    rePassword: Yup.string().oneOf([Yup.ref("password")], "rePassword and password not the same").required("rePassword is required")

  })

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: ""
    },
    validationSchema,
    onSubmit: handleRegister
  })

  useEffect(() => {
    setApiError("");
  }, [formik.values]);

  return <>

    {ApiError ? <div className='w-1/2 mx-auto bg-red-500 text-white text-center font-bold rounded-lg p-3 mb-5'>{ApiError}</div> : null}
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto">
      <h1 className='text-blue-800 text-3xl text-center font-normal mb-4'> Register Form</h1>

      <div className="relative z-0 w-full mb-9 group">
        <input
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          className="block py-2.5 px-1.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer " placeholder=" " />
        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your Email address</label>

        {formik.errors.email && formik.touched.email ? (<span className='text-red-500'>{formik.errors.email}</span>) : null}

      </div>

      <div className="relative z-0 w-full mb-9 group">
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete='username'
          id="name"
          className="block py-2.5 px-1.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Name</label>

        {formik.errors.name && formik.touched.name ? (<span className='text-red-500'>{formik.errors.name}</span>) : null}

      </div>

      <div className="relative z-0 w-full mb-9 group">
        <input
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="new-password"
          id="password"
          className="block py-2.5 px-1.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your Password</label>


        {formik.errors.password && formik.touched.password ? (<span className='text-red-500'>{formik.errors.password}</span>) : null}

      </div>

      <div className="relative z-0 w-full mb-9 group">
        <input
          type="password"
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          autoComplete="new-password"
          id="rePassword"
          className="block py-2.5 px-1.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your rePassword</label>

        {formik.errors.rePassword && formik.touched.rePassword ? (<span className='text-red-500'>{formik.errors.rePassword}</span>) : null}

      </div>

      <div className="relative z-0 w-full mb-9 group">
        <input
          type="tel"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="phone"
          className="block py-2.5 px-1.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"> Enter Your Phone</label>


        {formik.errors.phone && formik.touched.phone ? (<span className='text-red-500'>{formik.errors.phone}</span>) : null}

      </div>

      <div className="flex justify-center gap-2.5 ">
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto sm: mb-9 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{isLoaded ? <FontAwesomeIcon icon={faSpinner} spin /> : "Register"}</button>
        <span> do you have an account ? <Link to={"/login"} className='text-blue-900 underline'>Login now</Link></span>
      </div>
    </form>

  </>
}

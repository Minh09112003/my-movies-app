import React, { useEffect } from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInput'
import { Link, useNavigate } from 'react-router-dom'
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux'
import { useForm} from 'react-hook-form'
import { LoginValidation } from "../Components/Validation/UserValidation"
import { yupResolver } from "@hookform/resolvers/yup"
import { InlineError } from '../Components/Notifications/Error';
import { loginAction } from '../Redux/Actions/userAction';
import toast from 'react-hot-toast'

const Login = () => {

const dispatch = useDispatch()
const navigate = useNavigate()

const { isLoading, isError, userInfo, isSuccess } = useSelector((state) => state.userLogin)

// validate user
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(LoginValidation)
    })

    // on Submit
    const onSubmit = (data) => {
        dispatch(loginAction(data))
    }

    // useEffect
    useEffect(() => {
        if (userInfo?.isAdmin) {
            navigate("/dashboard")
        } else if (userInfo) {
            navigate('/profile')
        }

        if(isSuccess) {
            toast.success(`Chào mừng ${userInfo?.fullName} trở lại`)
        }
        if (isError) {
            toast.error(isError)
            dispatch({type: "USER_LOGIN_RESET"})
        }
    }, [userInfo, isSuccess, isError, navigate, dispatch])

  return (
    <Layout>
        <div className='container mx-auto px-2 my-24 flex-colo'>
            <form 
            onSubmit={handleSubmit(onSubmit)}
            className='w-full 2xl:w-2/5 gap-8 flex-colo p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
                <img 
                    src='/images/logo.png'
                    alt='logo'
                    className='w-full h-12 object-contain'
                />
                <div className='w-full'>
                    <Input
                    label='Email' 
                    placeholder='abc@gmail.com' 
                    type='email'
                    name='email'
                    register={register('email')}
                    bg={true} 
                    />
                    {
                    errors.email && <InlineError text={errors.email.message} />
                }
                </div>

                <div className='w-full'>
                    <Input
                    label='Mật khẩu' 
                    placeholder='password' 
                    type='password'
                    name='password'
                    register={register('password')}
                    bg={true} 
                    />
                </div>
                {
                    errors.password && <InlineError text={errors.password.message} />
                }
              
                <button 
                type='submit' 
                disabled={isLoading}
                className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                    {
                        // if loading show loading
                        isLoading ? (
                            "Loading..."
                        ) : (
                            <>
                                <FiLogIn /> Đăng nhập
                            </>
                        )
                    }
                    
                </button>
                <p className='text-center text-border'>
                    Bạn chưa có tài khoản?{' '}
                    <Link to='/register' className='text-dryGray font-semibold ml-2'>Đăng ký</Link>
                </p>
            </form>
        </div>
    </Layout>
  )
}

export default Login
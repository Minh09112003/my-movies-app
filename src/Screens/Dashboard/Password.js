import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { Input } from '../../Components/UsedInput'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { PasswordValidation } from '../../Components/Validation/UserValidation'
import { InlineError } from '../../Components/Notifications/Error'
import { changePasswordAction } from '../../Redux/Actions/userAction'
import toast from 'react-hot-toast'

const Password = () => {
    const dispatch = useDispatch()
    const { isLoading, isError, message, isSuccess } = useSelector((state) => state.userchangePassword)

    // validate user
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(PasswordValidation)
    })

    // on submit
    const onSubmit = (data) => {
        dispatch(changePasswordAction(data))
    }

    // useEffect
    useEffect(() => {
        if (isSuccess) {
            dispatch({type:"USER_CHANGE_PASSWORD_RESET"})
        }
        if (isError) {
            toast.error(isError)
            dispatch({type:"USER_CHANGE_PASSWORD_RESET"})
        }
        if (message) {
            toast.success(message)
            reset()
        }
    }, [isSuccess, isError, message, reset, dispatch])

  return (
    <SideBar>
         <form onClick={
            handleSubmit(onSubmit)
         } className='flex flex-col gap-6'>
            <h2 className='text-2xl font-bold'>Đổi mật khẩu</h2>
            <div className='w-full'>
                    <Input
                    label='Mật khẩu hiện tại' 
                    placeholder='Mật khẩu' 
                    type='password'
                    name='oldPassword'
                    register={register('oldPassword')}
                    bg={true} 
                    />
                    {
                    errors.oldPassword && <InlineError text={errors.oldPassword.message} />
                }
                </div>
            <div className='w-full'>
                    <Input
                    label='Mật khẩu mới' 
                    placeholder='Mật khẩu' 
                    type='password'
                    name='newPassword'
                    register={register('newPassword')}
                    bg={true} 
                    />
                    {
                    errors.newPassword && <InlineError text={errors.newPassword.message} />
                }
            </div>
            <div className='w-full'>
                    <Input
                    label='Xác nhận mật khẩu' 
                    placeholder='Mật khẩu' 
                    type='password'
                    name='confirmPassword'
                    register={register('confirmPassword')}
                    bg={true} 
                    />
                    {
                    errors.confirmPassword && <InlineError text={errors.confirmPassword.message} />
                }
            </div>
            <div className='flex justify-end items-center my-4'>
                <button 
                disabled={isLoading}
                type='submit'
                className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
                    {
                        isLoading ? "Đang đổi,..." : "Đổi mật khẩu"
                    }
                </button>
            </div>
        </form>
    </SideBar>
  )
}

export default Password
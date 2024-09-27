import React, { useEffect, useState } from 'react'
import MainModal from './MainModal'
import { Input } from '../UsedInput'
import { useDispatch, useSelector } from 'react-redux'
import { createCategoryAction, updateCategoryAction } from '../../Redux/Actions/CategoriesActions'
import toast from 'react-hot-toast'

const CategoryModal = ({modalOpen, setModalOpen, category}) => {
    const [title, setTitle] = useState("")
    const dispatch = useDispatch()

    const {isLoading, isError, isSuccess} = useSelector((state) => state.categoryCreate)

    const {isLoading:upLoading, isError:upError, isSuccess:upSuccess} = useSelector((state) => state.categoryUpdate) 
    // create category handler

    const submitHandler = (e) => {
        e.preventDefault()
        if (title) {
            // if category is not empty then update category else create category
            if (category) {
                dispatch(updateCategoryAction(category?._id, {title:title}))
                setModalOpen(!modalOpen)
            }
            else {
                dispatch(createCategoryAction({title:title}))
                setTitle("")
                setModalOpen(!modalOpen)
            }
        }
        else {
            toast.error("Vui lòng nhập tên thể loại")
        }
    }

    // useEffect 
    useEffect(() => {
        // error
        if (upError || isError) {
            toast.error(upError || isError)
            dispatch({
                type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET"
            })
        }

        // success
        if (isSuccess || upSuccess) {
            dispatch({
                type: isError ? "CREATE_CATEGORY_RESET" : "UPDATE_CATEGORY_RESET"
            })
        }

        // if category is not null then set title to category title
        if (category) {
            setTitle(category?.title)
        }

        // if modal is closed then set title to empty
        if (modalOpen === false) {
            setTitle("")
        }
    }, [dispatch, isError, isSuccess, upSuccess, upError, category, modalOpen])

  return (
    <MainModal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <div className='inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-full bg-main text-white rounded-2xl'>
            <h2 className='text-3xl font-bold'>{category ? 'Cập nhật' : 'Tạo'}</h2>
            <form 
            onSubmit={submitHandler}
            className='flex flex-col gap-6 text-left mt-6'>
            <Input
                label='Tên thể loại' 
                placeholder={'Hành động'}
                type='text'
                bg={false} 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button 
            disabled={isLoading || upLoading}
            type='submit'
            className='w-full flex-rows gap-2 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-subMain text-white'>
               {
                isLoading || upLoading 
                ? "Loading..." 
                : category 
                ? "Cập nhật" 
                : "Tạo"
               }
            </button>
            </form>
        </div>
    </MainModal>
  )
}

export default CategoryModal
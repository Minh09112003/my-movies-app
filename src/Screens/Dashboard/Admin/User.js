import React, { useEffect } from 'react'
import SideBar from '../SideBar'
import Table2 from '../../../Components/Table2'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUsersAction, getAllUsersAction } from '../../../Redux/Actions/userAction'
import toast from 'react-hot-toast'
import Loader from '../../../Components/Notifications/Loader'
import { Empty } from '../../../Components/Notifications/Empty'

const Users = () => {
  const dispatch = useDispatch()

  const {
    isLoading,
    isError,
    users
  } = useSelector((state) => state.adminGetAllUsers)

  // delete
  const {
    isError:deleteError,
    isSuccess
  } = useSelector((state) => state.adminDeleteUser)

  // delete user handler
  const deleteMoviesHandler = (id) => {
    if (window.confirm("Bạn có chắc muốn xóa user này không?")) {
      dispatch(deleteUsersAction(id))
    }
  }

  // useEffect
  useEffect(() => {
    dispatch(getAllUsersAction())
    if (isError || deleteError) {
      toast.error(isError || deleteError)
      dispatch({type:isError ? "GET_ALL_USERS_RESET" : "DELETE_USERS_RESET"})
    }
  }, [dispatch, isError, deleteError, isSuccess])
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
            <h2 className='text-xl font-bold'>Người dùng</h2>
            {
              isLoading ? 
                (
                  <Loader /> 
                ) :  users.length > 0 ? (
                  <Table2 data={users} users={true}
                  onDeleteFunction = {deleteMoviesHandler}
                  />
                ) : (
                  <Empty message="Không có bất kỳ người dùng nào"/>
                )
            }
        </div>
    </SideBar>
  )
}

export default Users 
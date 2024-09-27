import * as CategoriesConstants from '../Constants/CategoriesConstants'
import * as categoriesApis from "../APIs/CategoriesServices"
import toast from 'react-hot-toast'
import { ErrorsAction, tokenProtection } from '../Protection'

// Get all Categories action
export const getAllCategoriesAction = () => async (dispatch) => {
    try {
        dispatch({type: CategoriesConstants.GET_ALL_CATEGORIES_REQUEST})
        const data = await categoriesApis.getCategoriesService();
        dispatch({type: CategoriesConstants.GET_ALL_CATEGORIES_SUCCESS, payload: data})
    } catch (error) {
        ErrorsAction(error, dispatch, CategoriesConstants.GET_ALL_CATEGORIES_FAIL)
    }
}

// Create Category action
export const createCategoryAction = (title) => async (dispatch, getState) => {
    try {
        dispatch({type: CategoriesConstants.CREATE_CATEGORY_REQUEST})
        await categoriesApis.createCategoryService(title, tokenProtection(getState));
        dispatch({type: CategoriesConstants.CREATE_CATEGORY_SUCCESS})
        toast.success("Thể loại đã được tạo thành công")
        dispatch(getAllCategoriesAction())
    } catch (error) {
        ErrorsAction(error, dispatch, CategoriesConstants.CREATE_CATEGORY_FAIL)
    }
}

// Update Category action
export const updateCategoryAction = (id, title) => async (dispatch, getState) => {
    try {
        dispatch({type: CategoriesConstants.UPDATE_CATEGORY_REQUEST})
        await categoriesApis.updateCategoryService(id, title, tokenProtection(getState));
        dispatch({type: CategoriesConstants.UPDATE_CATEGORY_SUCCESS})
        toast.success("Thể loại đã được cập nhật thành công")
        dispatch(getAllCategoriesAction())
    } catch (error) {
        ErrorsAction(error, dispatch, CategoriesConstants.UPDATE_CATEGORY_FAIL)
    }
}

// Delete Category action
export const deleteCategoryAction = (id) => async (dispatch, getState) => {
    try {
        dispatch({type: CategoriesConstants.DELETE_CATEGORY_REQUEST})
        await categoriesApis.deleteCategoryService(id,tokenProtection(getState));
        dispatch({type: CategoriesConstants.DELETE_CATEGORY_SUCCESS})
        toast.success("Thể loại đã được xóa thành công")
        dispatch(getAllCategoriesAction())
    } catch (error) {
        ErrorsAction(error, dispatch, CategoriesConstants.DELETE_CATEGORY_FAIL)
    }
}


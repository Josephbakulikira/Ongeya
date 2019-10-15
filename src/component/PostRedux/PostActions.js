import { CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS } from "./PostConstant"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/AsyncActions"
import { fetchSampleData } from "../../MainApp/data/MockAPI"
import { toastr } from "react-redux-toastr"

export const createPost = (post) => {
    return async dispatch => {
        try{
            dispatch({
                type: CREATE_POST, 
                payload: {post}
            })
            toastr.success('success !', 'post has been created');
        }catch(error){
            toastr.error('Oops', 'Something went wrong')
        }
    }

}

export const updatePost = (post ) => {
    return async dispatch => {
        try{
            dispatch({
                type: UPDATE_POST, 
                payload: {post}
            })
            toastr.success('success !', 'post has been updated');
        }catch(error){
            toastr.error('Oops', 'Something went wrong')
        }
    }
}
export const deletePost = (postId) => {
    return {
        type: DELETE_POST,
        payload: {postId}
    }
}
export const loadPosts = () => {
    return async dispatch => {
        try {
            dispatch(asyncActionStart())
            const posts = await fetchSampleData();
            dispatch({type: FETCH_POSTS, payload: {posts}})
            dispatch(asyncActionFinish())
        } catch(error) {
            console.log(error);
            dispatch(asyncActionError());
        }
    }
} 
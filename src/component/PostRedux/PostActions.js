import { CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS } from "./PostConstant"
import { asyncActionStart, asyncActionFinish, asyncActionError } from "../async/AsyncActions"
import { fetchSampleData } from "../../MainApp/data/MockAPI"

export const createPost = (post) => {
    return {
        type: CREATE_POST, 
        payload: {post}
    }
}

export const updatePost = (post ) => {
    return {
        type: UPDATE_POST,
        payload: {post}
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
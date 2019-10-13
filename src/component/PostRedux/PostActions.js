import { CREATE_POST, UPDATE_POST, DELETE_POST } from "./PostConstant"

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
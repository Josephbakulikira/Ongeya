import { createReducer } from "../../MainApp/common/util/ReducerUtil"
import { CREATE_POST, UPDATE_POST, DELETE_POST, FETCH_POSTS } from "./PostConstant"



   const initialState = []

  const createPost = (state, payload) => {
      return [...state, payload.post ]
  }
  const updatePost = (state, payload) => {
      return [
          ...state.filter(post => post.id !== payload.post.id), payload.post
      ]
  }

  const deletePost = (state, payload) => {
      return [
          ...state.filter(post => post.id !== payload.postId)
      ]
  }

  const fetchPosts = (state, payload) => {
    return payload.posts
  }

  export default createReducer(initialState, {
      [CREATE_POST]: createPost,
      [UPDATE_POST] : updatePost,
      [DELETE_POST]: deletePost,
      [FETCH_POSTS]: fetchPosts
  } )
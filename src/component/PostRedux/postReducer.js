import { createReducer } from "../../MainApp/common/util/ReducerUtil"
import { CREATE_POST, UPDATE_POST, DELETE_POST } from "./PostConstant"

const initialState = [
    {
      id: '1',
      title: 'ba shindikana basha kuwa ba mingi',
      date: '2018-03-27',
      category: 'culture',
      description:    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'Kinshasa, CD',
      venue: "Boulevard Kinshasa",
      hostedBy: 'Amrani',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/42.jpg',
      attendees: [
        {
          id: 'a',
          name: 'Amrani',
          photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
        },
        {
          id: 'b',
          name: 'gd6',
          photoURL: 'https://randomuser.me/api/portraits/men/18.jpg'
        }
      ]
    },
    {
      id: '2',
      title: 'ma combat zisha punguka',
      date: '2018-03-28',
      category: 'drinks',
      description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
      city: 'Kinshasa, CD',
      venue: 'Ma Campagne',
      hostedBy: 'gd6',
      hostPhotoURL: 'https://randomuser.me/api/portraits/men/18.jpg',
      attendees: [
        {
          id: 'b',
          name: 'audrey',
          photoURL: 'https://randomuser.me/api/portraits/men/26.jpg'
        },
        {
          id: 'a',
          name: 'amrani',
          photoURL: 'https://randomuser.me/api/portraits/men/42.jpg'
        }
      ]
    }
  ]

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

  export default createReducer(initialState, {
      [CREATE_POST]: createPost,
      [UPDATE_POST] : updatePost,
      [DELETE_POST]: deletePost
  } )
import { createReducer } from "../../MainApp/common/util/ReducerUtil"
import { CREATE_POST, UPDATE_POST, DELETE_POST } from "./PostConstant"



   const initialState = [
      {
        id: '1',
        title: 'bukaramusi',
        date: '2018-03-21',
        category: 'culture',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'NY, USA',
        venue: 'Empire State Building, 5th Avenue, New York, NY, USA',
        venueLatLng: {
          lat: 40.7484405,
          lng: -73.98566440000002
        },
        hostedBy: 'amrani',
        hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
        attendees: [
          {
            id: 'a',
            name: 'gd6',
            photoURL: 'https://randomuser.me/api/portraits/men/45.jpg'
          },
          {
            id: 'b',
            name: 'burundais',
            photoURL: 'https://randomuser.me/api/portraits/men/34.jpg'
          }
        ]
      },
      {
        id: '2',
        title: 'shindikana',
        date: '2018-03-18',
        category: 'drinks',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
        city: 'London, UK',
        venue: 'Punch & Judy, Henrietta Street, London, UK',
        venueLatLng: {
          lat: 51.5118074,
          lng: -0.12300089999996544
        },
        hostedBy: 'chouchou',
        hostPhotoURL: 'https://randomuser.me/api/portraits/women/22.jpg',
        attendees: [
          {
            id: 'a',
            name: 'chouchou2',
            photoURL: 'https://randomuser.me/api/portraits/women/19.jpg'
          },
          {
            id: 'b',
            name: 'chouchou3',
            photoURL: 'https://randomuser.me/api/portraits/women/32.jpg'
          }
        ]
      }
    ];

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
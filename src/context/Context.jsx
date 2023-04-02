import { createContext, useContext, useEffect, useReducer } from 'react'
import { fetchFromAPI } from '../utils/fetchFromApi'

const context = createContext()

const initialState = {
  videos: {},
  categorie: 'New',
  chanelProfile: {
    chanelDetails: {},
    videos: [],
  },
  videDetails: {
    views: 0,
    likes: 0,
    relatedVideos: [],
  },
}

const reducer = (state, action) => {
  if (action.type == 'SUGGESTED_VIDEOS') {
    return { ...state, videos: action.payload }
  }
  if (action.type == 'CHANGE_CATEGORIE') {
    return { ...state, categorie: action.payload }
  }
}

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const { categorie } = state

  useEffect(() => {
    if (categorie) {
      fetchFromAPI(`search?part=snippet&q=${categorie}`).then((data) =>
        dispatch({ type: 'SUGGESTED_VIDEOS', payload: data.items })
      )
    }
  }, [categorie])

  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  )
}

const useGlobalContext = () => {
  return useContext(context)
}

export { useGlobalContext, ContextProvider }

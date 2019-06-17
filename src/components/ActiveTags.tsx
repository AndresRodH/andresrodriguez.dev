import React from "react"

type Action =
  | {
      type: "add" | "remove"
      name: string
    }
  | {
      type: "clear"
    }
type State = string[]
type Dispatch = React.Dispatch<Action>

const initialState: State = []
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "add":
      return state.concat(action.name)
    case "remove":
      return state.filter(tag => !(tag === action.name))
    case "clear":
      return initialState
    default:
      throw new Error("Unhandled action")
  }
}

const ActiveTagsState = React.createContext<State | undefined>(undefined)
const ActiveTagsDispatch = React.createContext<Dispatch | undefined>(undefined)

const ActiveTags: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <ActiveTagsState.Provider value={state}>
      <ActiveTagsDispatch.Provider value={dispatch}>
        {children}
      </ActiveTagsDispatch.Provider>
    </ActiveTagsState.Provider>
  )
}

export function useActiveTags(): State {
  const activeTags = React.useContext(ActiveTagsState)

  if (!activeTags)
    throw new Error("Component has to be wrapped with ActiveTags component")

  return activeTags
}

export function useActiveTagsDispatch(): Dispatch {
  const dispatch = React.useContext(ActiveTagsDispatch)

  if (!dispatch)
    throw new Error("Component has to be wrapped with ActiveTags component")

  return dispatch
}

export default ActiveTags

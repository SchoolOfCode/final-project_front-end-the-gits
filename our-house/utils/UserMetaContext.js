import { createContext, useContext, useReducer } from 'react';

// create the contexts to be used throughout the app
const UserMetaContext = createContext(null);
const UserMetaDispatchContext = createContext(null);

/** 
 * Used by the Layout component.
 * Return the children components wrapped in the context Providers
 */
export function UserMetaProvider({ children }) {
  // both keeps track and update the state of the user metadata
  const [userMeta, dispatch] = useReducer(userReducer, userInitValues);
  
  // create class to wrap the whole app, checking for undefined
  const theClassName = `the-gits-theme-${userMeta.user_metadata.theme_id ? userMeta.user_metadata.theme_id.substring(1) : '8A82E8'}`

  return (
    <UserMetaContext.Provider value={userMeta}>
      <UserMetaDispatchContext.Provider value={dispatch}>
        <div className={theClassName}>
          {children}
        </div>
      </UserMetaDispatchContext.Provider>
    </UserMetaContext.Provider>
  )
}

// make the user_metadata available to every component
export const useUserMeta = () => useContext(UserMetaContext);
// make dispatch available to any component which needs it
export const useUserMetaDispatch = () => useContext(UserMetaDispatchContext);

// only updates the state to match latest user metadata
function userReducer(userMeta, action) {
  // make sure the updata data is not empty otherwise skip
  if (!action.user_metadata) {
    action.type = 'skip';
  }
  // you can either update the data or keep as is
  switch(action.type) {
    case 'update':
      return {user_metadata: {...action.user_metadata}}
      break;
    default:
      return userMeta
  }
}

// default values
const userInitValues = {
  user_metadata: {
    avatar_id: "/avatars/avatar_13.svg",
    household: "the gits",
    theme_id: "#8A82E8"
  }
}
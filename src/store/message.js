export const Types = {
  ADD_MESSAGE: 'message/ADD_MESSAGE',
  ADD_MESSAGE_SUCCESS: 'message/ADD_MESSAGE_SUCCESS',
  ADD_MESSAGE_FAILURE: 'message/ADD_MESSAGE_FAILURE'
}

export const addMessage = (user, message) => async (dispatch) => {
  try {
    dispatch({ type: Types.ADD_MESSAGE })

    dispatch({ type: Types.ADD_MESSAGE_SUCCESS, payload: message })
  } catch (err) {
    dispatch({ type: Types.ADD_MESSAGE_FAILURE, payload: err })
  }
}

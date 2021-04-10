export const setHttpLoading = () => {
    return {
      type: 'HTTP_LOADING',
    };
  }
  
  export const setHttpLoaded = () => {
    return {
      type: 'HTTP_LOADED',
    };
  }
  
  export const setHttpError = (error) => {
    return {
      type: 'HTTP_ERROR',
      error
    };
  }
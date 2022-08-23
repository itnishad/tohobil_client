export const getUser = ()=>{
    return JSON.parse(localStorage.getItem('user') ? localStorage.getItem('user') : null);
  }
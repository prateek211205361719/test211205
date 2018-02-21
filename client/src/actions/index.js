

import axios from 'axios';
export const fetchUser = () => async dispatch => {
      const res = await axios.get('/api/currentuser');
      console.log(res.data);
      dispatch({type:'Fetch_User',payload:res.data});
     
 };

 export const handleToken =  (token) =>  async function(dispatch){
      const res = await axios.post('/api/stripe', token);
      console.log(res.data);
      dispatch({type:'Fetch_User',payload:res.data});   
 };

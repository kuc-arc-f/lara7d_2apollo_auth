import axios  from 'axios';
//
export default {
  valid_auth:async function(props){
    const response = await axios.get("/api/users/get_session")
    var data = await response.data    
//console.log( data.user )
    if(data.user  == null){
      props.history.push("/");
      return;
    }    
  },

}

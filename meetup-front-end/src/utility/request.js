import axios from 'axios';

var request = {
  get: function(cb){
    axios.get('http://localhost:3000/attendees')
    .then((data) => {
      cb(data);
    })
    .catch((error) => {
      console.log(error);
    })
  },
  post: function(cb,obj){
    console.log(obj);
    axios({
      method: 'post',
      url: 'http://localhost:3000/attendees',
      data:obj,
      contentType:'application/json'
    }).
    then((data) => {
      cb();
    })
  }
}

export default request;
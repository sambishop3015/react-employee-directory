import axios from "axios";

const BASEURL = "https://randomuser.me/api/"

export default {
  search: async function() {
    const res = await axios.get(BASEURL).then(res => {
      console.log(
      'Name: ' + 
      res.data.results[0].name.first + 
      " " + 
      res.data.results[0].name.last);
    });
  }
}; 
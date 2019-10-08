import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-tic-tac-toe-8a33a.firebaseio.com'
});


export default instance;
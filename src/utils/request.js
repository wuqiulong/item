import axios from 'axios'
const request = axios.create({
  baseURL: 'http://haozhiyuan.ltd',
  timeout: 5000
})
export default request

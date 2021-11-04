import axios from 'axios'
import qs from 'qs'

export function checkLogin(loginForm) {
   axios
    .post('http://api.roa.voiddog.cn/login',
        qs.stringify({
          username: loginForm.username,
          password: loginForm.password
        }))
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
     console.log(err)
    })
}
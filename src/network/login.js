import axios from 'axios'
import qs from 'qs'

export function checkLogin(loginForm) {
  return axios
      .post('http://api.roa.voiddog.cn/login',
          qs.stringify({
            username: loginForm.username,
            password: loginForm.password
          }))
  // .then(res => {
  //   console.log(res.data)
  // })
  // .catch(err => {
  //   console.log(err)
  // })
}
export function checkRegister(registerForm) {
  return axios
      .post('http://api.roa.voiddog.cn/register',
          qs.stringify({
            username: registerForm.username,
            password: registerForm.password
          }))
}
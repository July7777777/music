/**   
 * api接口统一管理
 */
import { get, post } from './http'

// 登录
// export const Login = data => post('/api/TokenAuth/Login', data);


export const Search = data => post('/cloudsearch', data);// 搜索 单曲等 search或 cloudsearch
export const MusicCheck = data => post('/check/music', data);// 检测音乐是否可用
export const MusicUrl = data => post('/song/url', data);// 获取音乐url
export const cellphone = data => post('/login/cellphone', data);// 手机号登陆







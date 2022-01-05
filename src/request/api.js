/**   
 * api接口统一管理
 */
import { get, post } from './http'

// 登录
// export const Login = data => post('/api/TokenAuth/Login', data);


export const Search = data => post('/search', data);// 搜索 单曲等
export const MusicCheck = data => post('/check/music', data);// 检测音乐是否可用
export const MusicUrl = data => post('/song/url', data);// 获取音乐url






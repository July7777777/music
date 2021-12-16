/**   
 * api接口统一管理
 */
import { get, post } from './http'

// 登录
export const Login = data => post('/api/TokenAuth/Login', data);

// 搜索
export const Search = data => get('/search', data);



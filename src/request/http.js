/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
// import {
// 	getCookie
// } from '../uilts/cookie.js'
// import { message } from 'ant-design-vue';
// import store from '../store/index'
// import router from '../router/index.js'
// 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//     axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//     axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
//     axios.defaults.baseURL = 'http://wthrcdn.etouch.cn/';
// }
axios.defaults.baseURL = 'http://localhost:3000';
// axios.defaults.baseURL = 'http://localhost:51021';

// axios.defaults.baseURL = 'https://bms-train.api.ecache.com.cn';
// 请求超时时间
// axios.defaults.timeout = 10000;

// console.log(token)
// 请求拦截器
axios.interceptors.request.use(
	config => {
		config.headers = {
			'Content-Type': 'application/json; charset=utf-8' //配置请求头
		}
		// 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
		// 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
		// const token = getCookie("token");
		// const token = getCookie("token");
		// token && (config.headers.Authorization = "Bearer " + token);
		return config;
	},
	error => {
		return Promise.error(error);
	})

// 响应拦截器
axios.interceptors.response.use(
	response => {
		if (response.status === 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	// 服务器状态码不是200的情况    
	error => {
		console.log('error',error)
		// if (error.response.status == 401) {
		// 	message.warning('请先登录')
		// 	router.push({
		// 		name: "Login"
		// 	})
		// }
		const msg = error.Message !== undefined ? error.Message : ''
		// console.log("网络错误：", msg)
		return Promise.reject(error);

	}

);
export function url() {
	return axios.defaults.baseURL
}
/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
	return new Promise((resolve, reject) => {
		axios.get(url, {
				params: params
			})
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err)
			})
	});
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
	return new Promise((resolve, reject) => {
		axios.post(url, JSON.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}
/** 
 * put方法，对应put请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function put(url, params) {
	return new Promise((resolve, reject) => {
		axios.put(url, JSON.stringify(params))
			.then(res => {
				resolve(res.data);
			})
			.catch(err => {
				reject(err.data)
			})
	});
}



// router.beforeEach((to, from, next) => {
// 	// console.log(to, from, next())
// 	if (from.name == "Login") { // 如果不需要权限校验，直接进入路由界面
// 		next();
// 	} else if (to.meta.requireAuth) {
// 		// 判断该路由是否需要登录权限
// 		if (VueCookies.get("token")) { // 获取当前的token是否存在
// 			console.log("token存在");
// 			next();
// 		} else {
// 			console.log("token不存在");
// 			next({
// 				path: '/login', // 将跳转的路由path作为参数，登录成功后跳转到该路由
// 			})
// 		}
// 	} else { // 如果不需要权限校验，直接进入路由界面
// 		next();
// 	}

// });

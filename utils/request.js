function request(url,data={},method="get") {
	return new Promise((resolve,reject)=> {
		uni.request({
			url:'http://localhost:3001'+ url,
			data,
			method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (error) => {
				reject(error)
			}
		})
	})
}
export default request
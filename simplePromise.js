{
	function MyPromise(fn){
		let self = this;
		this.callbacks = [];
		function resolve(value){
		   setTimeout(function(){
              self.callbacks.forEach((callback)=>{
			   	  callback(value)
			   })
		   },0)
		}
		fn(resolve)
	}
	MyPromise.prototype.then = function(onfulfiled){
       this.callbacks.push(onfulfiled);
       return this;
	}

	//test:
	let p = new MyPromise(function(resolve){
		setTimeout(function(){
			resolve('返回成功')
		},1000)
	})
	p.then(res=>{
		console.log(res)
	})
}

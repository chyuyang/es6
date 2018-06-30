/*class版本的Promise*/

class MyPromise{
	constructor(fn){
		let self = this;
		this.callBacks = [];
		function resolve(value){
		  setTimeout(function(){
            self.callBacks.forEach(callBack=>{
		      	callBack(value)
		    })
		  },0)
		}
        fn(resolve)
	}
	then(onfulfiled){
      this.callBacks.push(onfulfiled)
	}
}

/*test:*/
let p = new MyPromise(function(resolve){
		setTimeout(function(){
			resolve('返回成功')
		},1000)
	})
	p.then(res=>{
		console.log(res)
	})
//sum

let a=parseInt(prompt("enter a value"));
let b=parseInt(prompt("enter a value"));
let c=parseInt(prompt("enter a value"));

let res1=new Promise((resolve,reject)=>{
	if(a>0){
		resolve(a)
	}
	else{
		reject("error1")
	}
})



let res2=new Promise((resolve,reject)=>{
	if(b>0){
		resolve(b)
	}
	else{
		reject("error2")
	}
})


let res3=new Promise((resolve,reject)=>{
	if(c>0){
		resolve(c)
	}
	else{
		reject("error3")
	}
})

Promise.all([res1,res2,res3])
.then((e)=>{
	let sum=0
        for(i=0; i<e.length; i++){
			sum=sum+e[i];
		}
		document.write("Total "+ sum,"<br>")
		document.write("Average "+sum/e.length)
	})
.catch((msg)=>{
	document.write(msg)
})



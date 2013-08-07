var a = [1,2,3,2],
	sum = 0,
	mult = 1

for(var i=0; i<a.length;i++){
	sum += a[i]
	//sum = sum + a[i]
	mult *= a[i]
	//mult = mult * a[i]
	console.log('index:'+i, 'suma:'+sum, 'multiplicatoria:'+mult)
}
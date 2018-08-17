document.getElementById("sayHelloBtn").addEventListener('click', SayHello);
function SayHello() {
	document.getElementById('helloWorldBlock').innerHTML = "<h1><b> Hello World </b></h1>";
}
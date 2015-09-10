console.log('Stack Challenge');
var input = document.createElement('input'); 
input.type = "text"; 
   
container.appendChild(input);
function simStack(){
		function add(input) {
		var node = newNode(input);
		if (length === 0) {
			head = node;
			tail = node;
			length++;
			return node;
		} else {
			tail.next = node;
			tail = node;
			length++; 
			return tail;
			}
		}
}

export function throttling(func, time) {
	let previousCallFunc = null;
  
	return function(...args) {
        let lastCallFunc = Date.now();
        
        if (previousCallFunc === null) {
            previousCallFunc = lastCallFunc;
            func.apply(this, args);
            return;
        }
        
        if ((lastCallFunc - previousCallFunc) > time) {
            previousCallFunc = lastCallFunc;
            func.apply(this, args);
        }   
   }	
}

export function printSize() {
    console.log(this.innerWidth + 'x' + this.innerHeight);
}


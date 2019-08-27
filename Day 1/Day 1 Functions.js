//https://www.hackerrank.com/challenges/js10-function/problem

function factorial(n) { 
    /*
	Problem solved sequentially 
	
	let aux = 1;
    while (n > 0) { 
        aux *= n;
        n--
    }
	
	*/
	
	//Problem solved recursively
	
    if (n != 0) {
        return factorial(n - 1) * n;
    } else { 
        return 1
    }
    
}

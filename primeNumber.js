// Prime number

let a = 2; 
let n = 10;
let prime = 1;

for (i = a; i <= n; i++) { 
    if (i == 1 || i == 0) 
        continue; 
  
    prime = 1; 
  
    for (j = 2; j <= i / 2; ++j) { 
        if (i % j == 0) { 
            prime = 0; 
            break; 
        } 
    } 
    if (prime == 1) 
        console.log(i); 
}

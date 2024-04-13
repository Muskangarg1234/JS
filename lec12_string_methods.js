// trim() method
let str="   mus kan  "
console.log(str.trim());
console.log(str);// str will not change

// toUpperCase and toLowerCase method
let st="Muskan";
console.log(st.toLowerCase());
console.log(st.toUpperCase());
console.log(st);// str will not change
st=st.toUpperCase();
console.log(st);

//indexOf method
let s="happy";
console.log(s.indexOf("a"));
console.log(s.indexOf("p"));
console.log(s.indexOf("py"));
console.log(s.indexOf("az"));  // return -1 if substring not found(now az not present so return -1)

// method chaining
s="   Hello   "
console.log(s.trim().toUpperCase());
console.log(s);
console.log(s.toUpperCase().trim());

// slice method
s="happy";
console.log(s.slice(1,4));
console.log(s.slice(1,2));
console.log(s.slice(1));
console.log(s.slice(-3));  // 5-3=2

// replace method
s="IloveCoding";
console.log(s.replace("love","do"));
console.log(s.replace('o','x'));
console.log(s.replace('a','s'));

//repeat method
s="Mango";
console.log(s.repeat(0))    // "" empty string as repeat count is 0
console.log(s.repeat(1));
console.log(s.repeat(5)); 
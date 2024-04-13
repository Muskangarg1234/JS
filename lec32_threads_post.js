const post={
    username: "muskangarg888",
    content: "hii everyone",
    likes: 100,
    reposts: 50,
    tags: ["@yugam","@ankita"]
};
console.log(post);
console.log(post["username"]);
console.log(post.content);
// console.log(post[username]); not works bcoz username is not recognized

const ob={
    1:"a",
    2:"b",
    null:"c",
    true:"d",
    undefined:"e"
};
console.log(ob);
console.log(ob.null);
console.log(ob[1]);  // ob.1 not works
console.log(ob.undefined);
console.log(ob.true);
console.log(ob[2]);  // ob.2 not works
console.log(ob[undefined]);

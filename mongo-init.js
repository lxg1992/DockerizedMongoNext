db.auth("rootuser", "rootpw");

console.log("============================");
console.log("============================");
console.log("============================");

db.createUser({
  user: "noteuser",
  pwd: "notepw",
  roles: [
    {
      role: "root",
      db: "admin",
    },
  ],
});

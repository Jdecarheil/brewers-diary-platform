// conn = new Mongo();
// db = conn.getDB("users");

// db.users.insertMany([
//     { name: "first 1", value: 10 },
//     { name: "second 2", value: 20 },
//     // Add more default documents as needed
//   ]);

db.createUser({
  user: 'pastime',
  pwd: 'pastime123',
  roles: [
    {
      role: 'readWrite',
      db: 'pastime'
    }
  ]
})
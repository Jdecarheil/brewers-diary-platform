db = db.getSiblingDB('brewers-diary');
db.students.insertMany([
    { name: "Gbenga Oyatoye", age: 22, major: "Computer Science" },
    { name: "John Doe", age: 24, major: "Mathematics" },
    { name: "Jimmy Azar", age: 28, major: "Physics" }
  ]);

print("Data has been written to the collection");
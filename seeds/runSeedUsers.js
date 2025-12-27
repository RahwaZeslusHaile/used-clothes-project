import seedUsers from("./seedUsers");
import mongoose from("mongoose");

seedUsers()
  .then(count => {
    console.log(`${count} users seeded`);
  })
  .catch(console.error)
  .finally(async () => {
    await mongoose.connection.close();
    process.exit(0);
  });

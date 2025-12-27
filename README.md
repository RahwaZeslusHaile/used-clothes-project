# used-clothes-project

 REST-style project for a used-clothes marketplace.

**Prerequisites:** Node.js (v16+ recommended) and npm

**Install**

 - Install dependencies:

```bash
npm install
```

**Run**

 - Start in development mode (uses `nodemon`):

```bash
npm run dev
```

 - Or run the app directly:

```bash
node index.js
```

**Database seeding**

 - Seed users (script defined in `package.json`):

```bash
npm run seed:user
```

 - Seed products (manual run):

```bash
node seeds/seedProduct.js
```

**Tests**

 - Run the test suite (Jest):

```bash
npm test
```

This project uses `mongodb-memory-server` for in-memory testing and `@faker-js/faker` for generating test data.

**Useful files**

 - [index.js](index.js)
 - [Server/app.js](Server/app.js)
 - [seeds/seedUsers.js](seeds/seedUsers.js)
 - [seeds/seedProduct.js](seeds/seedProduct.js)
 - [__tests__/model.test.js](__tests__/model.test.js)
 - [__tests__/seedUsers.test.js](__tests__/seedUsers.test.js)


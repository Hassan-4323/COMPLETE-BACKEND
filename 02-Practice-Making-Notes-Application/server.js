const app = require('./src/app');
const connectDB = require("./src/db/db");

connectDB();

app.listen(3000, ()=> {
    console.log("server is responding on 3000");
    console.log("server is responding on 4000");
    console.log("server is running on port 5000");
})
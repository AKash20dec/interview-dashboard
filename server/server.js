import server from "./app.js";
import connectDB from "./utils/db.js";

const { PORT } = process.env;

connectDB()
    .then(() => {
        server.listen(PORT || 8080, () => {
            console.log(`Server started`)
        });
    })
    .catch(() => process.exit(1));
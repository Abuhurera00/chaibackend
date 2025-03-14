import connectDB from "./db/index.js";
import "dotenv/config.js";


connectDB()
.then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
)
.catch((err) => {
    console.error(`MongoDb Connection Failed !!: ${err.message}`);
})
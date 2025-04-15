const express = require('express');
const app = express();
const { userRouter } = require('./routes/user'); // Ensure the path is correct
const { courseRouter } = require('./routes/course'); // Ensure the path is correct
const {adminRouter}=require("./routes/admin")



app.use('/user', userRouter);
app.use('/course', courseRouter);
app.use("/admin",adminRouter)

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

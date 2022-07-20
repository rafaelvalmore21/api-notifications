const express = require('express')
//Routes
import notificationRoutes from "./routes/notification.route"
const app = express();

//Settings
app.set("port", 4000);

//Middleware
app.use(express.json());

//Routes
app.use("/api/notifications", notificationRoutes);

export default app;

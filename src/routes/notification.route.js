import { Router } from "express";
import { methods as notificationController} from "../controllers/notification.controllers";

const router = Router();

router.get("/", notificationController.getNotifications);
router.post("/", notificationController.notification);

export default router;
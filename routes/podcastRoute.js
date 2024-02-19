import express from "express";

import {
	createPodcast,
	getPodcasts,
} from "../controllers/podcastController.js";

const router = express.Router();

// Article routes
router.get("/", getPodcasts);
router.post("/", createPodcast);

export default router;

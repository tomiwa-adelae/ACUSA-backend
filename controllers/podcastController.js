import asyncHandler from "express-async-handler";
import Podcast from "../models/podcastModel.js";

// @Desc Get all Podcast
// @route GET /api/podcasts
// @access Public
const getPodcasts = asyncHandler(async (req, res) => {
	try {
		const podcasts = await Podcast.find().sort({ createdAt: -1 });

		res.json(podcasts);
	} catch (err) {
		res.status(400);
		throw new Error(err);
	}
});

// @Desc Create a new podcast
// @route POST /api/podcast
// @access Private
const createPodcast = asyncHandler(async (req, res) => {
	try {
		const { title, excerpt, podcast_image, audio_source } = req.body;

		const newPodcast = new Podcast({
			title,
			excerpt,
			podcast_image,
			audio_source,
		});

		res.send(newPodcast);

		await newPodcast.save();
	} catch (err) {
		res.status(400);
		throw new Error(err);
	}
});

export { createPodcast, getPodcasts };

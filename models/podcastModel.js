import mongoose from "mongoose";

const podcastSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		excerpt: {
			type: String,
		},
		podcast_image: {
			type: String,
		},
		audio_source: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

const Podcast = mongoose.model("Podcast", podcastSchema);

export default Podcast;

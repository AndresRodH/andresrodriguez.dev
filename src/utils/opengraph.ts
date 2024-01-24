import type { CollectionEntry } from "astro:content";

const sizes = {
	og: {
		width: 1200,
		height: 630,
	},
	twitter: {
		width: 1200,
		height: 675,
	},
} as const;

function buildImageUrlForPost(
	post: CollectionEntry<"posts">,
	size: keyof typeof sizes,
) {
	const url = new URL(`${import.meta.env.SITE}/posts/${post.slug}/og.png`);

	const width = String(sizes[size].width);
	const height = String(sizes[size].height);

	url.searchParams.set("width", width);
	url.searchParams.set("height", height);

	return {
		width,
		height,
		url: url.toString(),
	};
}

export function getOgImagesForPost(post: CollectionEntry<"posts">) {
	return {
		og: buildImageUrlForPost(post, "og"),
		twitter: buildImageUrlForPost(post, "twitter"),
	};
}

import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "@vercel/og";

interface Props {
	post: CollectionEntry<"posts">;
}

export const GET: APIRoute<Props> = async ({ props }) => {
	const { post } = props;

	const hubotFont = fs.readFileSync(
		path.join(process.cwd(), "public/fonts/HubotSansCondensed-ExtraBold.ttf"),
	);
	const monaFont = fs.readFileSync(
		path.join(process.cwd(), "public/fonts/MonaSans-Medium.ttf"),
	);

	return new ImageResponse(
		{
			type: "div",
			props: {
				tw: "flex p-10 h-full bg-[#69D2E7] w-full",
				children: {
					type: "div",
					props: {
						tw: "border-4 p-12 border-black w-full h-full bg-white flex flex-col",
						style: { boxShadow: "20px 20px 0 0px" },
						children: [
							{
								type: "h1",
								props: {
									tw: "font-bold text-7xl leading-[64px]",
									children: post.data.title,
								},
							},
							{
								type: "p",
								props: {
									tw: "flex-1 text-4xl text-gray-500 leading-[48px]",
									children: post.data.description,
									style: {
										fontFamily: "Mona Sans",
									},
								},
							},
							{
								type: "div",
								props: {
									tw: "flex justify-between items-center",
									children: [
										{
											type: "div",
											props: {
												tw: "flex",
												children: post.data.tags.map((tag) => ({
													type: "span",
													props: {
														tw: "border-2 border-black px-2 py-0.5 rounded-full  text-xl font-semibold mr-4",
														children: tag,
													},
												})),
											},
										},
										{
											type: "span",
											props: {
												tw: "text-4xl",
												children: "andresrodriguez.dev",
												style: {
													textDecorationColor: "#FF00F5",
													textDecorationThickness: "4px",
													textDecorationLine: "underline",
												},
											},
										},
									],
								},
							},
						],
					},
				},
			},
		},
		{
			width: 1200,
			height: 600,
			fonts: [
				{
					name: "Hubot Sans",
					data: hubotFont.buffer,
				},
				{
					name: "Mona Sans",
					data: monaFont.buffer,
				},
			],
		},
	);
};

export async function getStaticPaths() {
	const posts = await getCollection("posts");
	return posts.map((post) => ({
		params: { slug: post.slug },
		props: { post },
	}));
}

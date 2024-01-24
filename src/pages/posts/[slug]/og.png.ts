import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import fs from "node:fs";
import path from "node:path";
import { ImageResponse } from "@vercel/og";

export const prerender = false;

// biome-ignore lint/complexity/noBannedTypes: no props
export const GET: APIRoute<{}, { slug: string }> = async ({
	request,
	params,
}) => {
	const { slug } = params;
	const posts = await getCollection("posts");
	const post = posts.find((p) => p.slug === slug);

	if (!post) {
		return new Response(null, { status: 404 });
	}

	const { searchParams } = new URL(request.url);
	const width = Number(searchParams.get("width") ?? 1200);
	const height = Number(searchParams.get("height") ?? 630);
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
						tw: "border-8 p-12 border-black w-full h-full bg-white flex flex-col",
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
														tw: "border-4 border-black px-4 py-1 rounded-full text-4xl font-semibold mr-4",
														children: tag,
													},
												})),
											},
										},
										{
											type: "span",
											props: {
												tw: "text-5xl",
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
			width,
			height,
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

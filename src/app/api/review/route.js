import { createClient } from "next-sanity";
import { NextResponse } from "next/server";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN, // Token rahasia yang kita buat tadi
  apiVersion: "2024-01-01",
  useCdn: false,
});

export async function POST(req) {
  try {
    const { name, rating, comment, packageId } = await req.json();

    await client.create({
      _type: "review",
      name,
      rating: Number(rating),
      comment,
      package: {
        _type: "reference",
        _ref: packageId, // Hubungkan review ke ID paket ini
      },
      isApproved: false, // Wajib diapprove admin dulu
    });

    return NextResponse.json({ message: "Review submitted" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error submitting review" },
      { status: 500 },
    );
  }
}

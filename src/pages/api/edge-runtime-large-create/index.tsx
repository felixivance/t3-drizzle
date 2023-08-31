import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
export const runtime = 'experimental-edge'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
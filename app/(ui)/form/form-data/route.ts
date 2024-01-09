// pages/api/video.js

import ytdl from "ytdl-core";
import { NextResponse } from "next/server";

export async function POST(request: Request, response: Response) {
 

    return NextResponse.json({status: 200})

}
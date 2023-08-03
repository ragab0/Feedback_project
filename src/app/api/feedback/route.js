import { NextResponse } from 'next/server';
import React from 'react'

export async function POST(request) {
    const data = await request.json();
    console.log("data", data);
    return NextResponse.json({status: "done", data})
}

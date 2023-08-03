import { NextResponse } from "next/server";

const API_KEY = process.env.DATA_API_KEY;
const SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";

function dataHandler(data) {
  const new_data = [];
  for (const k in data) {
    const v = data[k];
    if (!Boolean(v) && v!==0) {
      new_data.push(k);
    }
  }

  return new_data;
}

export async function GET() {
  const todos = await fetch(SOURCE_URL);
  const data = await todos.json();
  
  return NextResponse.json(data);
}


export async function DELETE(request) {
  const data = await request.json();
  const handledData = dataHandler(data);
  if (handledData.length > 0) return new Response(`Invalid ${handledData}`);

  const res = await fetch(SOURCE_URL, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      'API-Key': API_KEY,
    }
  })

  // res.ok = no BUT we'll;
  return new Response("Done deleting!");
}


export async function POST(request) {
  const data = await request.json();
  const handledData = dataHandler(data);
  if (handledData.length > 0) return new Response(`Invalid ${handledData}`);

  const res = await fetch(SOURCE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      'API-Key': API_KEY,
    },
    body: JSON.stringify({...data, completed: false})
  })

  // res.ok = no BUT we'll;
  return NextResponse.json(await res.json());
}


export async function PUT(request) {
  const data = await request.json();
  const handledData = dataHandler(data);
  if (handledData.length > 0) return new Response(`Invalid ${handledData}`);

  const res = await fetch(SOURCE_URL, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      'API-Key': API_KEY,
    },
    body: JSON.stringify({...data, completed: false})
  })

  return NextResponse.json(await res.json());
}
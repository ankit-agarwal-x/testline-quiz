import { NextResponse } from "next/server"

const API_URL = "https://api.jsonserve.com/Uw5CrX"

export async function GET() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error("Error fetching quiz data:", error)
    return NextResponse.json({ error: "Failed to fetch quiz data" }, { status: 500 })
  }
}


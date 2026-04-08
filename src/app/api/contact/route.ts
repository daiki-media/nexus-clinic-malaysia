import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, treatment, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email required" },
        { status: 400 }
      );
    }

    const response = await fetch(
      "https://services.leadconnectorhq.com/hooks/YOUR_WEBHOOK_URL",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          treatment,
          message,
          source: "Website Contact Form",
          page: "/contact-us",
          timestamp: new Date().toISOString(),
        }),
      }
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Webhook Error:", error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

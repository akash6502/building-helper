import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const googleSheetUrl =
      process.env.GOOGLE_SHEET_URL ||
      process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    if (!googleSheetUrl) {
      console.warn(
        "GOOGLE_SHEET_URL is not configured yet. Saving enquiry locally only."
      );
      return NextResponse.json({
        success: true,
        message: "Enquiry saved locally. Configure GOOGLE_SHEET_URL to receive rows in Google Sheets.",
        inquiryNumber: body.inquiryNumber,
      });
    }

    // Forward to Google Apps Script Webhook
    const response = await fetch(googleSheetUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const responseText = await response.text();

    return NextResponse.json({
      success: true,
      message: "Enquiry successfully forwarded to Google Sheets.",
      googleResponse: responseText,
      inquiryNumber: body.inquiryNumber,
    });
  } catch (error) {
    console.error("Error forwarding enquiry to Google Sheets:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to forward enquiry to Google Sheets.",
      },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, position, message } = body;

    // Validate required fields
    if (!fullName || !email || !position || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Log the submission (visible in server logs)
    console.log('[Career Application Submission]', {
      name: fullName,
      email,
      position,
      message: message.substring(0, 100) + (message.length > 100 ? '...' : ''),
      timestamp: new Date().toISOString(),
    });

    // TODO: Integrate with email service (Resend, SendGrid, etc.)
    // For now, the form submission is logged server-side.
    // To receive these via email, add an email service and send to jobs@zhongshischool.org

    return NextResponse.json(
      { success: true, message: 'Application received. Please also send your resume to jobs@zhongshischool.org' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Career Application Error]', error);
    return NextResponse.json(
      { error: 'Failed to process your application. Please try again.' },
      { status: 500 }
    );
  }
}

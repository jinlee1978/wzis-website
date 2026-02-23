import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret');

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 });
  }

  try {
    const body = await request.json();
    const type = body?._type;

    // Revalidate specific pages based on content type
    switch (type) {
      case 'event':
        revalidatePath('/[locale]/events', 'page');
        revalidatePath('/[locale]', 'page'); // homepage shows upcoming events
        break;
      case 'staff':
        revalidatePath('/[locale]/about', 'page');
        break;
      case 'tuition':
        revalidatePath('/[locale]/admissions', 'page');
        break;
      case 'job':
        revalidatePath('/[locale]/careers', 'page');
        break;
      case 'collegeAcceptance':
        revalidatePath('/[locale]/college-acceptance', 'page');
        break;
      default:
        revalidatePath('/', 'layout');
    }

    return NextResponse.json({ revalidated: true, type });
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 });
  }
}

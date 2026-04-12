import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { Resend } from 'resend';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia' as any,
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = req.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error(`Webhook Error: ${err.message}`);
    return NextResponse.json({ error: `Webhook Error: ${err.message}` }, { status: 400 });
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    const metadata = session.metadata;

    if (metadata) {
      try {
        // Send email to admin
        await resend.emails.send({
          from: 'Vagneriga <noreply@vagneriga.lv>',
          to: process.env.ADMIN_EMAIL || 'info@vagneriga.lv',
          subject: 'Jauns ziedojums saņemts!',
          html: `
            <h1>Saņemts jauns ziedojums!</h1>
            <p><strong>Vārds, Uzvārds:</strong> ${metadata.firstName} ${metadata.lastName}</p>
            <p><strong>E-pasts:</strong> ${metadata.email}</p>
            <p><strong>Tālrunis:</strong> ${metadata.phone || 'Nav norādīts'}</p>
            <p><strong>Līmenis:</strong> ${metadata.level}</p>
            <p><strong>Summa:</strong> ${(session.amount_total! / 100).toFixed(2)} EUR</p>
            <p><strong>Valoda:</strong> ${metadata.lang}</p>
            <p><strong>Stripe Session ID:</strong> ${session.id}</p>
          `,
        });
      } catch (emailErr) {
        console.error('Failed to send admin email:', emailErr);
      }
    }
  }

  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};

import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia' as any,
});

export async function POST(req: Request) {
  try {
    const { amount, firstName, lastName, email, phone, level, lang } = await req.json();
    console.log("CHECKOUT_API_HIT:", { amount, email, level, lang });

    if (!amount || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: lang === 'lv' ? 'Ziedojums Vāgnera namam' : 'Donation to Vagner House',
              description: `${level} support`,
            },
            unit_amount: Math.round(parseFloat(amount) * 100), // Stripe expects cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/ziedojumi?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/${lang}/ziedojumi?canceled=true`,
      metadata: {
        firstName,
        lastName,
        email,
        phone,
        level,
        lang,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Stripe Checkout Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

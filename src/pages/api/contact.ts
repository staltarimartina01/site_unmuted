import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    return new Response(JSON.stringify({ error: 'Server misconfigured' }), { status: 500 });
  }

  const resend = new Resend(resendApiKey);

  let data: FormData;
  try {
    data = await request.formData();
  } catch {
    return new Response(JSON.stringify({ error: 'Invalid form data' }), { status: 400 });
  }

  const nome = data.get('nome')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const messaggio = data.get('messaggio')?.toString().trim();

  if (!nome || !email || !messaggio) {
    return new Response(JSON.stringify({ error: 'Tutti i campi sono obbligatori' }), { status: 400 });
  }

  const to = process.env.CONTACT_EMAIL || 'martina@synthlang.studio';

  try {
    await resend.emails.send({
      from: 'Synth Language Studio <noreply@synthlang.studio>',
      to,
      replyTo: email,
      subject: `Nuovo messaggio da ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Resend error:', err);
    return new Response(JSON.stringify({ error: 'Errore nell\'invio. Riprova più tardi.' }), { status: 500 });
  }
};

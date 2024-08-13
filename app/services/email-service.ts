import axios from 'axios';

import { Resend } from 'resend';
import { EmailTemplate } from '../email_templates/new_lead';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function send_email(
  from: string,
  to: string,
  subject: string,
  text: string,
  html: string,
) {
  const response = await axios.post(
    'https://api.mailersend.com/v1/email',
    {
      from: {
        email: from,
      },
      to: [
        {
          email: to,
        },
      ],
      subject: subject,
      text: text,
      html: html,
    },
    {
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: `Bearer ${process.env.MAILERSEND_TOKEN}`,
      },
    },
  );
  return response;
}

export async function send_new_lead_email(email: string) {
  return await await resend.emails.send({
    from: 'no-reply@tailormadenews.com',
    to: 'hello@tailormadenews.com',
    subject: 'New Lead Signed up!',
    react: EmailTemplate({ email: email }),
  });
}

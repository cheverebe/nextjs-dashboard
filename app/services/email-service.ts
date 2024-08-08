import axios from 'axios';

export async function send_email(from: string, to: string, subject: string, text: string, html: string) {
    const response = await axios.post('https://api.mailersend.com/v1/email', {
        "from": {
            "email": from
        },
        "to": [
            {
                "email": to
            }
        ],
        "subject": subject,
        "text": text,
        "html": html
    },
    {
        headers: {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': `Bearer ${process.env.MAILERSEND_TOKEN}`
        }
    });
    return response;
}
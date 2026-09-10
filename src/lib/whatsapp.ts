export const PRIMAQY_WHATSAPP_NUMBER = '918252468903';
export const PRIMAQY_WHATSAPP_BASE_URL = `https://wa.me/${PRIMAQY_WHATSAPP_NUMBER}`;

export interface WhatsAppContactPayload {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

/**
 * Builds a safely URL-encoded WhatsApp click-to-chat URL for PriMAqy.
 * Destination format: https://wa.me/918252468903?text=<ENCODED_MESSAGE>
 */
export function buildWhatsAppContactUrl(data: WhatsAppContactPayload): string {
  const name = data.name.trim();
  const email = data.email.trim();
  const subject = (data.subject || 'General Inquiry').trim();
  const message = data.message.trim();

  const formattedMessage = `Hello PriMAqy,

I would like to get in touch.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Thank you.`;

  return `${PRIMAQY_WHATSAPP_BASE_URL}?text=${encodeURIComponent(formattedMessage)}`;
}

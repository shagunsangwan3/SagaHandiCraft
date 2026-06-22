/**
 * Send email via FormSubmit.co
 * Zero config — no account, no API key, no env vars needed.
 * First submission sends a one-time activation email to info@sagahandicrafts.com
 * Click "Activate Form" in that email → all future submissions arrive instantly.
 * https://formsubmit.co
 */
export async function sendEmail(fields) {
  const payload = {
    _to: 'info@sagahandicrafts.com',
    _subject: fields.subject || 'New Inquiry — Saga Handicrafts',
    _replyto: fields.email || '',
    _template: 'table',
    _captcha: 'false',
    name: fields.name || '',
    email: fields.email || '',
    message: fields.message || '',
  }

  const res = await fetch('https://formsubmit.co/ajax/info@sagahandicrafts.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!data.success && data.success !== 'true' && data.success !== true) {
    throw new Error(data.message || 'Submission failed')
  }
  return data
}

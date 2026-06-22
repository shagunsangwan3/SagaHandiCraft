/**
 * Send email via Web3Forms
 * Docs: https://web3forms.com
 * 
 * SETUP REQUIRED (one-time):
 * 1. Go to https://web3forms.com
 * 2. Enter: info@sagahandicraft.com
 * 3. Click "Create Access Key" — you'll get an email with a key
 * 4. In Vercel → Settings → Environment Variables → add:
 *    Name:  VITE_WEB3FORMS_KEY
 *    Value: your-key-here
 * 5. Redeploy
 *
 * Until the key is set, submissions open the user's mail client as fallback.
 */
export async function sendEmail(fields) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_KEY

  if (!accessKey) {
    // No key configured — open mailto as reliable fallback
    const subject = encodeURIComponent(fields.subject || 'New Inquiry — Saga Handicrafts')
    const body = encodeURIComponent(fields.message || '')
    window.open(`mailto:info@sagahandicraft.com?subject=${subject}&body=${body}`)
    return { success: true, fallback: true }
  }

  const payload = {
    access_key: accessKey,
    from_name: fields.name || 'Website Visitor',
    replyto: fields.email || 'noreply@sagahandicraft.com',
    subject: fields.subject || 'New Inquiry — Saga Handicrafts',
    message: fields.message || '',
    botcheck: '',
  }

  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
  })

  const data = await res.json()
  if (!data.success) throw new Error(data.message || 'Submission failed')
  return data
}

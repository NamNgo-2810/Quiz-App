export default async function handler(req, res) {
  const { page } = req.query;
  const scriptUrl = process.env.APPS_SCRIPT_URL;

  // Get client IP from request headers
  const getClientIP = (req) => {
    return req.headers['x-forwarded-for']?.split(',')[0] ||
           req.headers['x-real-ip'] ||
           req.connection?.remoteAddress ||
           req.socket?.remoteAddress ||
           req.ip ||
           'unknown';
  };

  const clientIP = getClientIP(req);

  // Log to Google Apps Script if URL is configured
  if (scriptUrl) {
    try {
      await fetch(
        `${scriptUrl}?public_ip=${encodeURIComponent(clientIP)}&local_ip=${encodeURIComponent(clientIP)}&page=${encodeURIComponent(page ?? '')}`
      );
    } catch (error) {
      console.error('Failed to log to Apps Script:', error);
    }
  }

  res.status(200).json({
    ip: clientIP,
    headers: {
      'x-forwarded-for': req.headers['x-forwarded-for'],
      'x-real-ip': req.headers['x-real-ip']
    }
  });
}

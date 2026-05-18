export default async function handler(req, res) {
  const { public_ip, local_ip, page } = req.query;
  const scriptUrl = process.env.APPS_SCRIPT_URL;

  await fetch(
    `${scriptUrl}?public_ip=${encodeURIComponent(public_ip ?? '')}&local_ip=${encodeURIComponent(local_ip ?? '')}&page=${encodeURIComponent(page ?? '')}`
  );

  res.status(200).send('ok');
}

import { getFlats } from '../../services/immoscout';

export default async function handler(req, res) {
  const flats = await getFlats();
  return res
    .setHeader(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate=1200'
    )
    .status(200)
    .json(flats);
}

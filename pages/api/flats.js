import { getFlats } from '../../services/immoscout';

export default async function handler(req, res) {
  const flats = await getFlats();
  res.status(200).json(flats);
}

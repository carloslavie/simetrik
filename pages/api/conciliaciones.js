// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { conciliaciones } from "../../db/conciliacionesData"

export default function handler(req, res) {
  res.status(200).json(conciliaciones)
}

import { tableros } from "../../db/tablerosData"

export default function handler(req, res) {
  res.status(200).json(tableros)
}

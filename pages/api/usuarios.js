import { usuarios } from "../../db/usuariosData"

export default function handler(req, res) {
  res.status(200).json(usuarios)
}

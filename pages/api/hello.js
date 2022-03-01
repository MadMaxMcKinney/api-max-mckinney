// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import db from '../../db/test.json'

export default function handler(req, res) {
  res.status(200).json(db)
}

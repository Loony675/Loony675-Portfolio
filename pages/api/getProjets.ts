import type { NextApiRequest, NextApiResponse } from "next";
import {groq} from 'next-sanity';
import { sanityClient } from "../../sanity";
import { Projet } from "../../typings";

const query = groq`
*[_type == 'projets']{
  ...,technologies[]->
}
`
type Data = {
    projets: Projet[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projets: Projet[] = await sanityClient.fetch(query)

    res.status(200).json({ projets})
  }
  
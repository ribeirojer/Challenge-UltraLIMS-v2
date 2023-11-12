import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from "@/utils/supabase"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

 let { data, error } = await supabase
   .from('cep')
   .select('*')

 if (error) return res.status(401).json({ error: error.message })
 return res.status(200).json(data)
}

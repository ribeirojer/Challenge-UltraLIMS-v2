import { NextApiRequest, NextApiResponse } from 'next';
import { supabase } from '../../utils/supabase';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { listData } = req.body;

      if (!listData || !Array.isArray(listData)) {
        throw new Error('Dados inválidos');
      }

      const { data, error } = await supabase.from('cep').insert(listData);

      if (error) {
        throw error;
      }

      res.status(200).json({ message: 'Dados de CEP salvos com sucesso.' });
    } catch (error) {
      console.error('Erro ao salvar os dados no banco de dados Supabase:', error);
      res.status(500).json({ error: 'Erro ao salvar os dados no banco de dados.' });
    }
  } else {
    res.status(405).end(); // Método não permitido
  }
}

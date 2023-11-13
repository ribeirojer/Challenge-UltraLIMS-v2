import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ICep } from '../interfaces/Cep';

const useCepSearch = () => {
  const [search, setSearch] = useState<string>('');
  const searchRef = useRef<HTMLInputElement | null>(null);
  const [listData, setListData] = useState<ICep[]>([]);
  const [savedSearchesData, setSavedSearchesData] = useState<ICep[]>([]);
  const [data, setData] = useState<ICep | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (data?.cep) {
      setListData((prevListData) => [...prevListData, data]);
    }
  }, [data]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const url = `https://viacep.com.br/ws/${search}/json/`;

    if (!/^[0-9]{8}$/.test(search)) {
      searchRef.current?.focus();
      setErrorMessage('Preenchimento incorreto. Digite 8 números.');
      return;
    }

    try {
      setIsLoading(true);
      const response = await axios.get(url);
      setData(response.data);
	  if(response.data.erro){
        setErrorMessage('Endereço não encontrado.');
	  }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage('Houve um problema...');
      console.error('Error fetching data: ', error);
    }
  };

  const handlePostData = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post('/api/save', { listData });
      setListData([]);
      setSearch('');
      setIsLoading(false);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setIsLoading(false);
      console.error('Error posting data: ', error);
    }
  };

  const handleGetSearchs = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.get('/api/ceps');

      setIsLoading(false);
      setSavedSearchesData(response.data);
      setSuccessMessage(response.data.message);
    } catch (error) {
      setIsLoading(false);
      console.error('Error fetching data: ', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target;
    if (/^\d*$/.test(value) || value === '') {
      setErrorMessage('');
      setSearch(value);
    }
  };

  return {
    search,
    searchRef,
    listData,
    setListData,
    savedSearchesData,
    setSavedSearchesData,
    data,
    errorMessage,
    successMessage,
    isLoading,
    handleSubmit,
    handlePostData,
    handleGetSearchs,
    handleChange,
  };
};

export default useCepSearch;

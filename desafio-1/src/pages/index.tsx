import React from "react"
import { Button, Form, Header, Loading, Table } from '../components';
import { Poppins } from 'next/font/google'
import useCepSearch from '../hooks/useCepSearch';

const poppins = Poppins({weight: ['400', '700'], subsets: ['latin']})

export default function Home() {
  const {
    search,
    searchRef,
    listData,
    setListData,
    savedSearchesData,
    setSavedSearchesData,
    errorMessage,
    successMessage,
    isLoading,
    handleSubmit,
    handlePostData,
    handleGetSearchs,
    handleChange,
  } = useCepSearch();
  
  return (
    <main className={`${poppins.className}`}>
      <Header />
      <div className="mx-auto p-6">
        <h1 className="text-blue-900 text-center font-bold text-xl md:text-2xl font-bold mb-4">Ultra Sistema de Endereços (USE)</h1>
        <Form search={search} searchRef={searchRef} handleChange={handleChange} handleSubmit={handleSubmit} errorMessage={errorMessage} successMessage={successMessage} handleGetSearchs={handleGetSearchs}></Form>
        {listData.length > 0 && (
          <form onSubmit={handlePostData}>
            <Table listData={listData} setListData={setListData}/>
            <Button type='submit' className="mt-4">
              Salvar
            </Button>
          </form>
        )}
      {savedSearchesData.length > 0 && (
        <>
          <h2 className='font-semibold text-blue-900 mt-4'>Pesquisas salvas no banco de dados:</h2>
          <Table listData={savedSearchesData} setListData={setSavedSearchesData} />
        </>
        )}
        {isLoading && (<Loading />)}
      </div>
    </main>
  )
}
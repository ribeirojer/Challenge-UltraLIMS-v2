import React, { LegacyRef } from "react";
import Button from "./Button";
import Message from "./Message";

type FormProps = {
  search: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleGetSearchs: (event: React.FormEvent<HTMLFormElement>) => void;
  errorMessage: string;
  successMessage: string;
  searchRef: LegacyRef<HTMLInputElement> | undefined;
};

const Form = ({
  search,
  handleChange,
  handleSubmit,
  handleGetSearchs,
  errorMessage,
  successMessage,
  searchRef,
}: FormProps) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full flex flex-col md:flex-row items-center justify-center">
        <form onSubmit={handleSubmit} className="flex items-center justify-center" data-testid="form-search">
          <label htmlFor="cep" className="w-full sr-only">
            Pesquisar por CEP
          </label>
          <input
            id="cep"
            type="text"
            placeholder="Digite somente números..."
            value={search}
            onChange={handleChange}
            ref={searchRef}
            className="w-full p-2 border border-gray-300 rounded mr-2"
            data-testid="search-input"
          />
          <Button type="submit">Pesquisar</Button>
        </form>

        <form onSubmit={handleGetSearchs}>
          <Button type="submit" className="ml-4 mt-4 md:mt-0 bg-green-700 hover:bg-green-900">
            Ver pesquisas
          </Button>
        </form>
      </div>

      <Message color="red">{ errorMessage }</Message>
      <Message color="green">{ successMessage }</Message>
    </section>
  );
};

export default Form;

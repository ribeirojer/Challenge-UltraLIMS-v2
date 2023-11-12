import React from "react";
import Form from "../src/components/Form";
import { fireEvent, render } from "@testing-library/react";
import { it, describe, expect, vi } from "vitest";
// @vitest-environment happy-dom

describe("Form component", () => {
  it("renders the form with input and search button", () => {
    const { getByPlaceholderText, getByText } = render(
      <Form
        search=""
        handleChange={() => {}}
        handleSubmit={() => {}}
        handleGetSearchs={() => {}}
        errorMessage=""
        successMessage=""
        searchRef={undefined}
      />
    );

    const inputElement = getByPlaceholderText("Digite somente números...");
    const searchButton = getByText("Pesquisar");

    expect(inputElement).toBeTruthy();
    expect(searchButton).toBeTruthy();
  });

  it("calls handleChange when input value changes", () => {
    const handleChangeMock = vi.fn();

    const { getAllByPlaceholderText } = render(
      <Form
        search=""
        handleChange={handleChangeMock}
        handleSubmit={() => {}}
        handleGetSearchs={() => {}}
        errorMessage=""
        successMessage=""
        searchRef={undefined}
      />
    );

    const inputElement = getAllByPlaceholderText("Digite somente números...")[1];
    fireEvent.change(inputElement, { target: { value: "12345" } });

    expect(handleChangeMock).toHaveBeenCalled();
  });

  it("calls handleSubmit when the form is submitted", () => {
    const handleSubmitMock = vi.fn();

    const { getAllByTestId } = render(
      <Form
        search=""
        handleChange={() => {}}
        handleSubmit={handleSubmitMock}
        handleGetSearchs={() => {}}
        errorMessage=""
        successMessage=""
        searchRef={undefined}
      />
    );

    const formElement = getAllByTestId("form-search")[2];
    fireEvent.submit(formElement);

    expect(handleSubmitMock).toHaveBeenCalled();
  });

  it("calls handleGetSearchs when the 'Ver pesquisas' button is clicked", () => {
    const handleGetSearchsMock = vi.fn();
  
    const { getAllByText } = render(
      <Form
        search=""
        handleChange={() => {}}
        handleSubmit={() => {}}
        handleGetSearchs={handleGetSearchsMock}
        errorMessage=""
        successMessage=""
        searchRef={undefined}
      />
    );
  
    const verPesquisasButton = getAllByText("Ver pesquisas")[3];
    fireEvent.click(verPesquisasButton);
  
    expect(handleGetSearchsMock).toHaveBeenCalled();
  });
  
  it("renders error and success messages", () => {
    const { getByText} = render(
      <Form
        search=""
        handleChange={() => {}}
        handleSubmit={() => {}}
        handleGetSearchs={() => {}}
        errorMessage="Error message"
        successMessage="Success message"
        searchRef={undefined}
      />
    );

    const errorMessage = getByText("Error message");
    const successMessage = getByText("Success message");

    expect(errorMessage).toBeTruthy();
    expect(successMessage).toBeTruthy();
  });
});

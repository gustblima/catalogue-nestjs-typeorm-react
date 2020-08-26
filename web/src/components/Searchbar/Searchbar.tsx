import React, { useState, useEffect, } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { navigate } from '@reach/router';
import useProducts from '../../context/products';
import { initialState } from '../../reducers/productList';

export function Searchbar() {
  
  const { dispatch, state: { search: searchString }} = useProducts()

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const search = event.currentTarget.value;
      if(search) {
        navigate(`/?search=${search}`)
      } else {
        navigate(`/`)
      }
      dispatch({ type: 'SET_SEARCH', search: search });
    }
  }

  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input type='search' onKeyUp={onKeyUp} />
      </InputGroup>
    </div>
  );
}

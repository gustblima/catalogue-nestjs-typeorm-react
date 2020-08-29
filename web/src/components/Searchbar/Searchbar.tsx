import React, { useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import { navigate } from '@reach/router';
import useProducts from '../../context/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import './Searchbar.scss';

export function Searchbar() {
  const {
    dispatch,
    state: { search: searchString },
  } = useProducts();
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(searchString!);
  }, [searchString]);
  const onSearch = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const search = event.currentTarget.value;
    if (event.key === 'Enter' && searchString !== search) {
      if (search) {
        navigate(`/?search=${search}`);
      } else {
        navigate(`/`);
      }
      dispatch({ type: 'SET_SEARCH', search });
    }
  };

  return (
    <label className="Searchbar">
      <FontAwesomeIcon icon={faSearch} />
      <Input
        type="search"
        value={value || ''}
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyUp={onSearch}
      />
      {value?.length > 0 && (
        <FontAwesomeIcon
          className="Searchbar-Clear"
          icon={faTimesCircle}
          onClick={() => setValue('')}
        />
      )}
    </label>
  );
}

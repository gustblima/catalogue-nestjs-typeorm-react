import React from 'react';
import { Container, Row, Col, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

type SearchbarProps = {
  value: string
  onSearch: () => any
}
export function Searchbar({ value, onSearch }: SearchbarProps ) {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
    </div>
  );
}

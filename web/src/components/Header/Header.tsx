import React from 'react';
import { Col, Row } from 'reactstrap';
import { Searchbar } from '../Searchbar/Searchbar';
import logo from '../../resources/logo.svg';
import './Header.scss';

export function Header() {
  return (
    <header className="Header">
      <Row className="p-2 px-4 align-items-center">
        <Col sm={2}>
          <img alt="Logo" src={logo} className="Header-Logo" />
        </Col>
        <Col sm={{ size: 3, offset: 7 }}>
          <Searchbar />
        </Col>
      </Row>
    </header>
  );
}

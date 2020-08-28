import React from 'react';
import { Input } from 'reactstrap';
import './PaginationLimit.scss';

type PaginationLimitProps = {
  onSelect: (limit: number) => any;
  value?: number
}

const limits = [10, 20, 30, 40, 50]

export function PaginationLimit ({ value = 10, onSelect }: PaginationLimitProps)  {
  return (
    <Input className='PaginationLimit' value={value} type='select' name='limit' onChange={(e) => onSelect(+e.currentTarget.value)}>
      {limits.map(n => (
        <option value={n}> {n} produtos por página</option>
      ))}
    </Input>
  )
}

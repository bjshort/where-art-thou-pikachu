import React from 'react';
import styled from 'styled-components';
import { Theme, getBreakpoint } from '../../theme';
import SearchIcon from './search.svg';

export default ({ onChange, onBlur, value, placeholder }: SearchProps) => {
  return (
    <SearchWrapper>
      <Icon />
      <StyledSearch
        placeholder={placeholder || 'Search'}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.currentTarget.value)
        }
        onBlur={onBlur}
        value={value}
      />
    </SearchWrapper>
  );
};

interface SearchProps {
  placeholder?: string;
  onChange: (input: any) => void;
  onBlur?: (input: any) => void;
  value: string;
}

const SearchWrapper = styled.div`
  position: relative;
`;

const Icon = styled.div`
  background: transparent url(${SearchIcon});
  position: absolute;
  height: 20px;
  width: 20px;
  margin: 12px 18px;
  z-index: 1;
`;

const StyledSearch = styled.input`
  background: #fff;
  color: ${Theme.colors.placeholder};
  border: none;
  box-sizing: border-box;
  border-radius: 24px;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
  font-size: 16px;
  margin: 0 0 16px;
  outline: none;
  position: relative;
  padding: 13px 24px;
  text-indent: 32px;
  width: 100%;

  ::placeholder {
    color: ${Theme.colors.placeholder};
  }

  @media screen and (min-width: ${getBreakpoint('lg')}) {
    margin: 0 0 40px;
  }
`;

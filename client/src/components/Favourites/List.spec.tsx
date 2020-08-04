import * as React from 'react';
import { ReactWrapper, mount, shallow } from 'enzyme';
import FavouritesList from './List';
import renderer from 'react-test-renderer';
// import 'jest-enzyme';
import 'jest-styled-components';
import { ThemeProvider } from 'styled-components';
import { Theme } from '../../theme';

let component: ReactWrapper;
const mockFavourites = [
  {
    id: 54,
    name: 'psyduck',
    description: {
      original: 'Quack',
      shakespeare: 'Quack',
    },
    imageUrl: 'https://com.image.png',
    height: '2.62',
    weight: '43.21',
    exp: 64,
  },
  {
    id: 143,
    name: 'snorlax',
    description: {
      original: 'zzz',
      shakespeare: 'zzz',
    },
    imageUrl: 'https://com.image.png',
    height: '6.89',
    weight: '1014.11',
    exp: 189,
  },
];

describe('FavouritesList', () => {
  it('should render', () => {
    const component = (
      <ThemeProvider theme={Theme}>
        <FavouritesList items={mockFavourites} />{' '}
      </ThemeProvider>
    );

    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

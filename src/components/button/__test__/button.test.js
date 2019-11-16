// file for test case scenarios
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Button from '../button';


it('render sin crashear el componente', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
});

it('el render debe de recibir el label como string', () => {
    // renders the button and expect to receive a testid value
    const { getByTestId } = render(<Button label='click' />);
    // call the id test and validate the props.label;
    expect(getByTestId('button')).toHaveTextContent('click');

});

it('El boton puede recibir numeros como label', () => {
    const { getByTestId } = render(<Button label={33} />);
    expect(getByTestId('button')).toBeInTheDocument(33);
});

// snapshot
it('El componente Button debe de hacer Match con el snapshot',() => {
    const template = renderer.create(<Button />).toJSON();
    expect(template).toMatchSnapshot();
});

it('El componente Button debe de hacer Match con el snapshot version 1',() => {
    const template = renderer.create(<Button label="version 1" />).toJSON();
    expect(template).toMatchSnapshot();
});
it('El componente Button debe de hacer Match con el snapshot version 2',() => {
    const template = renderer.create(<Button label="version 2" />).toJSON();
    expect(template).toMatchSnapshot();
});
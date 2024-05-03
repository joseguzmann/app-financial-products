import React from 'react';
import renderer from 'react-test-renderer';
import {ErrorComponent} from "@/components/error";

describe('ErrorComponent', () => {
    it('muestra el mensaje de error cuando hay un error', () => {
        const error = new Error('Este es un error');
        const tree = renderer.create(<ErrorComponent error={error} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('muestra un mensaje por defecto cuando no hay error', () => {
        const tree = renderer.create(<ErrorComponent error={null} />).toJSON();

        expect(tree).toMatchSnapshot();
    });
});

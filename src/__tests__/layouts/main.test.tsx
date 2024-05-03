import React from 'react';
import {create} from 'react-test-renderer';
import {Text} from 'react-native';
import {MainLayout} from "@/layouts/main";

describe('MainLayout Component', () => {
    it('matches the snapshot', () => {
        const component = create(
            <MainLayout>
                <Text>Snapshot Test</Text>
            </MainLayout>
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});

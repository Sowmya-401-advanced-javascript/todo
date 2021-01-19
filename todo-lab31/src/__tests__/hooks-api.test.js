import App from '../app';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

describe('Form', () => {
    test('Can add an item to the list', async () => {
        render(<App />);
        userEvent.type(await screen.getByTestId('todoItem'), 'Eat Dinner');
        userEvent.type(await screen.getByTestId('asignAsignee'), 'Harry');
        userEvent.click(await screen.getByTestId('submit'));
        let items = await waitFor(() => {
            screen.getAllByTestId('list-item');
        })
        expect(items[items, length - 1]).toStrictEqual('Eat Dinner');
    })
})
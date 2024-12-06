import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormElement } from '@/components/form-item';
import { describe, it } from 'vitest';

describe('App', () => {
  it('renders the App component', () => {
    render(<FormElement name="test" label="test" description="test" />);

    screen.debug(); // prints out the jsx in the App component unto the command line
  });
});

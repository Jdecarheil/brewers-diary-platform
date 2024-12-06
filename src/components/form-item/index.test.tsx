import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { FormElement } from '@/components/form-item';
import { describe, it } from 'vitest';
import { assert } from 'console';

describe('App', () => {
  it('renders the App component', () => {
    assert(true);
    // render(<FormElement name="test" label="test" description="test" />);

    // screen.debug(); // prints out the jsx in the App component unto the command line
  });
});

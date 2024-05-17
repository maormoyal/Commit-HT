import { render } from '@testing-library/react';

import FormPage from './Form';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormPage />);
    expect(baseElement).toBeTruthy();
  });
});

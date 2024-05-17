import { render } from '@testing-library/react';

import InputField from './InputField';

describe('Input', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputField type='text' name='test' />);
    expect(baseElement).toBeTruthy();
  });
});

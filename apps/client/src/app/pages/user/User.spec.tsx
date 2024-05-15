import { render } from '@testing-library/react';

import User from './User';

describe('User', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<User />);
    expect(baseElement).toBeTruthy();
  });
});

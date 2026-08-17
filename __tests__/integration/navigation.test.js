import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

// Mock des composants qui utilisent des hooks problématiques
jest.mock('../../components/Profile', () => () => <div>Profile Mock</div>);

describe('Navigation', () => {
  it('displays contact section', () => {
    render(<Home />);
    expect(screen.getByText('Contactez-moi')).toBeInTheDocument();
  });
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../src/pages/index';

// Mock des composants qui utilisent des hooks problématiques
jest.mock('../../components/About', () => () => <div>About Mock</div>);
jest.mock('../../components/Skills', () => () => <div>Skills Mock</div>);
jest.mock('../../components/CvSection', () => () => <div>CV Mock</div>);

describe('Navigation', () => {
  it('displays contact section', () => {
    render(<Home />);
    expect(screen.getByText('Contactez-moi')).toBeInTheDocument();
  });
});
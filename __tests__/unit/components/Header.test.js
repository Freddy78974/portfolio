import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header';

jest.mock('../../../src/styles/Header.module.css', () => ({}));

describe('Header Component', () => {
  it('renders the main headline', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Développeur full stack');
  });

  it('renders the terminal panel', () => {
    render(<Header />);
    expect(screen.getByText('whoami')).toBeInTheDocument();
  });
});
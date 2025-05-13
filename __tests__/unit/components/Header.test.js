import { render, screen } from '@testing-library/react';
import Header from '../../../components/Header';

jest.mock('../../../src/styles/Header.module.css', () => ({}));

describe('Header Component', () => {
  it('renders typing effect containers', () => {
    render(<Header />);
    expect(screen.getByTestId('typing-effect-h1')).toBeInTheDocument();
  });
});
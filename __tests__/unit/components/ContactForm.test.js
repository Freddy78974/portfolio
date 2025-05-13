import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '../../../components/ContactForm';

beforeAll(() => {
  delete window.location;
  window.location = { href: '', assign: jest.fn(), replace: jest.fn() };
});

describe('ContactForm', () => {
  it('should reset form after submission', async () => {
    jest.useFakeTimers();
    render(<ContactForm />);
    const user = userEvent.setup({ delay: null });

    await user.type(screen.getByLabelText(/nom/i), 'Test');
    await user.type(screen.getByLabelText(/email/i), 'test@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Ceci est un message.');

    await user.click(screen.getByRole('button', { name: /envoyer/i }));

    // Avancer les timers de 1000ms
    jest.advanceTimersByTime(1000);

    await waitFor(() => {
      expect(screen.getByLabelText(/nom/i).value).toBe('');
      expect(screen.getByLabelText(/email/i).value).toBe('');
      expect(screen.getByLabelText(/message/i).value).toBe('');
    });
  });
});

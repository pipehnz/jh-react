import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { VALID_CREDENTIAL, WRONG_CREDENTIAL } from '../../constants/mock-credential';

import LoginForm from '.';

const MAX_REQUIRED_MESSAGES = 2;

const onSubmit = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    render(<LoginForm onSubmit={onSubmit} />);
  });

  describe('when inputs have not been filled ', () => {
    it('should display required validation messages', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:login/ });

      userEvent.click(submitButton);

      const validationMessages = await screen.findAllByText(/Validations:required/);
      expect(validationMessages.length).toBe(MAX_REQUIRED_MESSAGES);
    });
  });

  describe('when some fields are invalid', () => {
    it('should display an error message for invalid email', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:login/ });

      userEvent.type(screen.getByLabelText(/Login:email/), WRONG_CREDENTIAL.email);
      userEvent.click(submitButton);

      const validationError = await screen.findByText(/Validations:email/);
      expect(validationError).toBeInTheDocument();
    });

    it('should onSubmit have not been called', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:login/ });
      userEvent.type(screen.getByLabelText('Login:password'), WRONG_CREDENTIAL.email);
      userEvent.click(submitButton);

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
    });
  });

  describe('when inputs are valid', () => {
    it('should onSubmit have been called', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:login/ });

      userEvent.type(screen.getByLabelText('Login:email'), VALID_CREDENTIAL.email);
      userEvent.type(screen.getByLabelText('Login:password'), VALID_CREDENTIAL.password);
      userEvent.click(submitButton);

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    });
  });
});

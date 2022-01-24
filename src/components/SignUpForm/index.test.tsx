import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { VALID_USER, WRONG_USER } from '../../constants/mock-user';

import SignUpForm from '.';

const MAX_REQUIRED_MESSAGES = 5;

const onSubmit = jest.fn();

describe('', () => {
  beforeEach(() => {
    // i18n.init();
    render(<SignUpForm onSubmit={onSubmit} />);
  });

  describe('when inputs have not been filled ', () => {
    it('should display required validation messages', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:signUp/ });

      userEvent.click(submitButton);

      const validationMessages = await screen.findAllByText(/Validations:required/);
      expect(validationMessages.length).toBe(MAX_REQUIRED_MESSAGES);
    });
  });

  describe('a', () => {
    it('should display an error message for invalid email', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:signUp/ });

      userEvent.type(screen.getByLabelText(/SignUp:email/), WRONG_USER.email);
      userEvent.click(submitButton);

      const validationError = await screen.findByText(/Validations:email/);
      expect(validationError).toBeInTheDocument();
    });

    it('should display a short password error message', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:signUp/ });

      userEvent.type(screen.getByLabelText('SignUp:password'), WRONG_USER.password);
      userEvent.click(submitButton);

      const validationError = await screen.findByText(/Validations:password/);
      expect(validationError).toBeInTheDocument();
    });

    it('should onSubmit have not been called', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:signUp/ });
      userEvent.type(screen.getByLabelText('SignUp:password'), WRONG_USER.email);
      userEvent.click(submitButton);

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => expect(onSubmit).not.toHaveBeenCalled());
    });
  });

  describe('when inputs are valid', () => {
    it('should onSubmit have been called', async () => {
      const submitButton = screen.getByRole('button', { name: /Buttons:signUp/ });

      userEvent.type(screen.getByLabelText('SignUp:firstName'), VALID_USER.firstName);
      userEvent.type(screen.getByLabelText('SignUp:lastName'), VALID_USER.lastName);
      userEvent.type(screen.getByLabelText('SignUp:email'), VALID_USER.email);
      userEvent.type(screen.getByLabelText('SignUp:password'), VALID_USER.password);
      userEvent.type(screen.getByLabelText('SignUp:passwordConfirmation'), VALID_USER.passwordConfirmation);
      userEvent.click(submitButton);

      // eslint-disable-next-line max-nested-callbacks
      await waitFor(() => expect(onSubmit).toHaveBeenCalled());
    });
  });
});

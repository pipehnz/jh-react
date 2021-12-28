import i18next from 'i18next';

i18next.addResources('es', 'Validations', {
  required: 'Campo requerido',
  email: 'El email no es válido',
  password: 'La contraseña debe de tener mínimo 8 carácteres, al menos una letra y un número',
  passwordConfirmation: 'La contraseñas no coinciden'
});

i18next.addResources('en', 'Validations', {
  required: 'Field required',
  email: 'Entered value does not match email format',
  password: 'Password must have a minimum of 8 characters, at least one letter and one number',
  passwordConfirmation: 'Passwords do not match'
});

i18next.addResources('es', 'SignUp', {
  firstName: 'Nombre',
  lastName: 'Apellido',
  email: 'Correo',
  password: 'Contraseña',
  passwordConfirmation: 'Confirmación de contraseña'
});

i18next.addResources('en', 'SignUp', {
  firstName: 'First Name',
  lastName: 'Last Name',
  email: 'Email',
  password: 'Password',
  passwordConfirmation: 'Password Confirmation'
});

i18next.addResources('es', 'Buttons', {
  signUp: 'Registrarse',
  login: 'Iniciar sesión'
});

i18next.addResources('en', 'Buttons', {
  signUp: 'Sign Up',
  login: 'Login'
});

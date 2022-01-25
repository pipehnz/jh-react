import i18next from 'i18next';

i18next.addResources('es', 'Validations', {
  required: 'Campo requerido',
  email: 'El formato del mail no es correcto',
  password: 'La contraseña debe de tener mínimo 8 carácteres, al menos una letra y un número',
  matchPassword: 'La contraseñas no coinciden'
});

i18next.addResources('en', 'Validations', {
  required: 'Field required',
  email: 'The e-mail format is not correct',
  password: 'Password must have a minimum of 8 characters, at least one letter and one number',
  matchPassword: 'Passwords do not match'
});

i18next.addResources('es', 'Buttons', {
  signUp: 'Registrarse',
  login: 'Iniciar sesión'
});

i18next.addResources('en', 'Buttons', {
  signUp: 'Sign Up',
  login: 'Login'
});

i18next.addResources('es', 'ErrorRequest', {
  network: 'Se ha presentado un problema al ejecutar la solicitud',
  notFound: 'Credenciales incorrectas'
});

i18next.addResources('en', 'ErrorRequest', {
  network: 'A problem occurred while executing the request',
  notFound: 'Incorrect credentials'
});

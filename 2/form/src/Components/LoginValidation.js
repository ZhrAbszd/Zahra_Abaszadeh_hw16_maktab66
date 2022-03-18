export const LoginValidation = (value) => {
  let validationEmail = false;
  let validationPassword = false;
  let errors = {};
  if (!value.email) {
      errors.email = " ایمیل را وارد کنید";
  } else {
      validationEmail = true;
  }
  if (!value.password) {
      errors.password = " کلمه عبور را وارد کنید";
  } else {
      validationPassword = true;
  }
  return errors;
}
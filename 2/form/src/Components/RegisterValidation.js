export const RegisterValidation = (value) => {
  let errors = {};
  if (!value.firstname) {
    errors.firstname = " نام را وارد کنید.";
  }
  if (!value.lastName) {
    errors.lastName = " نام خانوادگی را وارد کنید.";
  }
  if (!value.email) {
    errors.email = " ایمیل  را وارد کنید.";
  } 
  if (!value.password) {
    errors.password = " کلمه عبور را وارد کنید.";
  }
  if (!value.city) {
    errors.place = " محل زندگی  را انتخاب کنید.";
  }
  if (value.edu && !value.educationPlace) {
    errors.educationPlace = " محل تحصیل  را وارد کنید";
  }
  return errors;
};

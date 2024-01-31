export const checkSignupValidation = (email, name, username, password) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(
    email.current.value
  );
  const isPasswordValid = password.current.value.length >= 4 ? true : false;
  const isFullNameValid =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(
      name.current.value
    );
  if (!isEmailValid) return "Please enter correct email";

  if (!isFullNameValid) return "Please enter full name";

  if (!isPasswordValid) return "Please enter a valid password";

  if (!username.current.value) return "Please enter a username";
  return null;
};

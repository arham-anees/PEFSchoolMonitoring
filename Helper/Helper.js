export function isCnic(cnic) {
  try {
    let reg = cnic.match(/^[1-4]{1}[0-9]{4}(-)?[0-9]{7}(-)?[0-9]{1}$/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}
export function isPhoneValid(phone) {
  try {
    let reg = cnic.match(
      /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/
    );
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}
export function isEmailValid(phone) {
  try {
    let reg = cnic.match(/^[\w\.]+@([\w]+\.)+[\w-]{2,4}$/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}
export function isServiceNumberValid(serviceNumber) {
  try {
    return serviceNumber >= 1000 || serviceNumber <= 9999;
  } catch {
    return false;
  }
}
export function isQualificationValid(qaulification) {
  try {
    let regex = qaulification.match(/^[a-z]+$/);
    if (regex === null) return false;
    return regex[0] === regex.input;
  } catch {
    return false;
  }
}
export function isYearValid(year) {
  try {
    return year >= 1970 && year <= 2020;
  } catch {}
  return false;
}

export function isNameValid(institute) {
  try {
    let reg = institute.match(/[a-z\D]+$/);
    if (reg === null) return false;
    return reg[0] === reg.input;
  } catch {}
  return false;
}

export function isPasswordValid(password) {
  try {
    let reg = password.match(/.*[a-zA-Z0-9@.-]/);
    if (reg == null) return false;
    if (reg[0] === reg.input) return true;
  } catch {
    return false;
  }
  return false;
}

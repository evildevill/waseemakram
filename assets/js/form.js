function validateForm() {
  var email = document.getElementById("email").value;
  var pattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

  if (!pattern.test(email)) {
    alert("Please enter a valid Gmail address.");
    return false;
  }

  // Additional checks for disposable email domains
  var disposableDomains = [
    "mailinator.com",
    "guerrillamail.com",
    "temp-mail.org",
    "10minutemail.net",
    "dispostable.com",
    "mailnesia.com",
    "getnada.com",
  ]; // Add more domains as needed
  var domain = email.split("@")[1];
  if (disposableDomains.includes(domain)) {
    alert("Please use a non-disposable email address.");
    return false;
  }

  return true;
}

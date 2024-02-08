function setCookies() {
    const firstnameInput = document.getElementById('firstname');
    const emailInput = document.getElementById('email');
  
    const firstnameValue = firstnameInput.value;
    const emailValue = emailInput.value;
  
    document.cookie = `firstname=${firstnameValue};`;
    document.cookie = `email=${emailValue};`;
  
    // Optional: Clear input fields after setting cookies
    firstnameInput.value = '';
    emailInput.value = '';
  }
  
  function showCookies() {
    const cookiesParagraph = document.createElement('p');
    const cookiesText = document.createTextNode(`Cookies: ${document.cookie}`);
    
    cookiesParagraph.appendChild(cookiesText);
    document.body.appendChild(cookiesParagraph);
  }
  
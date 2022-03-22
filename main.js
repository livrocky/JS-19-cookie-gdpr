function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// setCookie("userId", "456", 10);

let sutinku;
if (!getCookie("userAgree")) {
  sutinku = confirm("Ar jus sutinkate su cookie policy?");
}

console.log("result===", sutinku);

if (sutinku === true) {
  setCookie("userAgree", "true", 10);
}

console.log("get", getCookie("userAgree"));

//GRAZIAU APSIRASIUS//

// function setCookie(cname, cvalue, exdays) {
//   const d = new Date();
//   d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//   let expires = `expires= ${d.toUTCString()}`;
//   document.cookie = `${cname} = ${cvalue$}; ${expires};path=/`;
// }

// setCookie("userId", "456", 1);

//__________________________________//

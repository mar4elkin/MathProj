function parseJwt (token) {
  let base64Url = token.split('.')[1];
  let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''))

  return JSON.parse(jsonPayload);
}

export function checkExpDate(token, callback) {
  return Date.now() >= parseJwt(token.access).exp * 1000;
}

export function setJwtToken(token) {
  if (token.access !== undefined) {
    localStorage.setItem('jwtToken', JSON.stringify(token))
  }

}

export function getJwtToken() {
  return JSON.parse(localStorage.getItem('jwtToken'))
}

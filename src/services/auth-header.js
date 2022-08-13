//8/8/2022
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.Token) {
      return { Authorization: 'Bearer ' + user.Token };
    } else {
      return {};
    }
}
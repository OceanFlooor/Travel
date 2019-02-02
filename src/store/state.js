let defaultCity = '夏羽'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}

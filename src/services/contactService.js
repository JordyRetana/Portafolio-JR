export const sendContactMessage = async (payload) => {
  const response = await fetch('https://portafolio-jr-backend.onrender.com/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  return response.json()
}
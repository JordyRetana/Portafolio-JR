export const sendContactMessage = async (payload) => {
  const response = await fetch('http://localhost:4000/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  })

  return response.json()
}
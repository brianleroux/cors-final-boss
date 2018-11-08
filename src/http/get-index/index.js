exports.handler = async function http(req) {
  return {
    cors: true,
    body: JSON.stringify({hi:'hello'})
  }
}

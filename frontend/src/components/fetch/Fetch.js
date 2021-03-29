async function Fetch(endpoint, method, body) {
  const config = {
    method: method,
    headers: { 'Content-Type': 'application/json' },
  }
  if(body) {
    config.body = JSON.stringify(body);
  }
  const call = await fetch(`${process.env.REACT_APP_PORT}${endpoint}`, config);
  const result = await call.json();
  if (call.status !== 200) {
    throw new Error(result);
  }
  return result;
}

export default Fetch;

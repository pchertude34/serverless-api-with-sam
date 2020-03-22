const RESPONSE_SCHEMA = {
  body: '',
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*'
  }
};

exports.handler = async (event, context, callback) => {
  const { httpMethod } = event;
  const response = { ...RESPONSE_SCHEMA };

  if (httpMethod === 'GET') response.body = 'GET request';
  else if (httpMethod === 'POST') response.body = 'POST request';
  else {
    response.statusCode = 405;
    response.body = 'Method not allowed';
  }

  return response;
};

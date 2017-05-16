/* global fetch */
const DOMAIN = 'http://ae185f3b.ngrok.io/';
const API_TOKEN = '1A4OLp2eq97LmrSBECYYpGateFMY6BLVeow70rz0ktM';

function getQuestions () {
  return fetch(`${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`)
    .then(function (res) { return res.json() });
}

function getQuestion (id) {
  return fetch(`${DOMAIN}/api/v1/questions/${id}?api_token=${API_TOKEN}`)
    .then(function (res) { return res.json() });
}

function postQuestion (questionParams) {
  return fetch(
    `${DOMAIN}/api/v1/questions?api_token=${API_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({question: questionParams})
    }
  );
}

export { getQuestions, getQuestion, postQuestion };

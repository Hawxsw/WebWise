import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.google.com/recaptcha/api',
  params: {
    secret: process.env.RECAPTCHA_KEY,
  },
});

const verify = async ({ captchaToken }: { captchaToken: string }) => {
  const { data } = await api.post('/siteverify', {
    params: {
      secret: process.env.RECAPTCHA_KEY,
      response: captchaToken,
    },
  });

  return data;
};

export const RecaptchaService = { api, verify };
import { rest } from 'msw';
import { cartMocked } from './mocks';

export const handlers = [
  rest.get('http://www.mocky.io/v2/5b15c4923100004a006f3c07', async (req, res, ctx) => {
    return res(ctx.json(cartMocked));
  })
];

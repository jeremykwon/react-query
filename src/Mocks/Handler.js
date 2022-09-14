// mocks/handler.js
import { rest } from 'msw';

// Todo - 요청 url 입력
const url = 'http://0.0.0.0:5000';

export const handlers = [
  rest.get(`${url}/api`, (req, res, ctx) => {
    return res(
			// Todo - 응답 데이터 정의
			ctx.delay(1000),
			ctx.status(200),
			ctx.json({
				id: 1,
				text: 'get 완료'
			}),
    );
  }),

	rest.post(`${url}/api/post`, (req, res, ctx) => {
    return res(
			ctx.delay(1300),
			ctx.status(200),
			ctx.json({
				id: 1,
				text: 'post 완료'
			}),
    );
  }),
];
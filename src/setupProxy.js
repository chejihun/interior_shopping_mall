// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // 프록시를 사용할 경로
    createProxyMiddleware({
      target: 'http://localhost:5000', // 실제 API 서버 주소
      changeOrigin: true, // 도메인이 다른 경우 필요
    })
  );
  
  app.use(
    '/images', // backend image 요청시..
    createProxyMiddleware({
      target: 'http://localhost:5000', // 실제 API 서버 주소
      changeOrigin: true, // 도메인이 다른 경우 필요
    })
  );

};
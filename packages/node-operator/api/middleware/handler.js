
const handler = fn => (request, response, next) => new Promise(resolve => {
  resolve(fn(request, response, next));
})
.then(res => {
  if (res) return response.status(res.status || 200).json({ ...res, status: undefined });
  // else next();
})
.catch(next);


const handlerV2 = fn => async (request, response, next) => await fn(request, response, next)
.then(res => response.status(res.status || 200).json(res))
.catch(err => {
  next(err);
});






module.exports = handler;
import statuses from 'statuses';

export default function errorHandler(err, req, res, next) {

  var status = err.status || err.statusCode || 500;
  if (status < 400) status = 500;
  res.statusCode = status;

  var body = {
    status: status
  };

  // TODO: show it only in dev mode.
  body.stack = err.stack;

  // internal server errors
  if (status >= 500) {
    console.error(err.stack);
    body.message = statuses[status];
    res.json(body);
    return;
  }

  // client errors
  body.message = err.message;

  if (err.code) body.code = err.code;
  if (err.name) body.name = err.name;
  if (err.type) body.type = err.type;

  res.json(body);

  return errorHandler;

}

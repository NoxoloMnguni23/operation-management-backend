export default {
  logger: {
    level: 'debug',
    transport: ['file', 'console'],
    exceptionFile: 'logs/exception.log',
    logFile: 'logs/console.log',
  },
  middlewares: {
    pre: [
      { ids: 'hrefstart' },
      { __ssdGlobalMiddlewares__: 'sd_7EmxxOk703exD5hF' },
      { __ssdGlobalMiddlewares__: 'cors' },
    ],
    post: [],
    sequences: { IDSAuthroizedAPIs: { pre: [{ ids: 'Authorize' }], post: [] } },
  },
  ids: {
    client_id: 'oJWggdhFcbRnoNJXCWsiC',
    client_secret:
      'MJ7SqUBtaw1O88Ms7f-4AlR-TlaUGDaG29CWFeZxM4uFI8yWpSBB9TmRREjtt4i3jE11xdnQRjzNofG9lAb3rA',
    issuerURL: 'https://ids.neutrinos.co',
    enabled: true,
  },
};

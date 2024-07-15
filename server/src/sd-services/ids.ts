// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_as0c1Y3iM32xhDSh from './idsutil'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_YNGw4Hx5RLcZ056c(bh, parentSpanInst);
          //appendnew_next_sd_F9gcHwe2zd6qUfRe
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_F9gcHwe2zd6qUfRe');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_sFjS4P75WvEVJhxl(bh, parentSpanInst);
          //appendnew_next_sd_ogU3k2y2GpBFzSI6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ogU3k2y2GpBFzSI6');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_wK7iwErESD1r7V0A(bh, parentSpanInst);
          //appendnew_next_sd_46PcvGndG9KJvWpT
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_46PcvGndG9KJvWpT');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_8yGlidV9KwNehtUJ(bh, parentSpanInst);
          //appendnew_next_sd_35H91gfVgTjwbPSi
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_35H91gfVgTjwbPSi');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_oDndV2B8F6uxSz9t(bh, parentSpanInst);
          //appendnew_next_sd_micnJxARAIh19UF2
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_micnJxARAIh19UF2');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_wdgGlL7ZiReiKIqp(bh, parentSpanInst);
          //appendnew_next_sd_RTAc6c2PjCjRrTqp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_RTAc6c2PjCjRrTqp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_4vydmdJMkXS9vdLb(bh, parentSpanInst);
          //appendnew_next_sd_1ZNM3uJzauqJSANy
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_1ZNM3uJzauqJSANy');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_wK7iwErESD1r7V0A(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wK7iwErESD1r7V0A',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_fgGJshTW53nDyYcM(bh, parentSpanInst);
      //appendnew_next_sd_wK7iwErESD1r7V0A
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wK7iwErESD1r7V0A',
        spanInst,
        'sd_wK7iwErESD1r7V0A'
      );
    }
  }

  async sd_fgGJshTW53nDyYcM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fgGJshTW53nDyYcM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_if4Yp2kh7e2CFNBe(bh, parentSpanInst);
      } else {
        bh = await this.sd_iCd9Wvylaw641HKm(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fgGJshTW53nDyYcM',
        spanInst,
        'sd_fgGJshTW53nDyYcM'
      );
    }
  }

  async sd_if4Yp2kh7e2CFNBe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_if4Yp2kh7e2CFNBe',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_28dPkEwZxRvxX8UN(bh, parentSpanInst);
      //appendnew_next_sd_if4Yp2kh7e2CFNBe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_if4Yp2kh7e2CFNBe',
        spanInst,
        'sd_if4Yp2kh7e2CFNBe'
      );
    }
  }

  async sd_28dPkEwZxRvxX8UN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_28dPkEwZxRvxX8UN',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_721nV6aduAzuLSlo(bh, parentSpanInst);
      //appendnew_next_sd_28dPkEwZxRvxX8UN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_28dPkEwZxRvxX8UN',
        spanInst,
        'sd_28dPkEwZxRvxX8UN'
      );
    }
  }

  async sd_721nV6aduAzuLSlo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_721nV6aduAzuLSlo',
      parentSpanInst
    );
    try {
      const sd_as0c1Y3iM32xhDShInstance: sd_as0c1Y3iM32xhDSh.idsutil =
        sd_as0c1Y3iM32xhDSh.idsutil.getInstance();
      let outputVariables =
        await sd_as0c1Y3iM32xhDShInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_G0dSiamVd7D8eYVN(bh, parentSpanInst);
      //appendnew_next_sd_721nV6aduAzuLSlo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_721nV6aduAzuLSlo',
        spanInst,
        'sd_721nV6aduAzuLSlo'
      );
    }
  }

  async sd_G0dSiamVd7D8eYVN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_G0dSiamVd7D8eYVN',
      parentSpanInst
    );
    try {
      const sd_as0c1Y3iM32xhDShInstance: sd_as0c1Y3iM32xhDSh.idsutil =
        sd_as0c1Y3iM32xhDSh.idsutil.getInstance();
      let outputVariables =
        await sd_as0c1Y3iM32xhDShInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EBORmME8TUNcwvU9(bh, parentSpanInst);
      //appendnew_next_sd_G0dSiamVd7D8eYVN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_G0dSiamVd7D8eYVN',
        spanInst,
        'sd_G0dSiamVd7D8eYVN'
      );
    }
  }

  async sd_EBORmME8TUNcwvU9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EBORmME8TUNcwvU9',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_KHOMhNxtRq40WcQx(bh, parentSpanInst);
      //appendnew_next_sd_EBORmME8TUNcwvU9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EBORmME8TUNcwvU9',
        spanInst,
        'sd_EBORmME8TUNcwvU9'
      );
    }
  }

  async sd_KHOMhNxtRq40WcQx(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_KHOMhNxtRq40WcQx');
    }
  }

  async sd_iCd9Wvylaw641HKm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iCd9Wvylaw641HKm',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_6YCMYPl5vSh3Tt1k(bh, parentSpanInst);
      //appendnew_next_sd_iCd9Wvylaw641HKm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iCd9Wvylaw641HKm',
        spanInst,
        'sd_iCd9Wvylaw641HKm'
      );
    }
  }

  async sd_6YCMYPl5vSh3Tt1k(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_6YCMYPl5vSh3Tt1k');
    }
  }

  async sd_YNGw4Hx5RLcZ056c(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YNGw4Hx5RLcZ056c',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ZRnLAEJgL0DTJSmo(bh, parentSpanInst);
      //appendnew_next_sd_YNGw4Hx5RLcZ056c
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YNGw4Hx5RLcZ056c',
        spanInst,
        'sd_YNGw4Hx5RLcZ056c'
      );
    }
  }

  async sd_ZRnLAEJgL0DTJSmo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZRnLAEJgL0DTJSmo',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZRnLAEJgL0DTJSmo',
        spanInst,
        'sd_ZRnLAEJgL0DTJSmo'
      );
    }
  }

  async sd_8yGlidV9KwNehtUJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8yGlidV9KwNehtUJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VcVADR0aAIo3JsUY(bh, parentSpanInst);
      //appendnew_next_sd_8yGlidV9KwNehtUJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8yGlidV9KwNehtUJ',
        spanInst,
        'sd_8yGlidV9KwNehtUJ'
      );
    }
  }

  async sd_VcVADR0aAIo3JsUY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VcVADR0aAIo3JsUY',
      parentSpanInst
    );
    try {
      const sd_as0c1Y3iM32xhDShInstance: sd_as0c1Y3iM32xhDSh.idsutil =
        sd_as0c1Y3iM32xhDSh.idsutil.getInstance();
      let outputVariables =
        await sd_as0c1Y3iM32xhDShInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_RpWi8AkEGL8oJDzJ(bh, parentSpanInst);
      //appendnew_next_sd_VcVADR0aAIo3JsUY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VcVADR0aAIo3JsUY',
        spanInst,
        'sd_VcVADR0aAIo3JsUY'
      );
    }
  }

  async sd_RpWi8AkEGL8oJDzJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RpWi8AkEGL8oJDzJ',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DRHaBVSNY5YEe3To(bh, parentSpanInst);
      //appendnew_next_sd_RpWi8AkEGL8oJDzJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RpWi8AkEGL8oJDzJ',
        spanInst,
        'sd_RpWi8AkEGL8oJDzJ'
      );
    }
  }

  async sd_DRHaBVSNY5YEe3To(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DRHaBVSNY5YEe3To',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_MufuFG9xtgZ0BlIf(bh, parentSpanInst);
      //appendnew_next_sd_DRHaBVSNY5YEe3To
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DRHaBVSNY5YEe3To',
        spanInst,
        'sd_DRHaBVSNY5YEe3To'
      );
    }
  }

  async sd_MufuFG9xtgZ0BlIf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_MufuFG9xtgZ0BlIf',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_lqcOO0QhCdAOH5NO(bh, parentSpanInst);
      } else {
        bh = await this.sd_wYAYldj7m0ithL5g(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_MufuFG9xtgZ0BlIf',
        spanInst,
        'sd_MufuFG9xtgZ0BlIf'
      );
    }
  }

  async sd_lqcOO0QhCdAOH5NO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lqcOO0QhCdAOH5NO',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_RpgrP2J0HOLY7yEW(bh, parentSpanInst);
      //appendnew_next_sd_lqcOO0QhCdAOH5NO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lqcOO0QhCdAOH5NO',
        spanInst,
        'sd_lqcOO0QhCdAOH5NO'
      );
    }
  }

  async sd_RpgrP2J0HOLY7yEW(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_RpgrP2J0HOLY7yEW');
    }
  }

  async sd_wYAYldj7m0ithL5g(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wYAYldj7m0ithL5g',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lIHhU3wa1VfX4XoZ(bh, parentSpanInst);
      //appendnew_next_sd_wYAYldj7m0ithL5g
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wYAYldj7m0ithL5g',
        spanInst,
        'sd_wYAYldj7m0ithL5g'
      );
    }
  }

  async sd_lIHhU3wa1VfX4XoZ(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lIHhU3wa1VfX4XoZ');
    }
  }

  async sd_oDndV2B8F6uxSz9t(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oDndV2B8F6uxSz9t',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_yG956kvdFbjoa6b3(bh, parentSpanInst);
      //appendnew_next_sd_oDndV2B8F6uxSz9t
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oDndV2B8F6uxSz9t',
        spanInst,
        'sd_oDndV2B8F6uxSz9t'
      );
    }
  }

  async sd_yG956kvdFbjoa6b3(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_yG956kvdFbjoa6b3');
    }
  }

  async sd_ZbAywHESTXqNTeWF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZbAywHESTXqNTeWF',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_ZbAywHESTXqNTeWF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZbAywHESTXqNTeWF',
        spanInst,
        'sd_ZbAywHESTXqNTeWF'
      );
    }
  }

  async sd_wdgGlL7ZiReiKIqp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wdgGlL7ZiReiKIqp',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UafccmWAJn7oo8k7(bh, parentSpanInst);
      //appendnew_next_sd_wdgGlL7ZiReiKIqp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wdgGlL7ZiReiKIqp',
        spanInst,
        'sd_wdgGlL7ZiReiKIqp'
      );
    }
  }

  async sd_UafccmWAJn7oo8k7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UafccmWAJn7oo8k7',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qpdqwW5z1r6hB4bo(bh, parentSpanInst);
      //appendnew_next_sd_UafccmWAJn7oo8k7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UafccmWAJn7oo8k7',
        spanInst,
        'sd_UafccmWAJn7oo8k7'
      );
    }
  }

  async sd_qpdqwW5z1r6hB4bo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qpdqwW5z1r6hB4bo',
      parentSpanInst
    );
    try {
      const sd_as0c1Y3iM32xhDShInstance: sd_as0c1Y3iM32xhDSh.idsutil =
        sd_as0c1Y3iM32xhDSh.idsutil.getInstance();
      let outputVariables =
        await sd_as0c1Y3iM32xhDShInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_9IhjotV4Ld0yLRxQ(bh, parentSpanInst);
      //appendnew_next_sd_qpdqwW5z1r6hB4bo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qpdqwW5z1r6hB4bo',
        spanInst,
        'sd_qpdqwW5z1r6hB4bo'
      );
    }
  }

  async sd_9IhjotV4Ld0yLRxQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9IhjotV4Ld0yLRxQ',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_H1PNWLrM8tu6c56D(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_eFcCmZaybqJ5rkbL(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9IhjotV4Ld0yLRxQ',
        spanInst,
        'sd_9IhjotV4Ld0yLRxQ'
      );
    }
  }

  async sd_H1PNWLrM8tu6c56D(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_H1PNWLrM8tu6c56D',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_H1PNWLrM8tu6c56D
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_H1PNWLrM8tu6c56D',
        spanInst,
        'sd_H1PNWLrM8tu6c56D'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_okZ1YYgTTs3On3P7(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_okZ1YYgTTs3On3P7(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_okZ1YYgTTs3On3P7');
    }
  }

  async sd_eFcCmZaybqJ5rkbL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_eFcCmZaybqJ5rkbL',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_okZ1YYgTTs3On3P7(bh, parentSpanInst);
      //appendnew_next_sd_eFcCmZaybqJ5rkbL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_eFcCmZaybqJ5rkbL',
        spanInst,
        'sd_eFcCmZaybqJ5rkbL'
      );
    }
  }

  async sd_4vydmdJMkXS9vdLb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4vydmdJMkXS9vdLb',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VGncPEyomkZIrNIT(bh, parentSpanInst);
      //appendnew_next_sd_4vydmdJMkXS9vdLb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4vydmdJMkXS9vdLb',
        spanInst,
        'sd_4vydmdJMkXS9vdLb'
      );
    }
  }

  async sd_VGncPEyomkZIrNIT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VGncPEyomkZIrNIT',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RbmdUz5n37p5nFPN(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_6so5xDgqJzVdMh9n(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VGncPEyomkZIrNIT',
        spanInst,
        'sd_VGncPEyomkZIrNIT'
      );
    }
  }

  async sd_RbmdUz5n37p5nFPN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RbmdUz5n37p5nFPN',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_TGwPXEH04oleP0f1(bh, parentSpanInst);
      //appendnew_next_sd_RbmdUz5n37p5nFPN
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RbmdUz5n37p5nFPN',
        spanInst,
        'sd_RbmdUz5n37p5nFPN'
      );
    }
  }

  async sd_TGwPXEH04oleP0f1(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_TGwPXEH04oleP0f1');
    }
  }

  async sd_6so5xDgqJzVdMh9n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6so5xDgqJzVdMh9n',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xWYOt2ngA7OTRORf(bh, parentSpanInst);
      //appendnew_next_sd_6so5xDgqJzVdMh9n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6so5xDgqJzVdMh9n',
        spanInst,
        'sd_6so5xDgqJzVdMh9n'
      );
    }
  }

  async sd_xWYOt2ngA7OTRORf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xWYOt2ngA7OTRORf',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_T2qOofmZppZYaW6f(bh, parentSpanInst);
      //appendnew_next_sd_xWYOt2ngA7OTRORf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xWYOt2ngA7OTRORf',
        spanInst,
        'sd_xWYOt2ngA7OTRORf'
      );
    }
  }

  async sd_T2qOofmZppZYaW6f(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_T2qOofmZppZYaW6f',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_9gclrS9AG80kcaC6(bh, parentSpanInst);
      } else {
        bh = await this.sd_QCk6xAd2d8rJE6LF(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T2qOofmZppZYaW6f',
        spanInst,
        'sd_T2qOofmZppZYaW6f'
      );
    }
  }

  async sd_9gclrS9AG80kcaC6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_9gclrS9AG80kcaC6',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_8AolfBUNtKVIXNMd(bh, parentSpanInst);
      //appendnew_next_sd_9gclrS9AG80kcaC6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_9gclrS9AG80kcaC6',
        spanInst,
        'sd_9gclrS9AG80kcaC6'
      );
    }
  }

  async sd_8AolfBUNtKVIXNMd(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_8AolfBUNtKVIXNMd');
    }
  }

  async sd_QCk6xAd2d8rJE6LF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QCk6xAd2d8rJE6LF',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_FaLkL1xpfZKoP53t(bh, parentSpanInst);
      //appendnew_next_sd_QCk6xAd2d8rJE6LF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QCk6xAd2d8rJE6LF',
        spanInst,
        'sd_QCk6xAd2d8rJE6LF'
      );
    }
  }

  async sd_FaLkL1xpfZKoP53t(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_FaLkL1xpfZKoP53t');
    }
  }

  async sd_sFjS4P75WvEVJhxl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sFjS4P75WvEVJhxl',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_h9Z8GDkNDiy1o7Io(bh, parentSpanInst);
      //appendnew_next_sd_sFjS4P75WvEVJhxl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sFjS4P75WvEVJhxl',
        spanInst,
        'sd_sFjS4P75WvEVJhxl'
      );
    }
  }

  async sd_h9Z8GDkNDiy1o7Io(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_h9Z8GDkNDiy1o7Io',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sQhs4mruNp7D5hhK(bh, parentSpanInst);
      //appendnew_next_sd_h9Z8GDkNDiy1o7Io
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_h9Z8GDkNDiy1o7Io',
        spanInst,
        'sd_h9Z8GDkNDiy1o7Io'
      );
    }
  }

  async sd_sQhs4mruNp7D5hhK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sQhs4mruNp7D5hhK',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aeq8hYmPJDPEgstT(bh, parentSpanInst);
      //appendnew_next_sd_sQhs4mruNp7D5hhK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sQhs4mruNp7D5hhK',
        spanInst,
        'sd_sQhs4mruNp7D5hhK'
      );
    }
  }

  async sd_aeq8hYmPJDPEgstT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aeq8hYmPJDPEgstT',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_xKtaZNuSzVXWZVCw(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_3wZpRuUCT8tOjkNq(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aeq8hYmPJDPEgstT',
        spanInst,
        'sd_aeq8hYmPJDPEgstT'
      );
    }
  }

  async sd_xKtaZNuSzVXWZVCw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xKtaZNuSzVXWZVCw',
      parentSpanInst
    );
    try {
      const sd_as0c1Y3iM32xhDShInstance: sd_as0c1Y3iM32xhDSh.idsutil =
        sd_as0c1Y3iM32xhDSh.idsutil.getInstance();
      let outputVariables = await sd_as0c1Y3iM32xhDShInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Fkz3xbOk3YnMZgDg(bh, parentSpanInst);
      //appendnew_next_sd_xKtaZNuSzVXWZVCw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xKtaZNuSzVXWZVCw',
        spanInst,
        'sd_xKtaZNuSzVXWZVCw'
      );
    }
  }

  async sd_Fkz3xbOk3YnMZgDg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Fkz3xbOk3YnMZgDg',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RjnHtJUgp8l8VhYj(bh, parentSpanInst);
      } else {
        bh = await this.sd_fvTfg1tU48AJIhuM(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Fkz3xbOk3YnMZgDg',
        spanInst,
        'sd_Fkz3xbOk3YnMZgDg'
      );
    }
  }

  async sd_RjnHtJUgp8l8VhYj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RjnHtJUgp8l8VhYj',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_t4WQbyb6hiEpAjja(bh, parentSpanInst);
      //appendnew_next_sd_RjnHtJUgp8l8VhYj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RjnHtJUgp8l8VhYj',
        spanInst,
        'sd_RjnHtJUgp8l8VhYj'
      );
    }
  }

  async sd_t4WQbyb6hiEpAjja(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_t4WQbyb6hiEpAjja',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5JoRZgawlvZ4lUxn(bh, parentSpanInst);
      //appendnew_next_sd_t4WQbyb6hiEpAjja
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_t4WQbyb6hiEpAjja',
        spanInst,
        'sd_t4WQbyb6hiEpAjja'
      );
    }
  }

  async sd_5JoRZgawlvZ4lUxn(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5JoRZgawlvZ4lUxn');
    }
  }

  async sd_fvTfg1tU48AJIhuM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fvTfg1tU48AJIhuM',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_De9F8flJayfbwLht(bh, parentSpanInst);
      } else {
        bh = await this.sd_PzmJ7hoV9HDCDc7O(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fvTfg1tU48AJIhuM',
        spanInst,
        'sd_fvTfg1tU48AJIhuM'
      );
    }
  }

  async sd_De9F8flJayfbwLht(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_De9F8flJayfbwLht',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Z3bNAoBVHPALjYwY(bh, parentSpanInst);
      //appendnew_next_sd_De9F8flJayfbwLht
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_De9F8flJayfbwLht',
        spanInst,
        'sd_De9F8flJayfbwLht'
      );
    }
  }

  async sd_Z3bNAoBVHPALjYwY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z3bNAoBVHPALjYwY',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_PzmJ7hoV9HDCDc7O(bh, parentSpanInst);
      //appendnew_next_sd_Z3bNAoBVHPALjYwY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z3bNAoBVHPALjYwY',
        spanInst,
        'sd_Z3bNAoBVHPALjYwY'
      );
    }
  }

  async sd_PzmJ7hoV9HDCDc7O(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PzmJ7hoV9HDCDc7O',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PzmJ7hoV9HDCDc7O',
        spanInst,
        'sd_PzmJ7hoV9HDCDc7O'
      );
    }
  }

  async sd_3wZpRuUCT8tOjkNq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3wZpRuUCT8tOjkNq',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_q4dGDy6PhHmh7L4p(bh, parentSpanInst);
      } else {
        bh = await this.sd_BWwTZNWqUEhm2wu3(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3wZpRuUCT8tOjkNq',
        spanInst,
        'sd_3wZpRuUCT8tOjkNq'
      );
    }
  }

  async sd_q4dGDy6PhHmh7L4p(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_q4dGDy6PhHmh7L4p',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5JoRZgawlvZ4lUxn(bh, parentSpanInst);
      //appendnew_next_sd_q4dGDy6PhHmh7L4p
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_q4dGDy6PhHmh7L4p',
        spanInst,
        'sd_q4dGDy6PhHmh7L4p'
      );
    }
  }

  async sd_BWwTZNWqUEhm2wu3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_BWwTZNWqUEhm2wu3',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5JoRZgawlvZ4lUxn(bh, parentSpanInst);
      //appendnew_next_sd_BWwTZNWqUEhm2wu3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_BWwTZNWqUEhm2wu3',
        spanInst,
        'sd_BWwTZNWqUEhm2wu3'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_wioL3r4bakMDELxG(bh, parentSpanInst)) ||
      (await this.sd_0yhHitSpW86m8acB(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_wioL3r4bakMDELxG(bh, parentSpanInst) {
    const nodes = [
      'sd_G0dSiamVd7D8eYVN',
      'sd_35H91gfVgTjwbPSi',
      'sd_VcVADR0aAIo3JsUY',
      'sd_RpWi8AkEGL8oJDzJ',
      'sd_8yGlidV9KwNehtUJ',
      'sd_MufuFG9xtgZ0BlIf',
      'sd_lqcOO0QhCdAOH5NO',
      'sd_wYAYldj7m0ithL5g',
      'sd_RpgrP2J0HOLY7yEW',
      'sd_lIHhU3wa1VfX4XoZ',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_ZbAywHESTXqNTeWF(bh, parentSpanInst);
      //appendnew_next_sd_wioL3r4bakMDELxG
      return true;
    }
    return false;
  }
  async sd_0yhHitSpW86m8acB(bh, parentSpanInst) {
    const nodes = ['sd_xKtaZNuSzVXWZVCw'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_t4WQbyb6hiEpAjja(bh, parentSpanInst);
      //appendnew_next_sd_0yhHitSpW86m8acB
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}

// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
import * as SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH from './check_If_Exist'; //_splitter_
//append_imports_end
export class budget {
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
    this.serviceName = 'budget';
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
      instance = new budget(
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
    //appendnew_flow_budget_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: budget');
    //appendnew_flow_budget_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: budget');

    this.app['post'](
      `${this.serviceBasePath}/add-budget`,
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
          bh = await this.sd_IDFAuaOfSGXRv0ai(bh, parentSpanInst);
          //appendnew_next_sd_gF08MNw4SN5zBKyt
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_gF08MNw4SN5zBKyt');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-budget/:dateUpload`,
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
          bh = await this.sd_EUCHhxbQxcRHSqzU(bh, parentSpanInst);
          //appendnew_next_sd_fo6SnfxXCvjHOBfU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fo6SnfxXCvjHOBfU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_budget_HttpIn
  }
  //   service flows_budget

  //appendnew_flow_budget_start

  async sd_IDFAuaOfSGXRv0ai(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IDFAuaOfSGXRv0ai',
      parentSpanInst
    );
    try {
      bh.budget = {
        collection: 'budget',
      };

      bh.input.body['dateUpload'] =
        new Date().getFullYear() + '-' + new Date().getMonth();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_31P6ZRVW156Fil4N(bh, parentSpanInst);
      //appendnew_next_sd_IDFAuaOfSGXRv0ai
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IDFAuaOfSGXRv0ai',
        spanInst,
        'sd_IDFAuaOfSGXRv0ai'
      );
    }
  }

  async sd_31P6ZRVW156Fil4N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_31P6ZRVW156Fil4N',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_qC5Zfy7LJYHmxiFv',
        bh.budget.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_5U6YzdfhWcmIzoN4(bh, parentSpanInst);
      //appendnew_next_sd_31P6ZRVW156Fil4N
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_31P6ZRVW156Fil4N',
        spanInst,
        'sd_31P6ZRVW156Fil4N'
      );
    }
  }

  async sd_5U6YzdfhWcmIzoN4(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_5U6YzdfhWcmIzoN4');
    }
  }

  async sd_EUCHhxbQxcRHSqzU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EUCHhxbQxcRHSqzU',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'budget',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XBaowDKCqcqEsiaW(bh, parentSpanInst);
      //appendnew_next_sd_EUCHhxbQxcRHSqzU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EUCHhxbQxcRHSqzU',
        spanInst,
        'sd_EUCHhxbQxcRHSqzU'
      );
    }
  }

  async sd_XBaowDKCqcqEsiaW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XBaowDKCqcqEsiaW',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZHInstance: SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH.check_If_Exist =
        SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH.check_If_Exist.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZHInstance.checkIfExist(
          spanInst,
          bh.search
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Os2S07eALISUhqc3(bh, parentSpanInst);
      //appendnew_next_sd_XBaowDKCqcqEsiaW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XBaowDKCqcqEsiaW',
        spanInst,
        'sd_XBaowDKCqcqEsiaW'
      );
    }
  }

  async sd_Os2S07eALISUhqc3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Os2S07eALISUhqc3',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.result,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ccai8j555bqv4Nr3(bh, parentSpanInst);
      } else {
        bh = await this.sd_kBWSWcAVTOkRN6yw(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Os2S07eALISUhqc3',
        spanInst,
        'sd_Os2S07eALISUhqc3'
      );
    }
  }

  async sd_ccai8j555bqv4Nr3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ccai8j555bqv4Nr3',
      parentSpanInst
    );
    try {
      bh.result = bh.result;

      bh.query = bh.input.params;
      console.log('params', bh.query);

      bh.data = bh.result.map((_data) => {
        return _data.dateUpload;
      });

      bh.data.forEach((item, i) => {
        if (item == bh.query.dateUpload) {
          console.log('Found', bh.result[i]);
          bh.result = bh.result[i];
          bh.status = 200;
        } else {
          console.log('this months budget is not found');
          bh.status = 404;
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_EuNVuAaWrSkB4SyX(bh, parentSpanInst);
      //appendnew_next_sd_ccai8j555bqv4Nr3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ccai8j555bqv4Nr3',
        spanInst,
        'sd_ccai8j555bqv4Nr3'
      );
    }
  }

  async sd_EuNVuAaWrSkB4SyX(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_EuNVuAaWrSkB4SyX');
    }
  }

  async sd_kBWSWcAVTOkRN6yw(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_kBWSWcAVTOkRN6yw',
      parentSpanInst
    );
    try {
      bh.status = 404;

      this.tracerService.sendData(spanInst, bh);
      await this.sd_EuNVuAaWrSkB4SyX(bh, parentSpanInst);
      //appendnew_next_sd_kBWSWcAVTOkRN6yw
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_kBWSWcAVTOkRN6yw',
        spanInst,
        'sd_kBWSWcAVTOkRN6yw'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_budget_Catch
}

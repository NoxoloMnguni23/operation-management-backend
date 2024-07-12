// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
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

    this.app['put'](
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
      `${this.serviceBasePath}/get-budget`,
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

    this.app['get'](
      `${this.serviceBasePath}/get-budget/:year`,
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
          bh = await this.sd_5p3uY1F7nfLItdpH(bh, parentSpanInst);
          //appendnew_next_sd_jOQkNE2rKbA32hfR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_jOQkNE2rKbA32hfR');
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

  async checkIfExist(parentSpanInst, searchObj: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'checkIfExist',
      parentSpanInst
    );
    let bh: any = {
      input: {
        searchObj,
      },
      local: {
        result: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_olF3s2y3zm43hvEn(bh, parentSpanInst);
      //appendnew_next_checkIfExist
      return (
        // formatting output variables
        {
          input: {},
          local: {
            result: bh.local.result,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0U7zVI5Pup5AaE4F',
        spanInst,
        'checkIfExist'
      );
    }
  }
  //appendnew_flow_budget_start

  async sd_IDFAuaOfSGXRv0ai(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IDFAuaOfSGXRv0ai',
      parentSpanInst
    );
    try {
      bh.year = { year: new Date().getUTCFullYear() };

      bh.search = {
        collection: 'budget',
        query: bh.year,
      };

      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      bh.input.body['dateAdded'] = new Date().toLocaleDateString();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_gAvb9kHRPreXVK7b(bh, parentSpanInst);
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

  async sd_gAvb9kHRPreXVK7b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_gAvb9kHRPreXVK7b',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.budget = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3zsEbBRFNmFa8Xn0(bh, parentSpanInst);
      //appendnew_next_sd_gAvb9kHRPreXVK7b
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gAvb9kHRPreXVK7b',
        spanInst,
        'sd_gAvb9kHRPreXVK7b'
      );
    }
  }

  async sd_3zsEbBRFNmFa8Xn0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3zsEbBRFNmFa8Xn0',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.budget,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_8TigI68lJ1j9fswG(bh, parentSpanInst);
      } else {
        bh = await this.sd_ItRLVRrvOGXeK1nt(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3zsEbBRFNmFa8Xn0',
        spanInst,
        'sd_3zsEbBRFNmFa8Xn0'
      );
    }
  }

  async sd_8TigI68lJ1j9fswG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8TigI68lJ1j9fswG',
      parentSpanInst
    );
    try {
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      bh.input.body['dateAdded'] = new Date().toLocaleDateString();

      let currentMonth =
        months[bh.input.body.month] + ' - ' + new Date().getUTCFullYear();
      console.log('Body: ', bh.input.body);
      console.log('Months: ', currentMonth);

      bh.year = { year: new Date().getUTCFullYear() };
      let year = bh.year;
      console.log('Year: ', bh.year);

      bh.data = [
        {
          dateUpload: new Date().toLocaleDateString(),
          month: months[bh.input.body.month],
          amount: bh.input.body.amount,
        },
      ];

      let objData = {};

      objData.year = new Date().getFullYear();
      objData.budget = bh.data;
      console.log('Budget data: ', objData);

      bh.res = { $set: objData };

      bh.option = {
        upsert: true,
      };

      bh.code = 201;

      console.log('Budget: ', bh.budget);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_31P6ZRVW156Fil4N(bh, parentSpanInst);
      //appendnew_next_sd_8TigI68lJ1j9fswG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8TigI68lJ1j9fswG',
        spanInst,
        'sd_8TigI68lJ1j9fswG'
      );
    }
  }

  async sd_31P6ZRVW156Fil4N(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_31P6ZRVW156Fil4N',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().findOneAndUpdate(
        'sd_qC5Zfy7LJYHmxiFv',
        bh.search.collection,
        bh.search.query,
        bh.res,
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

  async sd_ItRLVRrvOGXeK1nt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ItRLVRrvOGXeK1nt',
      parentSpanInst
    );
    try {
      let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];

      bh.input.body['dateAdded'] = new Date().toLocaleDateString();

      bh.year = { year: new Date().getUTCFullYear() };
      let year = bh.year;
      console.log('Year: ', bh.year);

      bh.data = {
        dateUpload: new Date().toLocaleDateString(),
        month: months[bh.input.body.month],
        amount: bh.input.body.amount,
      };

      console.log('Found budget: ', bh.budget);

      bh.budget = bh.budget[0];

      console.log('After Update 1: ', bh.budget);

      bh.budget.budget.push(bh.data);

      console.log('After Update 2: ', bh.budget);

      bh.res = bh.budget;

      bh.code = 201;

      bh.option = {
        upsert: true,
      };

      bh.res = { $set: bh.budget };

      console.log('Else');
      console.log(bh.data);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_31P6ZRVW156Fil4N(bh, parentSpanInst);
      //appendnew_next_sd_ItRLVRrvOGXeK1nt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ItRLVRrvOGXeK1nt',
        spanInst,
        'sd_ItRLVRrvOGXeK1nt'
      );
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
        query: bh.year,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_etWvFXyKMezM65wW(bh, parentSpanInst);
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

  async sd_etWvFXyKMezM65wW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_etWvFXyKMezM65wW',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.budget = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Os2S07eALISUhqc3(bh, parentSpanInst);
      //appendnew_next_sd_etWvFXyKMezM65wW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_etWvFXyKMezM65wW',
        spanInst,
        'sd_etWvFXyKMezM65wW'
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

  async sd_olF3s2y3zm43hvEn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_olF3s2y3zm43hvEn',
      parentSpanInst
    );
    try {
      bh.local.result = await MongoPersistance.getInstance().find(
        'sd_qC5Zfy7LJYHmxiFv',
        bh.input.searchObj.collection,
        bh.input.searchObj.query,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_olF3s2y3zm43hvEn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_olF3s2y3zm43hvEn',
        spanInst,
        'sd_olF3s2y3zm43hvEn'
      );
    }
  }

  async sd_5p3uY1F7nfLItdpH(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5p3uY1F7nfLItdpH',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'budget',
        query: { year: Number(bh.input.params.year) },
      };

      console.log(bh.input);
      console.log(bh.search);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lwXJYxyayJlDLP6I(bh, parentSpanInst);
      //appendnew_next_sd_5p3uY1F7nfLItdpH
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_5p3uY1F7nfLItdpH',
        spanInst,
        'sd_5p3uY1F7nfLItdpH'
      );
    }
  }

  async sd_lwXJYxyayJlDLP6I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lwXJYxyayJlDLP6I',
      parentSpanInst
    );
    try {
      let outputVariables = await this.checkIfExist(spanInst, bh.search);
      bh.budget = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NoQvo7sDprGTDpBV(bh, parentSpanInst);
      //appendnew_next_sd_lwXJYxyayJlDLP6I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lwXJYxyayJlDLP6I',
        spanInst,
        'sd_lwXJYxyayJlDLP6I'
      );
    }
  }

  async sd_NoQvo7sDprGTDpBV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NoQvo7sDprGTDpBV',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['nempty'](
          bh.budget,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_71rjOlZeJfEC4EOD(bh, parentSpanInst);
      } else {
        bh = await this.sd_KvMUeT4uxDbofofY(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NoQvo7sDprGTDpBV',
        spanInst,
        'sd_NoQvo7sDprGTDpBV'
      );
    }
  }

  async sd_71rjOlZeJfEC4EOD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_71rjOlZeJfEC4EOD',
      parentSpanInst
    );
    try {
      console.log(bh.budget);

      bh.res = bh.budget;

      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HKOMEhyBgl2QVB9W(bh, parentSpanInst);
      //appendnew_next_sd_71rjOlZeJfEC4EOD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_71rjOlZeJfEC4EOD',
        spanInst,
        'sd_71rjOlZeJfEC4EOD'
      );
    }
  }

  async sd_HKOMEhyBgl2QVB9W(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HKOMEhyBgl2QVB9W');
    }
  }

  async sd_KvMUeT4uxDbofofY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KvMUeT4uxDbofofY',
      parentSpanInst
    );
    try {
      console.log(bh.budget);

      bh.status = 404;

      bh.res = { Error: 'Budget for that year not found' };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_HKOMEhyBgl2QVB9W(bh, parentSpanInst);
      //appendnew_next_sd_KvMUeT4uxDbofofY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KvMUeT4uxDbofofY',
        spanInst,
        'sd_KvMUeT4uxDbofofY'
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

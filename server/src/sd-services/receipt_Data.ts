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
export class receipt_Data {
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
    this.serviceName = 'receipt_Data';
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
      instance = new receipt_Data(
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
    //appendnew_flow_receipt_Data_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: receipt_Data');
    //appendnew_flow_receipt_Data_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: receipt_Data');

    this.app['post'](
      `${this.serviceBasePath}/add-receipt-data`,
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
          bh = await this.sd_4tGwLR1woumnEG5V(bh, parentSpanInst);
          //appendnew_next_sd_xzCUM8CG8MjFdgah
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xzCUM8CG8MjFdgah');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-receipt`,
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
          bh = await this.sd_oAIXs1g6MtIZlgDJ(bh, parentSpanInst);
          //appendnew_next_sd_32rFD19v7gcBKDMU
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_32rFD19v7gcBKDMU');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_receipt_Data_HttpIn
  }
  //   service flows_receipt_Data

  //appendnew_flow_receipt_Data_start

  async sd_4tGwLR1woumnEG5V(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4tGwLR1woumnEG5V',
      parentSpanInst
    );
    try {
      bh.receiptData = {
        collection: 'ReceiptData',
      };

      bh.input.body['Date-Uploaded'] = new Date();

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_lMVmdpYxUo2oWmbL(bh, parentSpanInst);
      //appendnew_next_sd_4tGwLR1woumnEG5V
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4tGwLR1woumnEG5V',
        spanInst,
        'sd_4tGwLR1woumnEG5V'
      );
    }
  }

  async sd_lMVmdpYxUo2oWmbL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_lMVmdpYxUo2oWmbL',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_qC5Zfy7LJYHmxiFv',
        bh.receiptData.collection,
        bh.input.body,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_dYMiPVLrPaRRhOnO(bh, parentSpanInst);
      //appendnew_next_sd_lMVmdpYxUo2oWmbL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lMVmdpYxUo2oWmbL',
        spanInst,
        'sd_lMVmdpYxUo2oWmbL'
      );
    }
  }

  async sd_dYMiPVLrPaRRhOnO(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_dYMiPVLrPaRRhOnO');
    }
  }

  async sd_oAIXs1g6MtIZlgDJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_oAIXs1g6MtIZlgDJ',
      parentSpanInst
    );
    try {
      bh.receiptData = {
        collection: 'ReceiptData',
      };

      bh.input.body['Date-Uploaded'] = new Date().toLocaleDateString();
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_iNNNA6psRGdvVtM5(bh, parentSpanInst);
      //appendnew_next_sd_oAIXs1g6MtIZlgDJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_oAIXs1g6MtIZlgDJ',
        spanInst,
        'sd_oAIXs1g6MtIZlgDJ'
      );
    }
  }

  async sd_iNNNA6psRGdvVtM5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iNNNA6psRGdvVtM5',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().find(
        'sd_qC5Zfy7LJYHmxiFv',
        bh.receiptData.collection,
        bh.opt,
        bh.option,
        bh.option
      );
      this.tracerService.sendData(spanInst, bh);
      await this.sd_P1AwM7n0uPqyUNwU(bh, parentSpanInst);
      //appendnew_next_sd_iNNNA6psRGdvVtM5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iNNNA6psRGdvVtM5',
        spanInst,
        'sd_iNNNA6psRGdvVtM5'
      );
    }
  }

  async sd_P1AwM7n0uPqyUNwU(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_P1AwM7n0uPqyUNwU');
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
  //appendnew_flow_receipt_Data_Catch
}

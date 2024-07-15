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
      `${this.serviceBasePath}/get-receipt-data`,
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
          bh = await this.sd_fyuH8bSVxuO0uo7j(bh, parentSpanInst);
          //appendnew_next_sd_LITkUuuJlYXmnDvY
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_LITkUuuJlYXmnDvY');
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

  async sd_fyuH8bSVxuO0uo7j(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fyuH8bSVxuO0uo7j',
      parentSpanInst
    );
    try {
      bh.search = {
        collection: 'ReceiptData',
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_TXoyfmFyhkKfpxNX(bh, parentSpanInst);
      //appendnew_next_sd_fyuH8bSVxuO0uo7j
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fyuH8bSVxuO0uo7j',
        spanInst,
        'sd_fyuH8bSVxuO0uo7j'
      );
    }
  }

  async sd_TXoyfmFyhkKfpxNX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TXoyfmFyhkKfpxNX',
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
      bh = await this.sd_U7pG547mdq0aUxFN(bh, parentSpanInst);
      //appendnew_next_sd_TXoyfmFyhkKfpxNX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TXoyfmFyhkKfpxNX',
        spanInst,
        'sd_TXoyfmFyhkKfpxNX'
      );
    }
  }

  async sd_U7pG547mdq0aUxFN(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_U7pG547mdq0aUxFN',
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
        bh = await this.sd_8j6lVUel7NUEAqev(bh, parentSpanInst);
      } else {
        bh = await this.sd_LU1PH9RfXJPrFRd2(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_U7pG547mdq0aUxFN',
        spanInst,
        'sd_U7pG547mdq0aUxFN'
      );
    }
  }

  async sd_8j6lVUel7NUEAqev(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8j6lVUel7NUEAqev',
      parentSpanInst
    );
    try {
      console.log('bh', bh);
      bh.status = 200;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_y9LnKoKdcGXQibly(bh, parentSpanInst);
      //appendnew_next_sd_8j6lVUel7NUEAqev
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8j6lVUel7NUEAqev',
        spanInst,
        'sd_8j6lVUel7NUEAqev'
      );
    }
  }

  async sd_y9LnKoKdcGXQibly(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.status).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_y9LnKoKdcGXQibly');
    }
  }

  async sd_LU1PH9RfXJPrFRd2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LU1PH9RfXJPrFRd2',
      parentSpanInst
    );
    try {
      bh.status = 404;
      bh.result = {
        message: 'Nothing found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_y9LnKoKdcGXQibly(bh, parentSpanInst);
      //appendnew_next_sd_LU1PH9RfXJPrFRd2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LU1PH9RfXJPrFRd2',
        spanInst,
        'sd_LU1PH9RfXJPrFRd2'
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
  //appendnew_flow_receipt_Data_Catch
}

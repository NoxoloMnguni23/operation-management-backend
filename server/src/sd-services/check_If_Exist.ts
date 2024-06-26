// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import { MongoPersistance } from '../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class check_If_Exist {
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
    this.serviceName = 'check_If_Exist';
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
      instance = new check_If_Exist(
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
    //appendnew_flow_check_If_Exist_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: check_If_Exist');
    //appendnew_flow_check_If_Exist_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: check_If_Exist');
    //appendnew_flow_check_If_Exist_HttpIn
  }
  //   service flows_check_If_Exist

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
      bh = await this.sd_IkEWJgc7OLnOAKlU(bh, parentSpanInst);
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
        'sd_F9CrOrETPPnaRNnz',
        spanInst,
        'checkIfExist'
      );
    }
  }
  //appendnew_flow_check_If_Exist_start

  async sd_IkEWJgc7OLnOAKlU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_IkEWJgc7OLnOAKlU',
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
      //appendnew_next_sd_IkEWJgc7OLnOAKlU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_IkEWJgc7OLnOAKlU',
        spanInst,
        'sd_IkEWJgc7OLnOAKlU'
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
  //appendnew_flow_check_If_Exist_Catch
}

// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { sep } from 'path'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class ocr {
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
    this.serviceName = 'ocr';
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
      instance = new ocr(
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
    //appendnew_flow_ocr_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ocr');
    //appendnew_flow_ocr_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ocr');

    this.app['post'](
      `${this.serviceBasePath}/upload-image`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'path',
        path: 'file'.replace(/\\|\//g, sep),
        options: [{ name: 'file', maxCount: 1 }],
      }),

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
          bh = await this.sd_0JXC2OHbYKtvbk31(bh, parentSpanInst);
          //appendnew_next_sd_huOIMSMcaHm4VmmR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_huOIMSMcaHm4VmmR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ocr_HttpIn
  }
  //   service flows_ocr

  //appendnew_flow_ocr_start

  async sd_0JXC2OHbYKtvbk31(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0JXC2OHbYKtvbk31',
      parentSpanInst
    );
    try {
      const Tesseract = require('tesseract.js');
      bh.filePath = bh.input.files.file[0].path;

      const extractField = (text, keyword) => {
        const regex = new RegExp(`${keyword}[:\\s]*([\\d,\\.]+)`, 'i');
        const match = text.match(regex);
        return match ? match[1] : '';
      };

      const extractDate = (text) => {
        const datePatterns = [
          /\b\d{2}\/\d{2}\/\d{4}\b/, // MM/DD/YYYY
          /\b\d{4}\/\d{2}\/\d{2}\b/, // YYYY/MM/DD
          /\b\d{2}-\d{2}-\d{4}\b/, // MM-DD-YYYY
          /\b\d{4}-\d{2}-\d{2}\b/, // YYYY-MM-DD
        ];

        console.log('Date patterns: ', datePatterns);
        for (const pattern of datePatterns) {
          const match = text.match(pattern);
          if (match) {
            console.log(`Found match for ${pattern} is ${match}`);
            return match[0];
          }
        }
        return '';
      };
      //Pattern to return time on a recipt
      const timePattern =
        /\b((1[0-2]|0?[1-9]):[0-5][0-9](\s)?([AP][M])|([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?)\b/g;
      //Pattern to return any number that ends with .00
      const numberPattern = /\b-?\d+\.00\b/g;
      // Pattern for items
      const itemPattern = /([A-Za-z\s]+)\s+\.{2,}\s+\$?(\d+\.\d{2})/g;

      const items = [];
      let match;

      function data() {
        return new Promise(async (resolve, reject) => {
          await Tesseract.recognize(bh.filePath, 'eng', {
            logger: (m) => console.log(m),
          })
            .then(({ data: { text } }) => {
              // bh.result = bh.input.files.file[0];
              // bh.result.extractedText = text;
              // const totalAmount = extractField(text, 'Total');
              // const item = extractField(text, 'Items');
              // const change = extractField(text, 'Change');
              const date = extractDate(text);
              // const times = text.match(timePattern);
              // const cashPrice = text.match(numberPattern);
              // if (cashPrice) {
              //     const numericValues = cashPrice.map(num => parseFloat(num));
              //     const highestNumber = Math.max(...numericValues);
              //     console.log("Cash price:", highestNumber)
              // }
              // while ((match = itemPattern.exec(text)) !== null) {
              //     const item = {
              //         name: match[1].trim(),
              //         price: parseFloat(match[2])
              //     };
              //     items.push(item);
              // }
              // console.log("total Amount:", totalAmount)
              // console.log("total Items:", item)
              // console.log("total Change:", change)
              // console.log("Date:", date)
              // console.log("Times:", times[0])
              console.log('Text:', text);
              resolve();
            })
            .catch((err) => {
              console.log('Error reading Image', err);
              rejecte();
            });
        });
      }

      await data();
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_0JXC2OHbYKtvbk31
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0JXC2OHbYKtvbk31',
        spanInst,
        'sd_0JXC2OHbYKtvbk31'
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
  //appendnew_flow_ocr_Catch
}

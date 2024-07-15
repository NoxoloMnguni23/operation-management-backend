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
export class receipts_File {
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
    this.serviceName = 'receipts_File';
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
      instance = new receipts_File(
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
    //appendnew_flow_receipts_File_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: receipts_File');
    //appendnew_flow_receipts_File_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: receipts_File');

    this.app['get'](
      `${this.serviceBasePath}/`,
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
          bh = await this.sd_hkJSWvBTg5Elqv2I(bh, parentSpanInst);
          //appendnew_next_sd_kmXM5MzwfJXRZLHV
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_kmXM5MzwfJXRZLHV');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['post'](
      `${this.serviceBasePath}/upload-receipt`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),
      this.sdService.multipartParser({
        type: 'memory',
        options: [{ name: 'file', maxCount: 20000 }],
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
          bh = await this.sd_6viLePdBwxvCAm7o(bh, parentSpanInst);
          //appendnew_next_sd_H1NlNAP1RVDW5ffa
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_H1NlNAP1RVDW5ffa');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get-files/:filename`,
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
          bh = await this.sd_cBTbr7aVUJzY5qWe(bh, parentSpanInst);
          //appendnew_next_sd_vaFoJyYT3urKm5So
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_vaFoJyYT3urKm5So');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/download-file/:filename`,
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
          bh = await this.sd_Z7jmrS6fMYZX0Ao3(bh, parentSpanInst);
          //appendnew_next_sd_xGggKm2GLzc3xfeL
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_xGggKm2GLzc3xfeL');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_receipts_File_HttpIn
  }
  //   service flows_receipts_File

  //appendnew_flow_receipts_File_start

  async sd_hkJSWvBTg5Elqv2I(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hkJSWvBTg5Elqv2I',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'welcome to our backend lebo',
        status: 200,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_zhSd8OwQ5do8c6MV(bh, parentSpanInst);
      //appendnew_next_sd_hkJSWvBTg5Elqv2I
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hkJSWvBTg5Elqv2I',
        spanInst,
        'sd_hkJSWvBTg5Elqv2I'
      );
    }
  }

  async sd_zhSd8OwQ5do8c6MV(bh, parentSpanInst) {
    try {
      bh.web.res.status(bh.result.status).send(bh.result.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_zhSd8OwQ5do8c6MV');
    }
  }

  async sd_6viLePdBwxvCAm7o(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6viLePdBwxvCAm7o',
      parentSpanInst
    );
    try {
      console.log('file path find ', bh.input.files);
      // bh.fileData = {
      //     filePath : bh.input.files.file[0].buffer,
      //     fileName : bh.input.files.file[0].filename,
      //     collection : "files"

      // }
      bh.collection = 'files';
      bh.path = bh.input.files.file[0].fieldname;

      // const newImage = new Image();
      //     newImage.name = req.file.originalname;
      //     newImage.data = req.file.buffer; // Access the buffer containing file data
      //     newImage.contentType = req.file.mimetype;
      // bh.fileData = {
      //     name : bh.input.files.file[0].originalname,
      //     data : bh.input.files.file[0].buffer,
      //     contentType:bh.input.files.file[0].mimetype,
      //     filePath : bh.input.files.file[0].fieldname,
      //     fileName : bh.input.files.file[0].originalname,
      //     collection : "files"

      // }
      bh.fileData = {
        filename: bh.input.files.file[0].originalname,
        contentType: bh.input.files.file[0].mimetype,
        data: bh.input.files.file[0].buffer,
        size: bh.input.files.file[0].size,
        fileid: bh.input.headers['fileid'],
      };

      bh.file = {};
      bh.collection = 'files';
      bh.file.fileName = bh.input.files.file[0].originalname;
      bh.file.fileid = bh.input.headers['fileid'];

      console.log('Checking receipt file: ', bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aVrGcMzlRCoBrQMT(bh, parentSpanInst);
      //appendnew_next_sd_6viLePdBwxvCAm7o
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6viLePdBwxvCAm7o',
        spanInst,
        'sd_6viLePdBwxvCAm7o'
      );
    }
  }

  async sd_aVrGcMzlRCoBrQMT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aVrGcMzlRCoBrQMT',
      parentSpanInst
    );
    try {
      bh.result = await MongoPersistance.getInstance().insertOne(
        'sd_qC5Zfy7LJYHmxiFv',
        bh.collection,
        bh.fileData,
        bh.options,
        bh.options
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qLiC9vA5XazMzXw8(bh, parentSpanInst);
      //appendnew_next_sd_aVrGcMzlRCoBrQMT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aVrGcMzlRCoBrQMT',
        spanInst,
        'sd_aVrGcMzlRCoBrQMT'
      );
    }
  }

  async sd_qLiC9vA5XazMzXw8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qLiC9vA5XazMzXw8',
      parentSpanInst
    );
    try {
      console.log('result', bh.result);
      this.tracerService.sendData(spanInst, bh);
      await this.sd_WUiUFFPLQHQZdjBf(bh, parentSpanInst);
      //appendnew_next_sd_qLiC9vA5XazMzXw8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qLiC9vA5XazMzXw8',
        spanInst,
        'sd_qLiC9vA5XazMzXw8'
      );
    }
  }

  async sd_WUiUFFPLQHQZdjBf(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_WUiUFFPLQHQZdjBf');
    }
  }

  async sd_cBTbr7aVUJzY5qWe(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cBTbr7aVUJzY5qWe',
      parentSpanInst
    );
    try {
      bh.file = {
        collection: 'files',
      };

      console.log('bh file', bh.file.collection);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_N4ASAe5REMBV59C2(bh, parentSpanInst);
      //appendnew_next_sd_cBTbr7aVUJzY5qWe
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cBTbr7aVUJzY5qWe',
        spanInst,
        'sd_cBTbr7aVUJzY5qWe'
      );
    }
  }

  async sd_N4ASAe5REMBV59C2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_N4ASAe5REMBV59C2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZHInstance: SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH.check_If_Exist =
        SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH.check_If_Exist.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZHInstance.checkIfExist(
          spanInst,
          bh.file
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DfjyowIB4RNeWxUM(bh, parentSpanInst);
      //appendnew_next_sd_N4ASAe5REMBV59C2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_N4ASAe5REMBV59C2',
        spanInst,
        'sd_N4ASAe5REMBV59C2'
      );
    }
  }

  async sd_DfjyowIB4RNeWxUM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DfjyowIB4RNeWxUM',
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
        bh = await this.sd_i2kntdlkuLLNzrcp(bh, parentSpanInst);
      } else {
        bh = await this.sd_DHYhEF9AuW2p1AGD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DfjyowIB4RNeWxUM',
        spanInst,
        'sd_DfjyowIB4RNeWxUM'
      );
    }
  }

  async sd_i2kntdlkuLLNzrcp(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_i2kntdlkuLLNzrcp',
      parentSpanInst
    );
    try {
      bh.result = bh.result;

      bh.query = bh.input.params;
      console.log('params', bh.query);

      bh.data = bh.result.map((_data) => {
        return _data.filename;
      });

      bh.data.forEach((item, i) => {
        console.log('item', item);
        if (item == bh.query.filename) {
          console.log('Found', bh.result[i]);
          bh.result = bh.result[i];
        }
      });
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HkgWL9xpt8JpXxau(bh, parentSpanInst);
      //appendnew_next_sd_i2kntdlkuLLNzrcp
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_i2kntdlkuLLNzrcp',
        spanInst,
        'sd_i2kntdlkuLLNzrcp'
      );
    }
  }

  async sd_HkgWL9xpt8JpXxau(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HkgWL9xpt8JpXxau');
    }
  }

  async sd_DHYhEF9AuW2p1AGD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DHYhEF9AuW2p1AGD',
      parentSpanInst
    );
    try {
      bh.result = {
        messsage: 'files not found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_HkgWL9xpt8JpXxau(bh, parentSpanInst);
      //appendnew_next_sd_DHYhEF9AuW2p1AGD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DHYhEF9AuW2p1AGD',
        spanInst,
        'sd_DHYhEF9AuW2p1AGD'
      );
    }
  }

  async sd_Z7jmrS6fMYZX0Ao3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Z7jmrS6fMYZX0Ao3',
      parentSpanInst
    );
    try {
      bh.collection = 'files';

      console.log('bh file', bh.input.params.filename);
      // bh.input.params.collection = bh.collection;
      bh.searchObj = {
        collection: bh.collection,
        filter: { fileid: bh.input.params.filename },
      };
      console.log('bh', bh);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qXO87wPTptbovEe0(bh, parentSpanInst);
      //appendnew_next_sd_Z7jmrS6fMYZX0Ao3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Z7jmrS6fMYZX0Ao3',
        spanInst,
        'sd_Z7jmrS6fMYZX0Ao3'
      );
    }
  }

  async sd_qXO87wPTptbovEe0(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qXO87wPTptbovEe0',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZHInstance: SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH.check_If_Exist =
        SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZH.check_If_Exist.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_oE6JU2aiEUVDyjZHInstance.checkIfExist(
          spanInst,
          bh.searchObj
        );
      bh.result = outputVariables.local.result;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_EtB577Gksc1vG2rL(bh, parentSpanInst);
      //appendnew_next_sd_qXO87wPTptbovEe0
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_qXO87wPTptbovEe0',
        spanInst,
        'sd_qXO87wPTptbovEe0'
      );
    }
  }

  async sd_EtB577Gksc1vG2rL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EtB577Gksc1vG2rL',
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
        bh = await this.sd_fxmfCcXwknPq02dZ(bh, parentSpanInst);
      } else {
        bh = await this.sd_jVQerAJQQqjpUAK6(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_EtB577Gksc1vG2rL',
        spanInst,
        'sd_EtB577Gksc1vG2rL'
      );
    }
  }

  async sd_fxmfCcXwknPq02dZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_fxmfCcXwknPq02dZ',
      parentSpanInst
    );
    try {
      bh.result = bh.result;
      bh.filter;
      console.log('VOID', bh);
      // const data = bh.result.map(_data=>{
      //    return _data.filename
      // })

      //  data.forEach(_query=>{
      //   bh.filter = {"filename":_query}
      // })

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_xEHB5WqMypBahPEr(bh, parentSpanInst);
      //appendnew_next_sd_fxmfCcXwknPq02dZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_fxmfCcXwknPq02dZ',
        spanInst,
        'sd_fxmfCcXwknPq02dZ'
      );
    }
  }

  async sd_xEHB5WqMypBahPEr(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_xEHB5WqMypBahPEr',
      parentSpanInst
    );
    try {
      // bh.result.downloadStream = bh.result.metadata.filename.fileName;

      // console.log("resukt",bh)
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BhdOx7QniJ42fEpo(bh, parentSpanInst);
      //appendnew_next_sd_xEHB5WqMypBahPEr
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_xEHB5WqMypBahPEr',
        spanInst,
        'sd_xEHB5WqMypBahPEr'
      );
    }
  }

  async sd_BhdOx7QniJ42fEpo(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.result);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_BhdOx7QniJ42fEpo');
    }
  }

  async sd_jVQerAJQQqjpUAK6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jVQerAJQQqjpUAK6',
      parentSpanInst
    );
    try {
      bh.result = {
        message: 'No files found',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_BhdOx7QniJ42fEpo(bh, parentSpanInst);
      //appendnew_next_sd_jVQerAJQQqjpUAK6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jVQerAJQQqjpUAK6',
        spanInst,
        'sd_jVQerAJQQqjpUAK6'
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
  //appendnew_flow_receipts_File_Catch
}

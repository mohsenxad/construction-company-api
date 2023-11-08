const express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer');
const Sentry = require('@sentry/node');
const {ProfilingIntegration} = require("@sentry/profiling-node");




require('dotenv').config();

const packageJson = require('./package.json');

var app = express();

if
(
    process.env.SENTRY_DSN
)
    {
        Sentry.init(
            {
                dsn: process.env.SENTRY_DSN,
                integrations: [
                    // enable HTTP calls tracing
                    new Sentry.Integrations.Http({ tracing: true }),
                    // enable Express.js middleware tracing
                    new Sentry.Integrations.Express({ app }),
                    new ProfilingIntegration(),
                  ],
                  // Performance Monitoring
                  tracesSampleRate: 1.0,
                  // Set sampling rate for profiling - this is relative to tracesSampleRate
                  profilesSampleRate: 1.0,
            }
        );
        
        // The request handler must be the first middleware on the app
        app.use(Sentry.Handlers.requestHandler());
        
        // TracingHandler creates a trace for every incoming request
        app.use(Sentry.Handlers.tracingHandler());
        
        
    }


app.use(bodyParser.json())

app.use(bodyParser.json())


app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, usercompanyaccessid");
        next();
    }
);

const STORAGE_PATH = process.env.STORAGE_PATH;






const panelServices = require('./src');

async function checkAuthentication
(
    req,
    res,
    next
)
    {

        try
            {
                const token = req.get('token');

                if
                (
                    !token
                )
                    {
                        throw new Error("خطای شناسایی لطفا دوباره وارد شوید.");
                    }

                const foundUser = await panelServices.getUserFromToken(
                    {
                        token:token
                    }
                )

                req.userId = foundUser._id;

                if
                (
                    req.body
                )
                    {
                        req.body.userId = foundUser._id;
                    }

                next();
            }
        catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        

    }



async function checkAuthorization
(
    req,
    res,
    next
)
    {

        try
            {
                const userCompanyAccessId = req.get('usercompanyaccessid');

                if
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error("خطای شناسایی لطفا دوباره وارد شوید.");
                    }

                const userCompanyAccess =  await panelServices.authorization(
                    {
                        userCompanyAccessId: userCompanyAccessId,
                        userId: req.userId
                    }
                )

                req.companyId = userCompanyAccess.company._id;

                if
                (
                    req.body
                )
                    {
                        req.body.companyId = userCompanyAccess.company._id
                    }

                next();
            }
        catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        

    }


function sendResult
(
    res,
    data
)
    {
        res.json(data);
    }

function processError(
    res,
    error
)
    {
        console.error(
            error
        );

        Sentry.captureException(error);

        res.status(400).json(
            {
                type:false,
                message: error.message 
            }
        );
    }

const routerServices = require('./routes')(
    {
        checkAuthentication:checkAuthentication,
        checkAuthorization:checkAuthorization,
        express: express,
        panelServices: panelServices,
        processError:processError,
        sendResult: sendResult
    }
)


const multerDestination =
(
    req,
    file,
    cb
)=>
    {
        cb(null, STORAGE_PATH) 
    }

const multerFileName =
    async (
        req,
        file,
        cb
    ) => 
        {
            try
                {
                    console.log(file);
                    const mimetype = file.mimetype;
                    const fileName = await panelServices.generateRandomFilename(
                        {
                            mimetype: mimetype
                        }
                    )//file.originalname;
                    cb(null, fileName)
                }
            catch (error)
                {
                    processError(
                        res,
                        error
                    )
                }
            
        }

var storage = multer.diskStorage
(
    {
        destination: multerDestination,
        filename: multerFileName
    }
);

var upload = multer({ storage: storage })


app.post(
    '/projectItemGallery',
    upload.array('files', 12),
    async function (req, res, next)
        {
            // req.files is array of `profile-files` files
            // req.body will contain the text fields, if there were any
            
            const result = {};

            const projectItemId = req.body.projectItemId;

            for
            (
                var i=0; i<req.files.length; i++
            )
                {
                    const currentFile = req.files[i];
                    const fileName = currentFile.filename;
                    const fileExtention = currentFile.mimetype;
                    console.log(currentFile);

                    const addProjectItemGalleryInfo  = {
                        projectItemId: projectItemId,
                        filenName: fileName,
                        extention: fileExtention            
                    }
                    const addProjectItemGallery = await panelServices.addProjectItemGallery(
                        {
                            addProjectItemGalleryInfo: addProjectItemGalleryInfo
                        }
                    );
            
                    console.log(addProjectItemGallery);

                }
        

            sendResult(
                res,
                result
            );
        }
)

app.get('/isAlive', 
    (req, res) => 
        {
            const result = {
                emoji : '🙂',
                name: packageJson.name,
                version : packageJson.version
            };

            sendResult(
                res,
                result
            );
        }
);

//========= BANK ACCOUNT ======================

app.post('/bankAccount',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const bankAccountInfo = req.body;

                    const bankAccountId = await panelServices.addBankAccount(
                        {
                            bankAccountInfo: bankAccountInfo
                        }
                    )

                    const result = {
                        bankAccountId : bankAccountId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/bankAccount',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const bankAccountList = await panelServices.getAllBankAccounts(
                        {
                            companyId: req.companyId
                        }
                    );

                    const result = {
                        bankAccountList : bankAccountList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

//========= PROJECT ======================

const projectRoutes = routerServices.project()
app.use('/project', projectRoutes);

//========= PROJECT ITEM ======================

app.post('/projectItem/residential',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const projectItemInfo = req.body;

                    const projectItemId = await panelServices.addProjectItem(
                        {
                            residentialProjectItemInfo: projectItemInfo
                        }
                    )

                    const result = {
                        projectItemId : projectItemId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/projectItem/landParcel',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const projectItemInfo = req.body;

                    const projectItemId = await panelServices.addProjectItem(
                        {
                            landParcelProjectItemInfo: projectItemInfo
                        }
                    )

                    const result = {
                        projectItemId : projectItemId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/projectItem/byContractId/:contractId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractId = req.params["contractId"];

                    const projectItem = await panelServices.getProjectItemByContractId(
                        {
                            contractId: contractId
                        }
                    );

                    const result = {
                        projectItem : projectItem
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

app.get('/projectItem/get3d/:projectItem',
    async(
        req,
        res
    )=>
        {
            const result = {
                data : '{"floorplan":{"version":"0.0.2a","corners":{"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2":{"x":0,"y":0,"elevation":4},"f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"x":0,"y":5,"elevation":2.5},"da026c08-d76a-a944-8e7b-096b752da9ed":{"x":5,"y":5,"elevation":2.5},"4e3d65cb-54c0-0681-28bf-bddcc7bdb571":{"x":5,"y":0,"elevation":4},"e8c7448a-6de9-4716-bed2-77ef371aad5d":{"x":-3.667,"y":0,"elevation":2.5},"534c07db-8966-6d39-b9e5-0d69568db08c":{"x":-3.667,"y":5.06,"elevation":2.5}},"walls":[{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-176.77669529663686,"y":176.7766952966369},"b":{"x":-176.7766952966369,"y":323.22330470336317}},{"corner1":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","corner2":"da026c08-d76a-a944-8e7b-096b752da9ed","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":176.7766952966369,"y":676.7766952966368},"b":{"x":323.22330470336317,"y":676.776695296637}},{"corner1":"da026c08-d76a-a944-8e7b-096b752da9ed","corner2":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":676.7766952966368,"y":323.2233047033631},"b":{"x":676.776695296637,"y":176.77669529663686}},{"corner1":"4e3d65cb-54c0-0681-28bf-bddcc7bdb571","corner2":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":323.2233047033631,"y":-176.77669529663686},"b":{"x":176.77669529663686,"y":-176.7766952966369}},{"corner1":"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2","corner2":"e8c7448a-6de9-4716-bed2-77ef371aad5d","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-129.65227097124063,"y":-129.6522709712406},"b":{"x":-237.0597290287594,"y":-129.65227097124063}},{"corner1":"e8c7448a-6de9-4716-bed2-77ef371aad5d","corner2":"534c07db-8966-6d39-b9e5-0d69568db08c","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-545.6213293486956,"y":178.90932934869554},"b":{"x":-545.6213293486956,"y":327.12267065130453}},{"corner1":"534c07db-8966-6d39-b9e5-0d69568db08c","corner2":"f90da5e3-9e0e-eba7-173d-eb0b071e838e","frontTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"backTexture":{"url":"rooms/textures/wallmap.png","stretch":true,"scale":0},"wallType":"STRAIGHT","a":{"x":-234.92709497670072,"y":633.551636919182},"b":{"x":-127.51963691918195,"y":631.7849050232993}}],"rooms":{"f90da5e3-9e0e-eba7-173d-eb0b071e838e,71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed":{"name":"A New Room"},"71d4f128-ae80-3d58-9bd2-711c6ce6cdf2,4e3d65cb-54c0-0681-28bf-bddcc7bdb571,da026c08-d76a-a944-8e7b-096b752da9ed,f90da5e3-9e0e-eba7-173d-eb0b071e838e":{"name":"A New Room"}},"wallTextures":[],"floorTextures":{},"newFloorTextures":{},"carbonSheet":{"url":"","transparency":1,"x":0,"y":0,"anchorX":0,"anchorY":0,"width":0.01,"height":0.01}},"items":[{"item_name":"Dresser - White","item_type":1,"model_url":"models/js/we-narrow6white_baked.js","xpos":-211.2290998793179,"ypos":35.611997646165,"zpos":35.19169150556712,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]},{"item_name":"Red Chair","item_type":1,"model_url":"models/js/ik-ekero-orange_baked.js","xpos":54.9435287329118,"ypos":37.50235073007,"zpos":59.510046874129245,"rotation":0,"scale_x":1,"scale_y":1,"scale_z":1,"fixed":false,"material_colors":["#ffffff"]}]}'
            };

            sendResult(
                res,
                result
            );
        }
)

//========= BANK ======================
app.get('/bank',
    checkAuthentication,
    async (req, res) =>
        {
            try 
                {
                    const bankList = await panelServices.getAllBanks();

                    const result = {
                        bankList : bankList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)


//========= CUSTOMER ======================
app.post('/customer',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const customerInfo = req.body;

                    const customerId = await panelServices.addCustomer(
                        {
                            customerInfo: customerInfo
                        }
                    )

                    const result = {
                        customerId : customerId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/customer/:nationalCode',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const nationalCode = req.params["nationalCode"];

                    const customer = await panelServices.findCustomerByNationalCode(
                        {
                            nationalCode: nationalCode
                        }
                    );

                    const result = {
                        customer : customer
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)


//========= CONTRACT ======================

const contractRoutes = routerServices.contract()
app.use('/contract', contractRoutes);

//========= CONTRACT CUSTOMER ======================

app.get('/contractCustomer/:contractId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractId = req.params["contractId"];

                    const contractCustomerList = await panelServices.getAllContractCustomerByContractId(
                        {
                            contractId: contractId
                        }
                    );

                    const result = {
                        contractCustomerList : contractCustomerList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

app.post('/contractCustomer',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractCustomerInfo = req.body;

                    const contractCustomerId = await panelServices.assignCustomerToContract(
                        {
                            contractCustomerInfo: contractCustomerInfo
                        }
                    )

                    const result = {
                        contractCustomerId : contractCustomerId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.delete('/contractCustomer/:contractCustomerId',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractCustomerId = req.params["contractCustomerId"];

                    const removeCustomerFromContractResult = await panelServices.removeCustomerFromContract(
                        {
                            contractCustomerId: contractCustomerId
                        }
                    )

                    const result = {
                        result : removeCustomerFromContractResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

//========= CONTRACT PAYMENT ======================

app.get('/contractPayment/:contractPaymentId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractPaymentId = req.params["contractPaymentId"];

                    const contractPayment = await panelServices.getContractPaymentById(
                        {
                            contractPaymentId: contractPaymentId
                        }
                    );

                    const result = {
                        contractPayment : contractPayment
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

app.post('/contractPayment',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractPaymentInfo = req.body;

                    const contractPaymentId = await panelServices.addContractPayment(
                        {
                            contractPaymentInfo: contractPaymentInfo
                        }
                    )

                    const result = {
                        contractPaymentId : contractPaymentId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/contractPayment/deposit',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractPaymentDepositInfo = req.body;

                    const contractPaymentId = await panelServices.addContractPayment(
                        {
                            contractPaymentDepositInfo: contractPaymentDepositInfo
                        }
                    )

                    const result = {
                        contractPaymentId : contractPaymentId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/contractPayment/cheque',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractPaymentChequeInfo = req.body;

                    const contractPaymentId = await panelServices.addContractPayment(
                        {
                            contractPaymentChequeInfo: contractPaymentChequeInfo
                        }
                    )

                    const result = {
                        contractPaymentId : contractPaymentId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.delete('/contractPayment/:contractPaymentId',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractPaymentId = req.params["contractPaymentId"];

                    const removePaymentFromContractResult = await panelServices.removePaymentFromContract(
                        {
                            contractPaymentId: contractPaymentId
                        }
                    )

                    const result = {
                        result : removePaymentFromContractResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/contractPayment/setIsSettled',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const setContractPaymentSettlementInfo = req.body;

                    const setContractPaymentSettlementResult = await panelServices.setContractPaymentSettlement(
                        {
                            setContractPaymentSettlementInfo: setContractPaymentSettlementInfo
                        }
                    )

                    const result = {
                        result : setContractPaymentSettlementResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

// dicker word is filtered :|
app.post('/contractPayment/d_icker',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractPaymentDickerInfo = req.body;

                    const contractPaymentId = await panelServices.addContractPayment(
                        {
                            contractPaymentDickerInfo: contractPaymentDickerInfo
                        }
                    )

                    const result = {
                        contractPaymentId : contractPaymentId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/contractPayment/deed',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractPaymentDeedInfo = req.body;

                    const contractPaymentId = await panelServices.addContractPayment(
                        {
                            contractPaymentDeedInfo: contractPaymentDeedInfo
                        }
                    )

                    const result = {
                        contractPaymentId : contractPaymentId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/contractPayment/byContractId/:contractId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractId = req.params["contractId"];

                    const contractPaymentList = await panelServices.getAllContractPaymentByContractId(
                        {
                            contractId: contractId
                        }
                    );

                    const result = {
                        contractPaymentList : contractPaymentList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.post('/contractPayment/fromDateAndToDate',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const filterInfo = req.body;

                    const contractPaymentList = await panelServices.getAllContractPaymentFromDateAndToDate(
                        {
                            filterInfo: filterInfo
                        }
                    )

                    const result = {
                        contractPaymentList : contractPaymentList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/contractPayment/filter/:filter',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const filter = req.params["filter"];

                    const companyId = req.body.companyId;

                    const contractPaymentList = await panelServices.getAllContractPaymentByFilter(
                        {
                            filter: filter,
                            companyId: companyId
                        }
                    );

                    const result = {
                        contractPaymentList : contractPaymentList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

//========= CONTRACT PAYMENT METHOD ======================

app.get('/contractPaymentMethod',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractPaymentMethodList = await panelServices.getAllContractPaymentMethods();

                    const result = {
                        contractPaymentMethodList : contractPaymentMethodList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

//========= CONTRACT REVIEW ======================

app.post('/contractReview',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractReviewInfo = req.body;

                    const contractPaymentId = await panelServices.addContractReview(
                        {
                            contractReviewInfo: contractReviewInfo
                        }
                    )

                    const result = {
                        contractPaymentId : contractPaymentId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/contractReview',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const userCompanyAccessId = req.get('usercompanyaccessid');

                    const contractReviewList = await panelServices.getAllContractReviewByUserCompanyAccessId(
                        {
                            userCompanyAccessId: userCompanyAccessId
                        }
                    );

                    const result = {
                        contractReviewList : contractReviewList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

app.get('/contractReview/:contractReviewId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractReviewId = req.params["contractReviewId"];

                    const contractReview = await panelServices.getContractReviewById(
                        {
                            contractReviewId: contractReviewId
                        }
                    );

                    const result = {
                        contractReview : contractReview
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

app.get('/contractReview/byContract/:contractId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractId = req.params["contractId"];

                    const contractReviewList = await panelServices.getAllContractReviewByContractId(
                        {
                            contractId: contractId
                        }
                    );

                    const result = {
                        contractReviewList : contractReviewList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

app.post('/contractReview/setReviewResult',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const setContractReviewReviewResultInfo = req.body;

                    const setContractReviewReviewResultResult = await panelServices.setContractReviewReviewResult(
                        {
                            setContractReviewReviewResultInfo: setContractReviewReviewResultInfo
                        }
                    )

                    const result = {
                        contractPaymentId : setContractReviewReviewResultResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.delete('/contractReview/:contractReviewId',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractReviewId = req.params["contractReviewId"];

                    const removeContractReviewResult = await panelServices.removeContractReview(
                        {
                            contractReviewId: contractReviewId
                        }
                    )

                    const result = {
                        result : removeContractReviewResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

//========= CONTRACT TYPE ======================

app.get('/contractType',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractTypeList = await panelServices.getAllContractTypes();

                    const result = {
                        contractTypeList : contractTypeList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)

//========= PROJECT TYPE ======================

app.get('/projectType',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const projectTypeList = await panelServices.getAllProjectTypes();

                    const result = {
                        projectTypeList : projectTypeList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
)


//========= USER ======================
app.get('/user',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const userList = await panelServices.getAllUsers();

                    const result = {
                        userList : userList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.get('/user/:userId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const userId = req.params["userId"];

                    const user = await panelServices.getUserById(
                        {
                            userId: userId
                        }
                    );

                    const result = {
                        user : user
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.post('/user',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const userInfo = req.body;

                    const userId = await panelServices.addUser(
                        {
                            userInfo: userInfo
                        }
                    )

                    const result = {
                        userId : userId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/user/login',
    async(req, res) => 
        {
            try
                {
                    const loginInfo = req.body;

                    const setUserAccessResult = await panelServices.login(
                        {
                            loginInfo: loginInfo
                        }
                    )

                    const result = setUserAccessResult;

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

//========= COMPANY ======================

app.get('/company',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const companyList = await panelServices.getAllCompanies(
                        {
                            userId: req.userId
                        }
                    );

                    const result = {
                        companyList : companyList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

//========= USER COMPANY ACCESS ======================

app.get('/userCompanyAccess',
    checkAuthentication,
    async (req, res) =>
        {
            try 
                {
                    const userCompanyAccessList = await panelServices.getAllUserCompanyAccessByUserId(
                        {
                            userId: req.userId
                        }
                    );

                    const result = {
                        userCompanyAccessList : userCompanyAccessList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.get('/userCompanyAccess/byId/:userCompanyAccessId',
    checkAuthentication,
    async (req, res) =>
        {
            try 
                {

                    const userCompanyAccessId = req.params['userCompanyAccessId'];

                    const userCompanyAccess = await panelServices.getUserCompanyAccessById(
                        {
                            userCompanyAccessId: userCompanyAccessId
                        }
                    );

                    const result = {
                        userCompanyAccess : userCompanyAccess
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.get('/userCompanyAccess/filter/:filter',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const filter = req.params["filter"];

                    const companyId = req.body.companyId;

                    const userCompanyAccessList = await panelServices.getAllUserCompanyAccessByFilter(
                        {
                            filter: filter,
                            companyId: companyId
                        }
                    );

                    const result = {
                        userCompanyAccessList : userCompanyAccessList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.post('/userCompanyAccess',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const userCompanyAccessInfo = req.body;

                    const setUserAccessResult = await panelServices.addUserCompanyAccess(
                        {
                            userCompanyAccessInfo: userCompanyAccessInfo
                        }
                    )

                    const result = {
                        result : setUserAccessResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.post('/userCompanyAccess/setUserAccess',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const userAccessInfo = req.body;

                    const setUserAccessResult = await panelServices.setUserAccess(
                        {
                            userAccessInfo: userAccessInfo
                        }
                    )

                    const result = {
                        result : setUserAccessResult
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/userCompanyAccess/byCompany',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const userCompanyAccessList = await panelServices.getAllUserCompanyAccessByCompany(
                        {
                            companyId: req.companyId
                        }
                    );

                    const result = {
                        userCompanyAccessList : userCompanyAccessList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

app.get('/userCompanyAccess/byUser/:userId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {

                    const userId = req.params['userId'];

                    const userCompanyAccessList = await panelServices.getAllUserCompanyAccessByUserId(
                        {
                            userId: userId
                        }
                    );

                    const result = {
                        userCompanyAccessList : userCompanyAccessList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);




//========= CONTRACT TEMPLATE ======================

app.post('/contractTemplate',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractTemplateInfo = req.body;

                    const contractTemplateId = await panelServices.addContractTemplate(
                        {
                            contractTemplateInfo: contractTemplateInfo
                        }
                    )

                    const result = {
                        contractTemplateId : contractTemplateId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);

app.get('/contractTemplate',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const companyId = req.companyId;

                    const contractTemplateList = await panelServices.getAllContractTemplate(
                        {
                            companyId: companyId
                        }
                    );

                    const result = {
                        contractTemplateList : contractTemplateList
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error)
            {
                processError(
                    res,
                    error
                )
            }
        }
);

//========= PROJECT ITEM GALLERY ======================

app.post('/projectItemGallery',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractTemplateInfo = req.body;

                    const contractTemplateId = await panelServices.addContractTemplate(
                        {
                            contractTemplateInfo: contractTemplateInfo
                        }
                    )

                    const result = {
                        contractTemplateId : contractTemplateId
                    };

                    sendResult(
                        res,
                        result
                    );
                }
            catch (error) 
                {
                    processError(
                        res,
                        error
                    )
                }
        }
);




app.use(Sentry.Handlers.errorHandler());

app.listen(
    process.env.PORT,
    function()
        {
            console.info('... بسم الله الرزاق ...');
            console.log(`Init ${packageJson.name} on ${process.env.PORT} : http://localhost:${process.env.PORT}`);
        }
);
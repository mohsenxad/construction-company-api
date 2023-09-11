const express = require('express');
var bodyParser = require('body-parser')
require('dotenv').config();

const packageJson = require('./package.json');

var app = express();

app.use(bodyParser.json())


app.use(function(req, res, next) 
    {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token, usercompanyaccessid");
        next();
    }
);

const panelServices = require('./src');

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

app.post('/project',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const projectInfo = req.body;

                    const projectId = await panelServices.addProject(
                        {
                            projectInfo: projectInfo
                        }
                    )

                    const result = {
                        projectId : projectId
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

app.get('/project/list',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const projectList = await panelServices.getAllProjects(
                        {
                            companyId: req.companyId
                        }
                    );

                    const result = {
                        projectList : projectList
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

app.get('/project/:projectId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const projectId = req.params["projectId"];;

                    const project = await panelServices.getProjectById(
                        {
                            projectId: projectId
                        }
                    );

                    const result = {
                        project : project
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

app.post('/contract',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractInfo = req.body;

                    const contractId = await panelServices.drafContract(
                        {
                            contractInfo: contractInfo,
                            companyId: req.companyId
                        }
                    )

                    const result = {
                        contractId : contractId
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

app.post('/contract/setDiscount',
    checkAuthentication,
    checkAuthorization,
    async(req, res) => 
        {
            try
                {
                    const contractDiscountInfo = req.body;

                    const contractId = await panelServices.drafContract(
                        {
                            contractInfo: contractInfo
                        }
                    )

                    const result = {
                        contractId : contractId
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

app.get('/contract/:contractId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractId = req.params["contractId"];

                    const contract = await panelServices.getContractById(
                        {
                            contractId: contractId
                        }
                    );

                    const result = {
                        contract : contract
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

app.get('/contract',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const contractList = await panelServices.getAllContracts(
                        {
                            companyId: req.companyId
                        }
                    );

                    const result = {
                        contractList : contractList
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

app.post('/contract/removeProjectItem',
    checkAuthentication,
    checkAuthorization,
    async (req, res) => 
        {
            try 
            {
                const removeProjectItemInfo = req.body;

                const removeContractPprojectItemResult = await panelServices.removeContractProjectItem(
                    {
                        removeProjectItemInfo: removeProjectItemInfo
                    }
                );

                const result = {
                    result : removeContractPprojectItemResult
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

app.post('/contract/setProjectAndProjectItem',
    checkAuthentication,
    checkAuthorization,
    async (req, res) => 
        {
            try 
            {
                const setProjectAndProjectItemInfo = req.body;

                const setProjectAndProjectItemInfoResult = await panelServices.setContractProjectAndProjectItem(
                    {
                        setProjectAndProjectItemInfo: setProjectAndProjectItemInfo
                    }
                );

                const result = {
                    result : setProjectAndProjectItemInfoResult
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

app.post('/contract/setPayablePrice',
    checkAuthentication,
    checkAuthorization,
    async (req, res) => 
        {
            try 
            {
                const setPayablePriceInfo = req.body;

                const setContractPayablePriceResult = await panelServices.setContractPayablePriceAndDiscount(
                    {
                        setPayablePriceInfo: setPayablePriceInfo
                    }
                );

                const result = {
                    result : setContractPayablePriceResult
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


app.get('/contract/byProject/:projectId',
    checkAuthentication,
    checkAuthorization,
    async (req, res) =>
        {
            try 
                {
                    const projectId = req.params["projectId"];

                    const contractList = await panelServices.getAllContractByProject(
                        {
                            projectId: projectId
                        }
                    );

                    const result = {
                        contractList : contractList
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
                    // extreact userId from headers
                    const userId = "6484a5445b3d84cfe46a9b30";

                    const contractReviewList = await panelServices.getAllContractReviewByUserId(
                        {
                            userId
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

app.post('/user/setAccess',
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

                    const result = {
                        token : setUserAccessResult
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

        res.status(400).json(
            {
                type:false,
                message: error.message 
            }
        );
    }


app.listen(
    process.env.PORT,
    function()
        {
            console.info('... بسم الله الرزاق ...');
            console.log(`Init ${packageJson.name} on ${process.env.PORT} : http://localhost:${process.env.PORT}`);
        }
);
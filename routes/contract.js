module.exports = function buildCreateContractRouter
(
    {
        express,
        panelServices,
        sendResult,
        processError,
        checkAuthentication,
        checkAuthorization
    }
)
    {
        if
        (
            !express
        )
            {
                throw new Error('buildCreateContractRouter must have express.');
            }

        if
        (
            !panelServices
        )
            {
                throw new Error('buildCreateContractRouter must have panelServices.');
            }

        if
        (
            !sendResult
        )
            {
                throw new Error('buildCreateContractRouter must have sendResult.');
            }

        if
        (
            !processError
        )
            {
                throw new Error('buildCreateContractRouter must have processError.');
            }

        if
        (
            !checkAuthentication
        )
            {
                throw new Error('buildCreateContractRouter must have checkAuthentication.');
            }

        if
        (
            !checkAuthorization
        )
            {
                throw new Error('buildCreateContractRouter must have checkAuthorization.');
            }

        return function createContractRouter
        ()
            {
                let router = express.Router();

                router.post('/',
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

                router.post('/setDiscount',
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

                router.post('/byProjectAndStartDateAndEndDate',
                    checkAuthentication,
                    checkAuthorization,
                    async(req, res) => 
                        {
                            try
                                {
                                    const getAllContractByProjectAndStartDateAndEndDateInfo = req.body;

                                    const contractList = await panelServices.getAllContractByProjectAndStartDateAndEndDate(
                                        {
                                            getAllContractByProjectAndStartDateAndEndDateInfo: getAllContractByProjectAndStartDateAndEndDateInfo
                                        }
                                    )

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
                );

                router.get('/:contractId',
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
                );

                router.get('/filter/:filter',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) =>
                        {
                            try 
                                {
                                    const filter = req.params["filter"];

                                    const companyId = req.body.companyId;

                                    const contractList = await panelServices.getAllContractByStatus(
                                        {
                                            status: filter,
                                            companyId: companyId
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

                router.get('/',
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

                router.post('/removeProjectItem',
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

                router.post('/setProjectAndProjectItem',
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

                router.post('/setPayablePrice',
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

                router.post('/removePayablePrice',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) => 
                        {
                            try 
                            {
                                const removeContractPayablePriceAndDiscountInfo = req.body;

                                const removeContractPayablePriceAndDiscountResult = await panelServices.removeContractPayablePriceAndDiscount(
                                    {
                                        removeContractPayablePriceAndDiscountInfo: removeContractPayablePriceAndDiscountInfo
                                    }
                                );

                                const result = {
                                    result : removeContractPayablePriceAndDiscountResult
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

                router.get('/byProject/:projectId',
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

                router.post('/requestConfirmation',
                    checkAuthentication,
                    checkAuthorization,
                    async(req, res) => 
                        {
                            try
                                {
                                    const contractRequestConfirmationInfo = req.body;

                                    const contractRequestConfirmationResult = await panelServices.contractRequestConfirmation(
                                        {
                                            contractRequestConfirmationInfo: contractRequestConfirmationInfo
                                        }
                                    )

                                    const result = {
                                        result : contractRequestConfirmationResult
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

                router.post('/acceptRequestedContract',
                    checkAuthentication,
                    checkAuthorization,
                    async(req, res) => 
                        {
                            try
                                {
                                    const acceptRequestedContractInfo = req.body;

                                    const acceptRequestedContractResult = await panelServices.acceptRequestedContract(
                                        {
                                            acceptRequestedContractInfo: acceptRequestedContractInfo
                                        }
                                    )

                                    const result = {
                                        result : acceptRequestedContractResult
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

                router.post('/rejectRequestedContract',
                    checkAuthentication,
                    checkAuthorization,
                    async(req, res) => 
                        {
                            try
                                {
                                    const rejectRequestedContractInfo = req.body;

                                    const rejectRequestedContractResult = await panelServices.rejectRequestedContract(
                                        {
                                            rejectRequestedContractInfo: rejectRequestedContractInfo
                                        }
                                    )

                                    const result = {
                                        result : rejectRequestedContractResult
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

                router.post('/setContent',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) => 
                        {
                            try 
                            {
                                const setContractContentInfo = req.body;

                                const setContractContentResult = await panelServices.setContractContent(
                                    {
                                        setContractContentInfo: setContractContentInfo
                                    }
                                );

                                const result = {
                                    result : setContractContentResult
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

                router.delete('/:contractId',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) =>
                        {
                            try 
                                {
                                    const contractId = req.params["contractId"];

                                    const removeContractByIdResult = await panelServices.removeContractById(
                                        {
                                            contractId: contractId
                                        }
                                    );

                                    const result = {
                                        result : removeContractByIdResult
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

                
                router.post('/editBaseInfo',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) => 
                        {
                            try 
                            {
                                const editContractBaseInfoRequest = req.body;

                                const editContractBaseInfoResult = await panelServices.editContractBaseInfo(
                                    {
                                        editContractBaseInfoRequest: editContractBaseInfoRequest
                                    }
                                );

                                const result = {
                                    result : editContractBaseInfoResult
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
                
                return router;
            }
    }
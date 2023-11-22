module.exports = function buildCreateContractTemplateRouter
(
    {
        express,
        contractTemplateUseCases,
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
                throw new Error('buildCreateContractTemplateRouter must have express.');
            }

        if
        (
            !contractTemplateUseCases
        )
            {
                throw new Error('buildCreateContractTemplateRouter must have contractTemplateUseCases.');
            }
        else if
        (
            !contractTemplateUseCases.addContractTemplate
        )
            {
                throw new Error('buildCreateContractTemplateRouter contractTemplateUseCases must have addContractTemplate.');
            }
        else if
        (
            !contractTemplateUseCases.editContractTemplate
        )
            {
                throw new Error('buildCreateContractTemplateRouter contractTemplateUseCases must have editContractTemplate.');
            }

        else if
        (
            !contractTemplateUseCases.getAllContractTemplate
        )
            {
                throw new Error('buildCreateContractTemplateRouter contractTemplateUseCases must have getAllContractTemplate.');
            }
        else if
        (
            !contractTemplateUseCases.getContractTemplateById
        )
            {
                throw new Error('buildCreateContractTemplateRouter contractTemplateUseCases must have getContractTemplateById.');
            }

        if
        (
            !sendResult
        )
            {
                throw new Error('buildCreateContractTemplateRouter must have sendResult.');
            }

        if
        (
            !processError
        )
            {
                throw new Error('buildCreateContractTemplateRouter must have processError.');
            }

        if
        (
            !checkAuthentication
        )
            {
                throw new Error('buildCreateContractTemplateRouter must have checkAuthentication.');
            }

        if
        (
            !checkAuthorization
        )
            {
                throw new Error('buildCreateContractTemplateRouter must have checkAuthorization.');
            }

        return function createContractTemplateRouter
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
                                    const contractTemplateInfo = req.body;

                                    const contractTemplateId = await contractTemplateUseCases.addContractTemplate(
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

                router.put('/:contractTemplateId',
                    checkAuthentication,
                    checkAuthorization,
                    async(req, res) => 
                        {
                            try
                                {
                                    const contractTemplateId = req.params["contractTemplateId"];
                                    const updateContractTemplateInfo = req.body;

                                    const updateContractTemplateResult = await contractTemplateUseCases.editContractTemplate(
                                        {
                                            contractTemplateId: contractTemplateId,
                                            updateContractTemplateInfo: updateContractTemplateInfo
                                        }
                                    )

                                    const result = {
                                        result : updateContractTemplateResult
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

                router.get('/',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) =>
                        {
                            try 
                                {
                                    const companyId = req.companyId;

                                    const contractTemplateList = await contractTemplateUseCases.getAllContractTemplate(
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

                router.get('/:contractTemplateId',
                    checkAuthentication,
                    checkAuthorization,
                    async (req, res) =>
                        {
                            try 
                                {
                                    const contractTemplateId = req.params["contractTemplateId"];

                                    const contractTemplate = await contractTemplateUseCases.getContractTemplateById(
                                        {
                                            contractTemplateId: contractTemplateId
                                        }
                                    );

                                    const result = {
                                        contractTemplate : contractTemplate
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
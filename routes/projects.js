module.exports = function buildCreateProjectRouter
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
                throw new Error('buildCreateProjectRouter must have express.');
            }

        if
        (
            !panelServices
        )
            {
                throw new Error('buildCreateProjectRouter must have panelServices.');
            }

        if
        (
            !sendResult
        )
            {
                throw new Error('buildCreateProjectRouter must have sendResult.');
            }

        if
        (
            !processError
        )
            {
                throw new Error('buildCreateProjectRouter must have processError.');
            }

        if
        (
            !checkAuthentication
        )
            {
                throw new Error('buildCreateProjectRouter must have checkAuthentication.');
            }

        if
        (
            !checkAuthorization
        )
            {
                throw new Error('buildCreateProjectRouter must have checkAuthorization.');
            }

        return function createProjectRouter
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

                router.get('/list',
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

                router.get('/:projectId',
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

                return router;
            }
    }
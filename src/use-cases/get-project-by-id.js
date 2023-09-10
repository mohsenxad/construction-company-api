module.exports = function buildGetProjectById
(
    {
        getProjectByIdDB
    }
)
    {
        if
        (
            !getProjectByIdDB
        )
            {
                throw new Error('buildGetProjectById must have getProjectByIdDB.');
            }

        return async function getProjectById
        (
            {
                projectId
            }
        )
            {

                const getProjectByIdDBResult = await getProjectByIdDB(
                    {
                        projectId: projectId
                    }
                );

                return getProjectByIdDBResult;

            }
    }
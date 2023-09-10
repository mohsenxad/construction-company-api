module.exports = function buildAddProject
(
    {
        addProjectDB,
        makeProject
    }
)
    {
        if
        (
            !addProjectDB
        )
            {
                throw new Error('buildAddProject must have addProjectDB.');
            }

        if
        (
            !makeProject
        )
            {
                throw new Error('buildAddProject must have makeProject.');
            }
        return async function addProject
        (
            {
                projectInfo
            }
        )
            {
                if
                (
                    !projectInfo
                )
                    {
                        throw new Error('addProject must have projectInfo.');
                    }
                
                const project = await makeProject(
                    projectInfo
                );

                const addProjectDBResult = await addProjectDB(
                    {
                        project:project
                    }
                );

                return addProjectDBResult;
            }
    }
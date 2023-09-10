module.exports = function buildGetAllProjects
(
    {
        getAllProjectDB,
    }
)
    {
        
        if
        (
            !getAllProjectDB
        )
            {
                throw new Error('buildGetAllProjects must have getAllProjectDB.');
            }

        return async function getAllProjects
        (
            {
                companyId
            }
        )
            {

                const getAllProjectDBResult = await getAllProjectDB(
                    {
                        companyId:companyId
                    }
                );

                return getAllProjectDBResult;
                
            }
    }
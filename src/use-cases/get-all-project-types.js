module.exports = function buildGetAllProjectTypes
(
    {
        getAllProjectTypeDB,
    }
)
    {
        
        if
        (
            !getAllProjectTypeDB
        )
            {
                throw new Error('buildGetAllProjectTypes must have getAllProjectTypeDB.');
            }

        return async function getAllProjectTypes
        ()
            {

                const getAllProjectTypeDBResult = await getAllProjectTypeDB();

                return getAllProjectTypeDBResult;
                
            }
    }
module.exports = function buildGetAllContractTypes
(
    {
        getAllContractTypeDB,
    }
)
    {
        
        if
        (
            !getAllContractTypeDB
        )
            {
                throw new Error('buildGetAllContractTypes must have getAllContractTypeDB.');
            }

        return async function getAllContractTypes
        ()
            {

                const getAllContractTypeDBResult = await getAllContractTypeDB();

                return getAllContractTypeDBResult;
                
            }
    }
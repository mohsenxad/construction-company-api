module.exports = function buildGetAllContractPaymentMethods
(
    {
        getAllContractPaymentMethodDB,
    }
)
    {
        
        if
        (
            !getAllContractPaymentMethodDB
        )
            {
                throw new Error('buildGetAllContractPaymentMethods must have getAllContractPaymentMethodDB.');
            }

        return async function getAllContractPaymentMethods
        ()
            {

                const getAllContractPaymentMethodDBResult = await getAllContractPaymentMethodDB();

                return getAllContractPaymentMethodDBResult;
                
            }
    }
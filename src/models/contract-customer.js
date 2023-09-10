module.exports = function buildMakeContractCustomer
(
    {
        ObjectId
    }
)
    {
        if 
        (
            !ObjectId
        )
            {
                throw new Error('buildMakeContractCustomer must have ObjectId')
            }

        return function makeContractCustomer
        (
            {
                contractId,
                customerId
            }
        )
            {
                let contractMongoId;

                if 
                (
                    !contractId
                )
                    {
                        throw new Error('قرارداد را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                contractMongoId = new ObjectId(
                                    contractId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات قرارداد صحیح نمیباشد.')
                            }
                    }

                let customerMongoId;

                if 
                (
                    !customerId
                )
                    {
                        throw new Error('اطلاعات مشتری لازم است.')
                    }
                else
                    {
                        try
                            {
                                customerMongoId = new ObjectId(
                                    customerId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات مشتری صحیح نمیباشد.')
                            }
                    }

                return Object.freeze(
                    {
                        getContractId: () => contractId,
                        getCustomerId: () => customerId,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            contract: contractMongoId,
                            customer: customerMongoId,
                        }
                    }
            }
    }
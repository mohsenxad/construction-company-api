module.exports = function buildMakeContractPaymentDicker
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
                throw new Error('buildMakeContractPaymentDicker must have ObjectId')
            }
        return function makeContractPaymentDicker
        (
            {
                contractId,
                contractPaymentMethodId = "6478c472bc098039ca4f379c",
                price,
                registerDate = new Date(),
                isSettled= false
            }
        )
            {
                let contractMongoId;
                
                if 
                (
                    !contractId
                )
                    {
                        throw new Error('قرارداد را انتخاب کنید')
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
                                throw new Error('اطلاعات قرارداد صحیح نمیباشد')
                            }
                    }

                let contractPaymentMethodMongoId;
            
                if 
                (
                    !contractPaymentMethodId
                )
                    {
                        throw new Error('نوع پرداخت را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                contractPaymentMethodMongoId = new ObjectId(
                                    contractPaymentMethodId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات نوع پرداخت صحیح نمیباشد')
                            }
                    }


                if 
                (
                    !price
                )
                    {
                        throw new Error('مبلغ پرداخت تهاتر را مشخص کنید.')
                    }

                
                return Object.freeze(
                    {
                        getContractId: () => contractId,
                        getContractPaymentMethodId: () => contractPaymentMethodId,
                        getPrice: ()=> price,
                        getRegisterDate: ()=>registerDate,
                        getIsSettled: ()=> isSettled,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            contract: contractMongoId,
                            contractPaymentMethod: contractPaymentMethodMongoId,
                            price:price,
                            registerDate: registerDate,
                            isSettled: isSettled
                        }
                    }
            }
    }
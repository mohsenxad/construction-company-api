module.exports = function buildMakeContractPaymentDeed
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
        return function makeContractPaymentDeed
        (
            {
                contractId,
                contractPaymentMethodId = "649442d21a67cd557ed7b88a",
                bankAccountId,
                price,
                registerDate = new Date(),
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

                let bankAccountMongoId;
    
                if 
                (
                    !bankAccountId
                )
                    {
                        throw new Error('شماره حساب را انتخاب کنید')
                    }
                else
                    {
                        try
                            {
                                bankAccountMongoId = new ObjectId(
                                    bankAccountId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات شماره حساب صحیح نمیباشد')
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
                        getBankAccountId: ()=> bankAccountId,
                        getPrice: ()=> price,
                        getRegisterDate: ()=>registerDate,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            contract: contractMongoId,
                            contractPaymentMethod: contractPaymentMethodMongoId,
                            bankAccount:bankAccountMongoId,
                            price:price,
                            registerDate: registerDate
                        }
                    }
            }
    }
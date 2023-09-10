module.exports = function buildMakeContractPayment
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
                throw new Error('buildMakeContractPayment must have ObjectId')
            }
        return function makeContractPayment
        (
            {
                contractId,
                contractPaymentMethodId,
                bankAccountId,
                dueDate
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
                    !dueDate
                )
                    {
                        throw new Error('تاریخ سررسید پرداخت را مشخص کنید.')
                    }

                
                return Object.freeze(
                    {
                        getContractId: () => contractId,
                        getContractPaymentMethodId: () => contractPaymentMethodId,
                        getBankAccountId: ()=> bankAccountId,
                        getDueDate: ()=> dueDate,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            contract: contractMongoId,
                            contractPaymentMethod: contractPaymentMethodMongoId,
                            bankAccount:bankAccountMongoId,
                            dueDate: new Date(dueDate)
                        }
                    }
            }
    }
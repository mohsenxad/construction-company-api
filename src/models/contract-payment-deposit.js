module.exports = function buildMakeContractPaymentDeposit
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
                throw new Error('buildMakeContractPaymentDeposit must have ObjectId')
            }
        return function makeContractPaymentDeposit
        (
            {
                contractId,
                contractPaymentMethodId = "6478c456bc098039ca4f379a",
                price,
                bankAccountId,
                dueDate,
                dueDateShamsi
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
                        throw new Error('تاریخ سررسید پرداخت نقدی را مشخص کنید.')
                    }

                    
                if 
                (
                    !dueDateShamsi
                )
                    {
                        throw new Error('تاریخ شمسی سررسید پرداخت نقدی را مشخص کنید.')
                    }

                if 
                (
                    !price
                )
                    {
                        throw new Error('مبلغ  پرداخت نقدی را مشخص کنید.')
                    }

                return Object.freeze(
                    {
                        getContractId: () => contractId,
                        getContractPaymentMethodId: () => contractPaymentMethodId,
                        getBankAccountId: ()=> bankAccountId,
                        getDueDate: ()=> dueDate,
                        getDueDateShamsi: ()=> dueDateShamsi,
                        getPrice: ()=> price,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            contract: contractMongoId,
                            contractPaymentMethod: contractPaymentMethodMongoId,
                            bankAccount:bankAccountMongoId,
                            dueDate: new Date(dueDate),
                            dueDateShamsi: dueDateShamsi,
                            price: price,
                        }
                    }
            }
    }
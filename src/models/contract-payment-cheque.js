module.exports = function buildMakeContractPaymentCheque
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
                throw new Error('buildMakeContractPaymentCheque must have ObjectId')
            }
        return function makeContractPaymentCheque
        (
            {
                contractId,
                contractPaymentMethodId = "6478c467bc098039ca4f379b",
                bankAccountId,
                dueDate,
                dueDateShamsi,
                price,
                chequeNumber,
                bankId,
                drawer,
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

                if 
                (
                    !dueDateShamsi
                )
                    {
                        throw new Error('تاریخ شمسی سررسید پرداخت را مشخص کنید.')
                    }
                    

                if 
                (
                    !price
                )
                    {
                        throw new Error(' مبلغ پرداخت چک را مشخص کنید.')
                    }

                if 
                (
                    !chequeNumber
                )
                    {
                        throw new Error(' شماره چک پرداخت چک را مشخص کنید.')
                    }

                let bankMongoId;

                if 
                (
                    !bankId
                )
                    {
                        throw new Error('بانک مربوط به چک را انتخاب کنید')
                    }
                else
                    {
                        try
                            {
                                bankMongoId = new ObjectId(
                                    bankId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('بانک مربوط به چک صحیح نمیباشد')
                            }
                    }
                
                    
                if 
                (
                    !drawer
                )
                    {
                        throw new Error('نام و نام خانوادگی صاحب چک را وارد کنید.')
                    }

                return Object.freeze(
                    {
                        getContractId: () => contractId,
                        getContractPaymentMethodId: () => contractPaymentMethodId,
                        getBankAccountId: ()=> bankAccountId,
                        getDueDate: ()=> dueDate,
                        getDueDateShamsi: ()=> dueDateShamsi,
                        getPrice: ()=> price,
                        getChequeNumber: ()=> chequeNumber,
                        getBankId: ()=> bankId,
                        getDrawer: ()=> drawer,
                        getIsSettled: ()=> isSettled,
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
                            dueDate: new Date(dueDate),
                            dueDateShamsi: dueDateShamsi,
                            price: price,
                            chequeNumber: chequeNumber,
                            bank: bankMongoId,
                            drawer: drawer,
                            registerDate: registerDate,
                            isSettled: isSettled
                        }
                    }
            }
    }
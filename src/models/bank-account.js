module.exports = function buildMakeBankAccount
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
                throw new Error('buildMakeBankAccount must have ObjectId')
            }
        return async function makeBankAccount
        (
            {
                companyId,
                bankObjectId,
                accounNumber,
                shebaNumber,
                isActive = true
            }
        )
            {

                let companyMongoId;
            
                if 
                (
                    !companyId
                )
                    {
                        throw new Error('شرکت را انتخاب کنید.')
                    }
                else
                    {
                        try
                            {
                                companyMongoId = new ObjectId(
                                    companyId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات شرکت صحیح نمیباشد.')
                            }
                    }

                let bankMongoId;

                if 
                (
                    !bankObjectId
                )
                    {
                        throw new Error('اطلاعات بانک لازم است.')
                    }
                else
                    {
                        try
                            {
                                bankMongoId = new ObjectId(
                                    bankObjectId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات بانک صحیح نمیباشد.')
                            }
                    }
                
                if 
                (
                    !accounNumber
                )
                    {
                        throw new Error('وارد کردن شماره حساب الزامی است.')
                    }

                if 
                (
                    !shebaNumber
                )
                    {
                        {
                            throw new Error('وارد کردن شماره شبا الزامی است.')
                        }
                    }
                
                
                return Object.freeze(
                    {
                        getBankObjectId: () => bankObjectId,
                        getAccounNumber: () => accounNumber,
                        getShebaNumber: ()=> shebaNumber,
                        getIsActive: ()=> isActive,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            bank: bankMongoId,
                            accounNumber: accounNumber,
                            shebaNumber: shebaNumber,
                            isActive: isActive
                        }
                    }
            }
    }
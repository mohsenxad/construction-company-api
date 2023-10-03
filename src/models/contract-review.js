module.exports = function buildMakeContractReview
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
                throw new Error('buildMakeContractReview must have ObjectId')
            }
        return function makeContractReview
        (
            {
                userCompanyAccessId,
                contractId,
                registerDateTime = new Date()
            }
        )
            {
                let userCompanyAccessMongoId;

                if 
                (
                    !userCompanyAccessId
                )
                    {
                        throw new Error('کاربر را انتخاب کنید.');
                    }
                else
                    {
                        try
                            {
                                userCompanyAccessMongoId = new ObjectId(
                                    userCompanyAccessId
                                );

                            }
                        catch (error) 
                            {
                                throw new Error('اطلاعات کاربر صحیح نمیباشد')
                            }
                    }

                let contractMongoId;
                if 
                (
                    !contractId
                )
                    {
                        throw new Error('قرارداد را انتخاب کنید.');
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

                return Object.freeze(
                    {
                        getUserCompanyAccessId:() => userCompanyAccessId,
                        getContractId:() => contractId,
                        getRegisterDateTime:() => registerDateTime,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            userCompanyAccess: userCompanyAccessMongoId,
                            contract: contractMongoId,
                            registerDateTime: registerDateTime,
                        }
                    }
            }
    }
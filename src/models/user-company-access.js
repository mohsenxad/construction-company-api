module.exports = function buildMakeUserCompanyAccess
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
                throw new Error('buildMakeUserCompanyAccess must have ObjectId')
            }
        return function makeUserCompanyAccess
        (
            {
                newUserId,
                newCompanyId,
                isAddContract = false,
                isUserManager= false,
                isCustomerManager= false,
                isContractManager= false,
                isContractPaymentManager= false,
                isContractReviewer= false,
                isActive =true
            }
        )
            {
                let userMongoId;

                if 
                (
                    !newUserId
                )
                    {
                        throw new Error('کاربر را مشخص کنید.');
                    }
                else
                {
                    try
                        {
                            userMongoId = new ObjectId(
                                newUserId
                            );

                        }
                    catch (error) 
                        {
                            throw new Error('اطلاعات کاربر صحیح نمیباشد.')
                        } 
                }

                
                let companyMongoId;
                if 
                (
                    !newCompanyId
                )
                    {
                        throw new Error('شرکت را مشخص کنید.');
                    }
                else
                {
                    try
                        {
                            companyMongoId = new ObjectId(
                                newCompanyId
                            );

                        }
                    catch (error) 
                        {
                            throw new Error('اطلاعات شرکت صحیح نمیباشد.')
                        } 
                }

                

                return Object.freeze(
                    {
                        getUserId:() => newUserId,
                        getCompanyId:() => newCompanyId,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            user: userMongoId,
                            company: companyMongoId,
                            isAddContract: isAddContract,
                            isUserManager: isUserManager,
                            isCustomerManager: isCustomerManager,
                            isContractManager: isContractManager,
                            isContractPaymentManager: isContractPaymentManager,
                            isContractReviewer: isContractReviewer,
                            isActive: isActive
                        }
                    }

            }
    }
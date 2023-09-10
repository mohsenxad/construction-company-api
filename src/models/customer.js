module.exports = function buildMakeCustomer
()
    {
        return async function makeCustomer
        (
            {
                firstname,
                lastname,
                nationalCode,
                address,
                postalCode,
                mobileNumber,
                phoneNumber,
                isConfirmedMobileNumber = false,
                isConfirmedEmail = false
            }
        )
            {
                if 
                (
                    !firstname
                )
                    {
                        throw new Error('نام را وارد کنید.');
                    }
                
                if 
                (
                    !lastname
                )
                    {
                        throw new Error('نام خانوادگی را وارد کنید.');
                    }

                let nationalCodeNumber;
                if 
                (
                    !nationalCode
                )
                    {
                        throw new Error('کد ملی را وارد کنید.');
                    }
                else
                    {
                        try 
                            {
                                nationalCodeNumber = parseInt(nationalCode)  
                            }
                        catch (error)
                            {
                                throw new Error('مقدار کد ملی صحیح نمیباشد')
                            }
                    }

                if 
                (
                    !address
                )
                    {
                        throw new Error('آدرس را وارد کنید.');
                    }

                if 
                (
                    !postalCode
                )
                    {
                        throw new Error('کد پستی را وارد کنید.');
                    }

                let mobileNumberNumber;
                if 
                (
                    !mobileNumber
                )
                    {
                        throw new Error('شماره موبایل را وارد کنید.');
                    }
                else
                    {
                        try 
                            {
                                mobileNumberNumber = parseInt(mobileNumber)  
                            }
                        catch (error)
                            {
                                throw new Error('شماره موبایل صحیح نمی باشد.')
                            }
                    }

                if 
                (
                    !phoneNumber
                )
                    {
                        throw new Error('شماره تلفن را وارد کنید.');
                    }

                return Object.freeze(
                    {
                        getFirstname:() => firstname,
                        getLastname:() => lastname,
                        getNationalCode:() => nationalCode,
                        getAddress: () => address,
                        getPostalCode: () => postalCode,
                        getMobileNumber: ()=> mobileNumber,
                        getPhoneNumber: ()=> phoneNumber,
                        getNationalCodeNumber: ()=> nationalCodeNumber,
                        getMobileNumberNumber: ()=> mobileNumberNumber,
                        getIsConfirmedMobileNumber: ()=> isConfirmedMobileNumber,
                        getIsConfirmedEmail: ()=> isConfirmedEmail,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            firstname: firstname,
                            lastname: lastname,
                            nationalCode: nationalCode,
                            address: address,
                            postalCode: postalCode,
                            mobileNumber: mobileNumber,
                            phoneNumber: phoneNumber,
                            nationalCodeNumber: nationalCodeNumber,
                            mobileNumberNumber: mobileNumberNumber,
                            isConfirmedMobileNumber: isConfirmedMobileNumber,
                            isConfirmedEmail: isConfirmedEmail
                        }
                    }
            }
    }
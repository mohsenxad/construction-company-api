module.exports = function buildMakeCompany
()
    {
        return async function makeCompany
        (
            {
                title,
                domain,
                address,
                postalCode,
                mobileNumber,
                phoneNumberList
            }
        )
            {
                if 
                (
                    !title
                )
                    {
                        throw new Error('عنوان را وارد کنید');
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

                

                return Object.freeze(
                    {
                        getTitle:() => title,
                        getAddress: () => address,
                        getPostalCode: () => postalCode,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            title: title,
                            address: address,
                            postalCode: postalCode
                        }
                    }
            }
    }
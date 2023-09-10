module.exports = function buildMakeUser
()
    {
        return async function makeUser
        (
            {
                firstname,
                lastname,
                username,
                password,
                isActive = true
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

                
                if 
                (
                    !username
                )
                    {
                        throw new Error('نام کاربری را وارد کنید.');
                    }
                

                if 
                (
                    !password
                )
                    {
                        throw new Error('رمز ورود را وارد کنید.');
                    }


                return Object.freeze(
                    {
                        getFirstname:() => firstname,
                        getLastname:() => lastname,
                        getUsername:() => username,
                        getPassword: () => password,
                        getIsActive: ()=> isActive,
                        toBson: toBson,
                    }
                );

                function toBson()
                    {
                        return {
                            firstname: firstname,
                            lastname: lastname,
                            username: username,
                            password: password,
                            isActive: isActive
                        }
                    }
            }
    }
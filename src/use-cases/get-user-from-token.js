module.exports = function buildGetUserFromToken
(
    {
        jwt,
        JWT_SECRET
    }
)
    {
        if
        (
            !jwt
        )
            {
                throw new Error('buildGetUserFromToken must have jwt.');
            }

        if
        (
            !JWT_SECRET
        )
            {
                throw new Error('buildGetUserFromToken must have JWT_SECRET.');
            }
        return async function getUserFromToken
        (
            {
                token
            }
        )
            {
                try 
                    {
                        let user = jwt.verify(token, JWT_SECRET);
                        return user;
                    }
                catch (error)
                    {
                        throw new Error("خطای شناسایی لطفا دوباره وارد شوید.")        
                    }
                
            }
    }
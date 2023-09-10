module.exports = function buildLogin
(
    {
        jwt,
        JWT_SECRET,
        getUserByUsernameAndPasswordDB
    }
)
    {
        if
        (
            !jwt
        )
            {
                throw new Error('buildLogin must have jwt.');
            }

        if
        (
            !JWT_SECRET
        )
            {
                throw new Error('buildLogin must have JWT_SECRET.');
            }
        if
        (
            !getUserByUsernameAndPasswordDB
        )
            {
                throw new Error('buildLogin must have getUserByUsernameAndPasswordDB.');
            }

        return async function login
        (
            {
                loginInfo
            }
        )
            {
                const username = loginInfo.username;
                const password = loginInfo.password;

                if
                (
                    !loginInfo ||
                    !username ||
                    !password 
                )
                    {
                        throw new Error("کلمه و رمز عبور اشتباه میباشد.")
                    }

                const foundUser = await getUserByUsernameAndPasswordDB(
                    {
                        username: username,
                        password: password
                    }
                );

                if
                (
                    foundUser &&
                    foundUser._id
                )
                    {
                        var token = jwt.sign(
                            foundUser,
                            JWT_SECRET
                        );

                        return token;
                    }
                else
                    {
                        throw new Error("کلمه و رمز عبور اشتباه میباشد.")
                    }
            }
    }
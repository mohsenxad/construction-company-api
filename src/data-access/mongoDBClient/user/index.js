module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
       

        const { addUser } = require('./add-user')
        (
            {
                getDb: getDb
            } 
        );

        const { getAllUser } = require('./get-all-user')
        (
            {
                getDb: getDb
            } 
        );

        const { getUserById } = require('./get-user-by-id')(
            {
                getDb:getDb,
                ObjectId: ObjectId
            }
        );

        const { setUserAccess } = require('./set-user-access')(
            {
                getDb: getDb,
                ObjectId: ObjectId
            }
        );

        const { getUserByUsernameAndPassword } = require('./get-user-by-username-and-password')(
            {
                getDb: getDb
            }
        )

       
        const services = Object.freeze(
            {
                getAllUser,
                addUser,
                getUserById,
                setUserAccess,
                getUserByUsernameAndPassword
            }
        );

        

        return services;

    }
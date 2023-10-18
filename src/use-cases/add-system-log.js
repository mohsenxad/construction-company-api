module.exports = function buildAddSystemLog
(
    {
        addSystemLogDB,
        makeSystemLog
    }
)
    {
        if
        (
            !addSystemLogDB
        )
            {
                throw new Error('buildAddSystemLog must have addSystemLogDB.');
            }

        if
        (
            !makeSystemLog
        )
            {
                throw new Error('buildAddSystemLog must have makeSystemLog.');
            }
        return async function addSystemLog
        (
            {
                systemLogInfo
            }
        )
            {

                if
                (
                    !systemLogInfo
                )
                    {
                        throw new Error('addSystemLogInfo must have systemLogInfo.');
                    }

                const systemLog = await makeSystemLog(
                    systemLogInfo
                );

                const addSystemLogDBResult = await addSystemLogDB(
                    {
                        systemLog: systemLog
                    }
                );

                return addSystemLogDBResult;

            }
    }
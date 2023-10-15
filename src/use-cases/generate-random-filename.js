module.exports = function buildGenerateRandomFilename
(
    {
        uuidv4
    }
)
    {
        if
        (
            !uuidv4
        )
            {
                throw new Error('buildGenerateRandomFilename must have uuidv4.');
            }
        return async function generateRandomFilename
        (
            {
                mimetype
            }
        )
            {
                if
                (
                    !mimetype
                )
                    {
                        throw new Error('generateRandomFilename must have mimetype.');
                    }
                
                if
                (
                    mimetype == "image/jpeg"
                )
                    {
                        return uuidv4()+'.jpg';        
                    }
                else  if
                (
                    mimetype == "image/png"
                )
                    {
                        return uuidv4()+'.png';        
                    }
                else
                    {
                        throw new Error('نوع فایل قابل پشتیبانی نمیباشد.');
                    }
            }
    }
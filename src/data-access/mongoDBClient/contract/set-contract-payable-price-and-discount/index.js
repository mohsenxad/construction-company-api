const buildTranslateSetContractPayablePriceAndDiscountResponse = require('./src/translate-set-contract-payable-price-and-discount-response');
const buildCreateSetContractPayablePriceAndDiscountOptions = require('./src/create-set-contract-payable-price-and-discount-options');
const buildSetContractPayablePriceAndDiscount = require('./src/set-contract-payable-price-and-discount');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateSetContractPayablePriceAndDiscountResponse = buildTranslateSetContractPayablePriceAndDiscountResponse();

        const createSetContractPayablePriceAndDiscountOptions = buildCreateSetContractPayablePriceAndDiscountOptions(
            {
                ObjectId: ObjectId
            }
        );

        const setContractPayablePriceAndDiscount = buildSetContractPayablePriceAndDiscount(
            {
                getDb: getDb,
                createOptions: createSetContractPayablePriceAndDiscountOptions,
                translateResponse: translateSetContractPayablePriceAndDiscountResponse
            }
        );

        const servies = Object.freeze(
            {
                setContractPayablePriceAndDiscount
            }
        );

        return servies;
    }
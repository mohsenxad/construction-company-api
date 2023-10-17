const buildTranslateRemoveContractPayablePriceAndDiscountResponse = require('./src/translate-remove-contract-payable-price-and-discount-response');
const buildCreateRemoveContractPayablePriceAndDiscountOptions = require('./src/create-remove-contract-payable-price-and-discount-options');
const buildRemoveContractPayablePriceAndDiscount = require('./src/remove-contract-payable-price-and-discount');

module.exports = function
(
    {
        getDb,
        ObjectId
    }
)
    {
        
        const translateRemoveContractPayablePriceAndDiscountResponse = buildTranslateRemoveContractPayablePriceAndDiscountResponse();

        const createRemoveContractPayablePriceAndDiscountOptions = buildCreateRemoveContractPayablePriceAndDiscountOptions(
            {
                ObjectId: ObjectId
            }
        );

        const removeContractPayablePriceAndDiscount = buildRemoveContractPayablePriceAndDiscount(
            {
                getDb: getDb,
                createOptions: createRemoveContractPayablePriceAndDiscountOptions,
                translateResponse: translateRemoveContractPayablePriceAndDiscountResponse
            }
        );

        const servies = Object.freeze(
            {
                removeContractPayablePriceAndDiscount
            }
        );

        return servies;
    }
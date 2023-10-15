const { ObjectId } = require('mongodb');

const buildMakeBankAccount = require('./bank-account');
const buildMakeProject = require('./project');
const buildMakeCustomer = require('./customer');
const buildMakeContract = require('./contract');
const buildMakeContractPayment = require('./contract-payment');
const buildMakeResidentialProjectItem = require('./residentialProjectItem');
const buildMakeLandParcelProjectItem = require('./landParcelProjectItem');
const buildMakeContractCustomer = require('./contract-customer');
const buildMakeUser = require('./user');
const buildMakeContractReview = require('./contract-review');
const buildMakeContractPaymentDeposit = require('./contract-payment-deposit');
const buildMakeContractPaymentCheque = require('./contract-payment-cheque');
const buildMakeContractPaymentDicker = require('./contract-payment-dicker');
const buildMakeContractPaymentDeed = require('./contract-payment-deed');
const buildMakeContractTemplate = require('./contract-template');
const buildMakeUserCompanyAccess = require('./user-company-access');
const buildMakeProjectItemGallery = require('./project-item-gallery');

module.exports = function
()
    {
        const makeBankAccount = buildMakeBankAccount(
            {
                ObjectId: ObjectId
            }
        );

        const makeProject = buildMakeProject(
            {
                ObjectId: ObjectId
            }
        );

        const makeCustomer = buildMakeCustomer();

        const makeContract = buildMakeContract(
            {
                ObjectId: ObjectId
            }
        );

        
        const makeContractPayment = buildMakeContractPayment(
            {
                ObjectId: ObjectId
            }
        );

        const makeResidentialProjectItem = buildMakeResidentialProjectItem(
            {
                ObjectId: ObjectId
            }
        );

        const makeLandParcelProjectItem = buildMakeLandParcelProjectItem(
            {
                ObjectId: ObjectId
            }
        );

        const makeContractCustomer = buildMakeContractCustomer(
            {
                ObjectId: ObjectId
            }
        );

        const makeUser  = buildMakeUser();

        const makeContractReview = buildMakeContractReview(
            {
                ObjectId: ObjectId
            }
        );

        
        const makeContractPaymentDeposit = buildMakeContractPaymentDeposit(
            {
                ObjectId: ObjectId
            }
        );

        const makeContractPaymentCheque = buildMakeContractPaymentCheque(
            {
                ObjectId: ObjectId
            }
        );

        const makeContractPaymentDicker = buildMakeContractPaymentDicker(
            {
                ObjectId: ObjectId
            }
        );

        
        const makeContractPaymentDeed = buildMakeContractPaymentDeed(
            {
                ObjectId: ObjectId
            }
        );

        const makeContractTemplate = buildMakeContractTemplate(
            {
                ObjectId: ObjectId
            }
        );

        const makeUserCompanyAccess = buildMakeUserCompanyAccess(
            {
                ObjectId: ObjectId
            }
        );

        const makeProjectItemGallery = buildMakeProjectItemGallery(
            {
                ObjectId: ObjectId
            }
        );

        const models = Object.freeze(
            {
                makeBankAccount,
                makeProject,
                makeCustomer,
                makeContract,
                makeContractPayment,
                makeResidentialProjectItem,
                makeLandParcelProjectItem,
                makeContractCustomer,
                makeUser,
                makeContractReview,
                makeContractPaymentDeposit,
                makeContractPaymentCheque,
                makeContractPaymentDicker,
                makeContractPaymentDeed,
                makeContractTemplate,
                makeUserCompanyAccess,
                makeProjectItemGallery
            }
        );

        return models;
    }
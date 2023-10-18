const mongoDBDriver = require('mongodb');
var MongoClient = mongoDBDriver.MongoClient;
const { ObjectId } = require('mongodb');

module.exports  = function
(
    {
        MONGODB_USERNAME,
        MONGODB_PASSWORD,
        DATABASE_NAME
    }
)
    {

        if(
            !MONGODB_USERNAME
        )
            {
                throw new Error("MongoDB Client must have an MONGODB_USERNAME");
            }

        if
        (
            !MONGODB_PASSWORD
        )
            {
                throw new Error("MongoDB Client must have an MONGODB_PASSWORD");
            }

        if
        (
            !DATABASE_NAME
        )
            {
                throw new Error("MongoDB Client must have an DATABASE_NAME");
            }

            const { getDb } = require('./get-db')
                (
                    {
                        MongoClient: MongoClient,
                        MONGODB_USERNAME : MONGODB_USERNAME,
                        MONGODB_PASSWORD: MONGODB_PASSWORD,
                        DATABASE_NAME: DATABASE_NAME
                    }
                );

            
            const contractServices = require('./contract')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

            const contractCustomerServices = require('./contract-customer')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

            const projectServices = require('./project')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

            const bankServices = require('./bank')(
                {
                    getDb:getDb
                }
            );

            const bankAccountServices = require('./bank-account')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

            const contractPaymentMethodServices = require('./contract-payment-method')(
                {
                    getDb:getDb
                }
            );

            const contractTypeServices = require('./contract-type')(
                {
                    getDb:getDb
                }
            );

            const projectTypeServices = require('./project-type')(
                {
                    getDb: getDb
                }
            );

            const contractPaymentServices = require('./contract-payment')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );


            const customerServices = require('./customer')(
                {
                    getDb: getDb
                }
            );

            const projectItemServices = require('./project-item')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );


            const userServices = require('./user')(
                {
                    getDb:getDb,
                    ObjectId: ObjectId
                }
            );

            const contractReviewServices = require('./contract-review')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

            const companyServices = require('./company')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

            const userCompanyAccessServices = require('./user-company-access')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

            const contractTemplateServices = require('./contract-template')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

            const projectItemGalleryServices = require('./project-item-gallery')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            );

            const systemLogServices = require('./system-log')(
                {
                    getDb: getDb,
                    ObjectId: ObjectId
                }
            )

            const services = Object.freeze(
                {
                    contract: contractServices,
                    contractCustomer: contractCustomerServices,
                    project: projectServices,
                    bank: bankServices,
                    bankAccount: bankAccountServices,
                    contractPaymentMethod: contractPaymentMethodServices,
                    contractType: contractTypeServices,
                    projectType: projectTypeServices,
                    contractPayment: contractPaymentServices,
                    customer: customerServices,
                    projectItem: projectItemServices,
                    user: userServices,
                    contractReview: contractReviewServices,
                    company: companyServices,
                    userCompanyAccess: userCompanyAccessServices,
                    contractTemplate: contractTemplateServices,
                    projectItemGallery: projectItemGalleryServices,
                    systemLog: systemLogServices
                }
            );

            return services;

        
    }
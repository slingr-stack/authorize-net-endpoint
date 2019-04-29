var fs = require('fs');
var FILE_NAME = "authorize-net-helpers.js"
var CODE = '';
var NAMESPACES = [];

var apiURL = [
    {namespace: 'test', name: 'authenticateTestRequest'},

    {namespace: 'paymentTransaction', name: 'createTransactionRequest'},
    {namespace: 'paymentTransaction', name: 'updateSplitTenderGroupRequest'},

    {namespace: 'customerProfile', name: 'createCustomerProfileRequest'},
    {namespace: 'customerProfile', name: 'getCustomerProfileRequest'},
    {namespace: 'customerProfile', name: 'getCustomerProfileIdsRequest'},
    {namespace: 'customerProfile', name: 'updateCustomerProfileRequest'},
    {namespace: 'customerProfile', name: 'deleteCustomerProfileRequest'},
    {namespace: 'customerProfile', name: 'createCustomerPaymentProfileRequest'},
    {namespace: 'customerProfile', name: 'getCustomerPaymentProfileRequest'},
    {namespace: 'customerProfile', name: 'getCustomerPaymentProfileListRequest'},
    {namespace: 'customerProfile', name: 'validateCustomerPaymentProfileRequest'},
    {namespace: 'customerProfile', name: 'updateCustomerPaymentProfileRequest'},
    {namespace: 'customerProfile', name: 'deleteCustomerPaymentProfileRequest'},
    {namespace: 'customerProfile', name: 'createCustomerShippingAddressRequest'},
    {namespace: 'customerProfile', name: 'getCustomerShippingAddressRequest'},
    {namespace: 'customerProfile', name: 'updateCustomerShippingAddressRequest'},
    {namespace: 'customerProfile', name: 'deleteCustomerShippingAddressRequest'},
    {namespace: 'customerProfile', name: 'createCustomerProfileFromTransactionRequest'},

    {namespace: 'recurringBilling', name: 'ARBCreateSubscriptionRequest'},
    {namespace: 'recurringBilling', name: 'ARBGetSubscriptionRequest'},
    {namespace: 'recurringBilling', name: 'ARBGetSubscriptionStatusRequest'},
    {namespace: 'recurringBilling', name: 'ARBUpdateSubscriptionRequest'},
    {namespace: 'recurringBilling', name: 'ARBCancelSubscriptionRequest'},
    {namespace: 'recurringBilling', name: 'ARBGetSubscriptionListRequest'},
];

var makeEndpointsHelpers = function () {


    for (var i in apiURL) {

        var ws = apiURL[i];

        if (NAMESPACES.indexOf(ws.namespace) < 0) {
            NAMESPACES.push(ws.namespace);
            CODE += "\n\nendpoint." + ws.namespace + " = {};";
        }

        var methodStr = '';
        methodStr += "\n\nendpoint." + ws.namespace + "." + ws.name + " = function(params) {";
        methodStr += "\n\tvar auth = endpoint.utils.merchantAuthentication();";
        methodStr += "\n\tvar obj = {";
        methodStr += "\n\t\t\"" + ws.name + "\": {";
        methodStr += "\n\t\t\t\"merchantAuthentication\": {";
        methodStr += "\n\t\t\t\t\"name\": auth.name,";
        methodStr += "\n\t\t\t\t\"transactionKey\": auth.transactionKey";
        methodStr += "\n\t\t\t}";
        methodStr += "\n\t\t}";
        methodStr += "\n\t};";
        methodStr += "\n\tif(params){";
        methodStr += "\n\t\tfor(var i in params) {";
        methodStr += "\n\t\t\tobj[\"" + ws.name + "\"][i] = params[i];";
        methodStr += "\n\t\t}";
        methodStr += "\n\t}";
        methodStr += "\n\tsys.logs.debug(\"Sending request ['" + ws.name + "'].\");";
        methodStr += "\n\treturn endpoint._post({path:'', body: obj });";

        methodStr += "\n};";

        CODE += methodStr;

    }

    var MESSAGE = '//////////////////////////////////////////////////////////////////////////////////\n';
    MESSAGE += '//                                                                              //\n';
    MESSAGE += '//  This file is generated with authorize-net/gen/gen-authorize-net-helpers.js  //\n';
    MESSAGE += '//                                                                              //\n';
    MESSAGE += '//  ' + new Date() + '                                     //\n';
    MESSAGE += '//////////////////////////////////////////////////////////////////////////////////\n';

    CODE = MESSAGE + CODE;

};

makeEndpointsHelpers();

fs.writeFile("../scripts/" + FILE_NAME, CODE, function (err) {
    if (err) {
        return console.error(err);
    }

    console.info('Generator has run successfully!');
});

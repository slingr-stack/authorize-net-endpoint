endpoint.utils = {};
endpoint.utils.merchantAuthentication = function () {

    var conf = endpoint._configuration;

    var apiLoginId = conf.apiEndpoint === 'production' ? conf.production.apiLoginId : conf.sandbox.sandboxApiLoginId;
    var transactionKey = conf.apiEndpoint === 'production' ? conf.production.transactionKey : conf.sandbox.sandboxTransactionKey;

    return {
        "name": "" + apiLoginId,
        "transactionKey": "" + transactionKey
    };

};

///////////////////////////////////
// Public API - Generic Functions
/////////////////////////////////

endpoint.post = function (url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._post(options);
};


/////////////////////////////////////
//  Private helpers
////////////////////////////////////

var convertParamsToString = function (queryMap) {
    var params = '';
    var first = true;
    if (queryMap && typeof queryMap == 'object') {
        for (var key in queryMap) {
            if (first) {
                params += '?' + key + '=' + queryMap[key];
                first = false;
            } else {
                params += '&' + key + '=' + queryMap[key];
            }
        }
    }
    return params;
};

var convertIdentifiersToString = function (identifiers) {
    if (typeof identifiers == 'object') {
        var str = '';
        if (Array.isArray(identifiers)) {
            var first = true;
            for (var i in identifiers) {
                if (first) {
                    str += identifiers[i];
                    first = false;
                } else {
                    str += ',' + identifiers[i];
                }
            }
            identifiers = str;
        }
    }
    return identifiers;
};

var isObjectId = function (value) {
    if (!value || typeof value !== 'string') {
        return false;
    }
    var checkForHexRegExp = new RegExp("^[0-9a-fA-F]{24}$");
    return checkForHexRegExp.test(value);
};

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);
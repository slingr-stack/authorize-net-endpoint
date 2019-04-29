package io.slingr.endpoints.authorizenet;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * <p>Authorize.Net endpoint
 * <p>
 * <p>Created by hpacini on 20/11/18.
 */
@SlingrEndpoint(name = "authorize-net", functionPrefix = "_")
public class AuthorizeNetEndpoint extends HttpEndpoint {

    private static final Logger logger = LoggerFactory.getLogger(AuthorizeNetEndpoint.class);

    private static final String API_URL_SANDBOX = "https://apitest.authorize.net/xml/v1/request.api";
    private static final String API_URL = "https://api.authorize.net/xml/v1/request.api";

    @EndpointProperty
    private String apiEndpoint;

    @EndpointProperty
    private String sandboxApiLoginId;

    @EndpointProperty
    private String sandboxTransactionKey;

    @EndpointProperty
    private String apiLoginId;

    @EndpointProperty
    private String transactionKey;

    public AuthorizeNetEndpoint() {
    }

    @Override
    public String getApiUri() {
        if ("prod".equals(apiEndpoint) || "production".equals(apiEndpoint)) {
            return API_URL;
        }
        return API_URL_SANDBOX;
    }

    @Override
    public void endpointStarted() {
        this.httpService().setDebug(false);
        this.httpService().setDefaultEmptyPath("");
        this.httpService().setupDefaultHeader("Content-Type", "text/plain");
    }

}

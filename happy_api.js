exports.createHappyApi = function(options) {
  
  // Declare default timeout
  var timeout = options.timeout || 5000;
  
  // API endpoint
  var endPoint = options.endPoint;
  
  // General request
  httpRequest = function(httpVerb, uri, requestDetails) {
    
    // Async flag
    var async = requestDetails.async || true;
    
    // Params
    var params = requestDetails.params || {};
    
    // Called before a request is sent
    var onLoading = requestDetails.onLoading || function() {};
    
    // Tracking upload progress
    var onsendstream = requestDetails.onsendstream || function() {};
    
    // Tracking download progress
    var ondatastream = requestDetails.ondatastream || function() {};
    
    var client = Ti.Network.createHTTPClient({
      async: async,
      onload : requestDetails.success(e),
      onerror: requestDetails.error(e),
      onsendstream: onsendstream,
      ondatastream: ondatastream,
      timeout: timeout  // in milliseconds
    });
   
    requestDetails.onLoading();
    client.open(httpVerb, endPoint + uri);
    // Send the request.
    client.send(params);
  };
  
  // Get request
  var getRequest = function(uri, getRequestDetails) {
    httpRequest("GET", uri, getRequestDetails);
  };
  
  var postRequest = function(uri, getRequestDetails) {
    httpRequest("POST", uri, getRequestDetails);
  };
  
  var putRequest = function(uri, getRequestDetails) {
    httpRequest("PUT", uri, getRequestDetails);
  };
  
  var patchRequest = function(uri, getRequestDetails) {
    httpRequest("PATCH", uri, getRequestDetails);
  };
  
  var deleteRequest = function(uri, getRequestDetails) {
    httpRequest("DELETE", uri, getRequestDetails);
  };
  
  var headRequest = function(uri, getRequestDetails) {
    httpRequest("HEAD", uri, getRequestDetails);
  };
  
  return {
    timeout: timeout,
    endPoint: endPoint,
    get: getRequest,
    post: postRequest,
    put: putRequest,
    patch: patchRequest,
    head: headRequest,
    delete: deleteRequest
  };
};

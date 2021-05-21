


// I was thinking how to implement this without using regex which I do
//  not like so much and found this way. If the user provides a valid link  
//  there would be no problem for the function to create a url object otherwise there would be an error
//In MDN docs it is stated that: "If the given base URL or the resulting URL are not valid URLs, the JavaScript TypeError exception is thrown."

//According to https://javascript.info/url
// The built-in URL class provides a convenient interface for creating and parsing URLs.

// There are no networking methods that require exactly a URL object, strings are good enough. 
// So technically we don’t have to use URL. But sometimes it can be really helpful.

function isValidUrl(url) {
  try {
    new URL(url);
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}

export { isValidUrl };

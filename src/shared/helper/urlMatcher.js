const urlMatcher = (url) => (url.toString().startsWith('http' || 'https') ? url : `https://${url}`);

export default urlMatcher;

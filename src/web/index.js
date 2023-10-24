module.exports.runhtml = async function (code) {
  return new Promise((resolve, reject) => {
    if (code.includes("<!DOCTYPE html>")) {
      const blob = new Blob([code], {
        type: 'text/html'
      });

      const fileurl = URL.createObjectURL(blob);
      readBlobAndLog(blob, (error, result) => {
        if (error) {
          reject(error); // Reject the promise in case of an error
        } else {
          resolve({
            pub_url: fileurl,
            url_console: result
          });
        }
      });
    } else {
      reject("Error: Your HTML doesn't have <!DOCTYPE html>");
    }
  });
};

function readBlobAndLog(blob, callback) {
  const reader = new FileReader();

  reader.onload = function (event) {
    const result = event.target.result;
    callback(null, result); // Pass the result to the callback function
  };

  reader.onerror = function (event) {
    const error = event.target.error;
    console.error("Error reading Blob:", error);
    callback(error, null); // Pass the error to the callback function
  };

  // Start reading the Blob
  reader.readAsText(blob);
}

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
  });
  
  pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
  });
  
  // Learn PostMan Scripts workspace
  // only work in Postman scripts
  
  const sourceCollectionId = '36436101-517ad50b-df6f-4c09-a002-f07677d9226d'; // Replace with your collection ID
  const apiKey = 'PMAK-668d55c800c93e00016d9965-718abb32c17b92b1a09aafeff97c0fd757';
  const requestName = 'Getting started with tests'; // Replace with the exact name of the request
  const targetCollectionId = '36436101-b7150afe-cdf4-4910-b7b7-787f688bf998'; // Replace with your target collection ID
  
  // Step 1: Get the details of the request you want to duplicate
  pm.sendRequest({
      url: `https://api.getpostman.com/collections/${sourceCollectionId}`,
      method: 'GET',
      header: {
          'X-Api-Key': apiKey
      }
  }, function (err, res) {
      if (err) {
          console.log('Error fetching collection:', err);
      } else {
          const collection = res.json().collection;
          const requestToDuplicate = findRequestInCollection(collection.item, requestName);
  
          if (requestToDuplicate) {
              console.log('Request found:', requestToDuplicate.name);
              createNewRequest(requestToDuplicate);
          } else {
              console.log('Request not found');
          }
      }
  });
  
  // Recursive function to search for the request by name
  function findRequestInCollection(items, requestName) {
      for (let item of items) {
          console.log('Checking item:', item.name);
  
          if (item.name === requestName && item.request) {
              return item; // Return immediately when the request is found
          } else if (item.item) {
              // If the item is a folder, search within its children
              const nestedRequest = findRequestInCollection(item.item, requestName);
              if (nestedRequest) {
                  return nestedRequest; // Return the found request from the nested folder
              }
          }
      }
      return null; // Return null if the request is not found in the current items
  }
  
  function createNewRequest(requestItem) {
      // Check if the request object is valid
      if (!requestItem || typeof requestItem !== 'object') {
          console.log('Invalid request object:', requestItem);
          return;
      }
  
      // Destructure and remove id and uid properties if they exist
      const { id, uid, ...requestDetails } = requestItem.request || {};
  
      // Create a new request item with the required structure
      const newItem = {
          name: `Copy of ${requestItem.name}`,  // New name for the duplicated request
          request: {
              ...requestDetails, // Spread the existing request object details without id and uid
              description: requestItem.request.description || '',
              url: requestItem.request.url,
              method: requestItem.request.method,
              header: requestItem.request.header || [],
              body: requestItem.request.body || {},
              auth: requestItem.request.auth || { type: 'noauth' }, // Ensure auth is correctly formatted
              preRequestScript: requestItem.request.preRequestScript || '',
              tests: requestItem.request.tests || ''
          },
          event: requestItem.event || [],        // Copy any events (like tests) if they exist
          protocolProfileBehavior: requestItem.protocolProfileBehavior || {}, // Copy any protocol behavior if it exists
          response: requestItem.response || []   // Copy any predefined responses if they exist
      };
  
      // Step 2: Get the target collection details
      pm.sendRequest({
          url: `https://api.getpostman.com/collections/${targetCollectionId}`,
          method: 'GET',
          header: {
              'X-Api-Key': apiKey
          }
      }, function (err, res) {
          if (err) {
              console.log('Error fetching target collection:', err);
          } else {
              const targetCollection = res.json().collection;
              targetCollection.item.push(newItem); // Add the new item to the target collection
  
              // Step 3: Update the target collection with the new request
              pm.sendRequest({
                  url: `https://api.getpostman.com/collections/${targetCollectionId}`,
                  method: 'PUT',
                  header: {
                      'X-Api-Key': apiKey,
                      'Content-Type': 'application/json'
                  },
                  body: {
                      mode: 'raw',
                      raw: JSON.stringify({ collection: targetCollection })
                  }
              }, function (err, res) {
                  if (err) {
                      console.log('Error updating target collection:', err);
                  } else {
                      console.log('Request duplicated successfully:', res.json());
                  }
              });
          }
      });
  }
  
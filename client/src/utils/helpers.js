export function idbPromise(storeName, method, object) {
  return new Promise((resolve, reject) => {
    //open db connection
    const request = window.indexedDB.open("what-is-the-recipe", 1)

    //variables to hold reference to the database transaction and object store
    let db, tx, store

    //if first time or version update run this method to create object store
    request.onupgradeneeded = function (e) {
      const db = request.result

      //create object store
      db.createObjectStore("recipes", { keyPath: "_id" })
      // db.createObjectStore("donation",{ keyPath:  "_id" })
      
    }

    //handle errors with connecting
    request.onerror = function (e) {
      console.log("error")
    }

    request.onsuccess = function (e) {
      //save refrence of the db to the db variable
      db = request.result

      //open a transaction do whatever we pass into 'storeName'(must match an object store name)
      tx = db.transaction(storeName, "readwrite")

      //save a refreence to that object store
      store = tx.objectStore(storeName)

      //anyerrors
      db.onerror = function (e) {
        console.log("error", e)
      }

      switch (method) {
        case "put":
          store.put(object)
          resolve(object)
          break

        case "get":
          const all = store.getAll()
          all.onsuccess = function () {
            resolve(all.result)
          }
          break
        case "delete":
          store.delete(object._id)
          break
        default:
          console.log("no valid method")
          break
      }

      //when the transaction is complete close connection
      tx.oncomplete = function () {
        db.close()
      }
    }
  })
}

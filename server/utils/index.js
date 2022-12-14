export const renameKey = (obj, oldName, newName) => {
    obj[newName] = obj[oldName];
    delete obj[oldName];
}

export default function getMergedArraysByProperty(array1, array2, property) {
    // Concatenate arrays
    const combinedArray = array1.concat(array2)
    
    // Filter unique objects based on the property
    const mergedArray = combinedArray.filter((obj, index, self) =>
        index === self.findIndex((t) => (
            t[property] === obj[property]
        ))
    )
    
    return mergedArray
}
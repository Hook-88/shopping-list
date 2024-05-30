export default function getFirstCharUpperCase(string) {
    
    if (string && string.length > 0) {
        
        return string[0].toUpperCase() + string.slice(1).toLowerCase()
    }

    return string
}
export function useThrowError () {
    if(Math.random() > 0.5) {
        throw new Error("An error occured. Please try again!")
    }

    return
}
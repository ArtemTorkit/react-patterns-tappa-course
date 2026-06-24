export function fetchUser(): Promise<{ id: number; name: string }> {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve({ id: 1, name: "Artem"})
        }, 3000)
    })
}
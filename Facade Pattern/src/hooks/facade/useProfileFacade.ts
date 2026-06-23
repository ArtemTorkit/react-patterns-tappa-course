export function useProfileFacade() {
    const userData = {
        name: 'Danya',
        age: 27,
        status: 'looking for friends',
    }

    const profileCompletionPercentage = 68

    const accountStatus = 'active'

    return {
        userData,
        profileCompletionPercentage,
        accountStatus,
    }
}
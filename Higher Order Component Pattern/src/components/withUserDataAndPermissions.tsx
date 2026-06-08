type UserData = {
  name: string
  email: string
  role: string
  permissions: string[]
}

type InjectedProps = {
  userData: UserData
  hasPermission: boolean
}

export const withUserDataAndPermissions = (WrappedComponent: React.ComponentType, allowedRoles: string[] = ['any'], allowedPermissions: string[] = []) => {
    return function WithUserDataAndPermissions(props: T) {
        // Simulate fetching user data and permissions
        const userData = {
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'admin',
            permissions: ['report'],
        };

        const isRoleAllowed = allowedRoles.includes(userData.role) || allowedRoles.includes('any');

        const isPermissionAllowed = allowedPermissions.length === 0 || allowedPermissions.some(permission => userData.permissions.includes(permission));

        const hasPermission = isRoleAllowed && isPermissionAllowed;

        if (!hasPermission) {
            return <div>You do not have the required permissions to view this content.</div>;
        }

        return <WrappedComponent {...props} userData={userData} hasPermission={hasPermission} />;
    }
}
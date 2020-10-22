const hasPermissions = (role, resource) => {
    if (role === 'admin' && ['write', 'edit', 'read', 'delete'].includes(resource)) {
        return true;
    }
    if (role === 'moderator' && ['write', 'edit', 'read'].includes(resource)) {
        return true;
    }
    if (role ==='anybody' && ['read'].includes(resource)) {
        return true;
    }
    return false;
}

//Using look up tables 
const PERMISSIONS ={
    admin: ['write', 'edit', 'read', 'delete'],
    moderator: ['write', 'edit', 'read'],
    anybody: ['read'],
};
    const getPermissionsFor = role => PERMISSIONS[role] || [];
    const hasPermissions = (role, resource) => getPermissionsFor(role). includes(resource);
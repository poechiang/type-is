export default (type) => (new RegExp(`^\\[\\s*object\\s+${type}\\s*\\]$`, 'i'));

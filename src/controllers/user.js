const join = (req, res) => res.send("join user");
const edit = (req, res) => res.send("edit user");
const remove = (req, res) => res.send("delete user");
const login = (req, res) => res.send("login user");
const logout = (req, res) => res.send("logout");
const see = (req, res) => res.send("see profile");

export { join, edit, remove, login, logout, see };

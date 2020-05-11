const users = [];
const rooms = [];
const addUser = (uid, name) => {
  const existingUser = users.find((user) => user.uid === uid);
  if (!uid) return { error: "Username and room are required." };
  if (existingUser) {
    console.log("not added");
    return { user: existingUser };
  }

  const user = { uid, name };
  users.push(user);
  return { user };
};
const createRoom = (user1, user2) => {
  const existingUser = rooms.find((user) =>
    user.find((i) => i === user1.uid || user === user2.uid)
  );

  if (!existingUser) {
    const roomData = [user1.uid, user2.uid];
    const sorted_data = roomData.sort();
    const roomID = sorted_data[0] + "" + sorted_data[1];
    const room = [roomID, user1.uid, user2.uid];
    rooms.push(room);
    removeUser(user1);
    removeUser(user2);
    return room;
  }
  console.log("not added");
  return false;
};
const removeUser = (user) => {
  const index = users.findIndex((i) => i.uid === user.uid);

  if (index !== -1) return users.splice(index, 1)[0];
};

const getUser = (myroom, id) =>
  users.find((user) => user.room === myroom && user.id === id);

const getUsersInRoom = () => users.filter((user) => user.room == room);
const getUsers = () => users;
module.exports = {
  addUser,
  removeUser,
  getUser,
  createRoom,
  getUsersInRoom,
  getUsers,
};

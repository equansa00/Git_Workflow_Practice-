function findUserByUsername(usersArray, username) {
  return usersArray.find(function(user) {
    return user.username === username;
  });
}

function removeUser(usersArray, username) {
  const index = usersArray.findIndex(function(user) {
    return user.username === username;
  });

  if (index !== -1) {
    return usersArray.splice(index, 1)[0];
  }
}

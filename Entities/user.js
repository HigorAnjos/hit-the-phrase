// eslint-disable-next-line no-unused-vars
class User {
  // eslint-disable-next-line max-len
  constructor(firstName, lastName, nickname, dateOfBirth, email, password, gender, avatar, emailVerified, gamesPlayed, createdAt, updatedAt) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickname = nickname;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
    this.password = password;
    this.gender = gender;
    this.avatar = avatar;
    this.emailVerified = emailVerified;
    this.gamesPlayed = gamesPlayed;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = User;

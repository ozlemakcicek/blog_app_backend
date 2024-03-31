import mongoose from "mongoose"
import bcrypt from "bcrypt";


const Schema = mongoose.Schema;
const userShema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
//'***
const Users = mongoose.model("Users", userShema);

const hash = (pass) => {
  return bcrypt.hashSync(pass, bcrypt.genSaltSync(10), (err, hash) => {
    if (err) throw err;
    pass = hash;
  });
};

userShema.pre("save", function (next) {
  if (this.password) {
    this.password = hash(this.password);
  }
  next();
});

// pass validation(karsilastirma)

userShema.methods.validatePassword = function (data) {
  return bcrypt.compare(data, this.password);
};


export default Users
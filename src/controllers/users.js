import { Users } from '../models';
import  { validateSignup } from '../utils/validation';

/**
 *
 * @description controller class with methods for user endpoints
 * @class UsersController
 */
class UsersController {
  /**
   * @description Signup method for new users
   * @param  {object} req body of the user's request
   * @param  {object} res  body of the response message
   * @param  {function} next next function to be called
   * @returns {object} The body of the response message
   */
  static signup(req, res, next) {
    const { isValid, error } = validateSignup(req.body);

    if (!isValid) {
      return res.status(400).json({ status: 'error', error });
    }

    const { firstname, lastname, email, password } = req.body;
    const newUser = { firstname, lastname, email, hash: password };

    Users.findOne({
      where: { email: newUser.email },
    }).then(userEmail => {
      if (!userEmail) {
        return res.status(409).json({
          status: 'error',
          message: 'Email already exists',
        });
      }
      return Users.create(newUser)
        .then(userDetails => {
          res.status(200).json({
            status: 'success',
            message: 'Signup was successful',
            user: userDetails,
          });
        });
    });
  }
}

export default UsersController;

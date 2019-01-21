import { expect } from 'chai';
import { validateEmail, validateSignup, validateLogin } from '../../src/utils/validation';

describe('User deatils validation', () => {
  describe('Valid email', () => {
    it('return true for a valid email', () => {
      const validEmail = 'dave@gmail.com';
      expect(validateEmail(validEmail)).to.deep.equal(true);
    });

    it('returns false if the email has no @', () => {
      const invalidEmail = 'davegmail.com';
      expect(validateEmail(invalidEmail)).to.deep.equal(false);
    });

    it('returns false if the email has no dot', () => {
      const invalidEmail = 'dave@gmailcom';
      expect(validateEmail(invalidEmail)).to.deep.equal(false);
    });

    it('returns false if no character comes after dot', () => {
      const invalidEmail = 'dave@gmail.';
      expect(validateEmail(invalidEmail)).to.deep.equal(false);
    });

    it('returns an error if one character comes after @', () => {
      const invalidEmail = 'dave@gmail.c';
      expect(validateEmail(invalidEmail)).to.deep.equal(false);
    });

    describe('Signup validation', () => {
      it('returns no error when all fields are valid', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: 'Canders',
          email: 'davecanders@gmail.com',
          password: 'karaoke909',
          confirmPassword: 'karaoke909'
        };
        const result = {
          error: {},
          isValid: true
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if firstname is missing', () => {
        const signupDetails = {
          firstname: '',
          lastname: 'Canders',
          email: 'davecanders@gmail.com',
          password: 'karaoke909',
          confirmPassword: 'karaoke909'
        };
        const result = {
          error: { firstname: 'Please enter your firstname' },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if lastname is missing', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: '',
          email: 'davecanders@gmail.com',
          password: 'karaoke909',
          confirmPassword: 'karaoke909'
        };
        const result = {
          error: { lastname: 'Please enter your lastname' },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if email is missing', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: 'Canders',
          email: '',
          password: 'karaoke909',
          confirmPassword: 'karaoke909'
        };
        const result = {
          error: { email: 'Please enter your email' },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if email is empty', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: 'Canders',
          email: ' ',
          password: 'karaoke909',
          confirmPassword: 'karaoke909'
        };
        const result = {
          error: { email: 'Please enter your email' },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if password is missing', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: 'Canders',
          email: 'davecander@gmail.com',
          password: '',
          confirmPassword: ''
        };
        const result = {
          error: {
            password: 'Please enter your password',
            confirmPassword: 'Please confirm your password'
          },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if password does not contain a number', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: 'Canders',
          email: 'davecander@gmail.com',
          password: 'karoke',
          confirmPassword: 'karoke'
        };
        const result = {
          error: {
            password: 'Password must contain a number'
          },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });

      it('returns an error if passwords do not match', () => {
        const signupDetails = {
          firstname: 'Dave',
          lastname: 'Canders',
          email: 'davecander@gmail.com',
          password: 'karoke5',
          confirmPassword: 'karok5'
        };
        const result = {
          error: {
            confirmPassword: 'Passwords do not match'
          },
          isValid: false
        };
        expect(JSON.stringify(validateSignup(signupDetails))).to.equal(
          JSON.stringify(result)
        );
      });
    });

    describe('Login validation', () => {
      it('returns an error if no email is provided', () => {
        const loginDetails = {
          email: '',
          password: 'karaoke'
        };
        const result = {
          error: { email: 'Please enter your email' },
          isValid: false
        }
        expect(JSON.stringify(validateLogin(loginDetails))).to.equal(JSON.stringify(result));
      });

      it('returns an error if email is invalid', () => {
        const loginDetails = {
          email: 'davecander.com',
          password: 'karaoke'
        };
        const result = {
          error: { email: 'Please enter a valid email' },
          isValid: false
        }
        expect(JSON.stringify(validateLogin(loginDetails))).to.equal(JSON.stringify(result));
      });

      it('returns an error if no password is provided', () => {
        const loginDetails = {
          email: 'davecanders@gmail.com',
          password: ''
        };
        const result = {
          error: { password: 'Please enter your password' },
          isValid: false
        }
        expect(JSON.stringify(validateLogin(loginDetails))).to.equal(JSON.stringify(result));
      });
    });
  });
});

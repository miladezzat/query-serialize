const chai = require('chai');

chai.use(require('chai-subset'));

const { expect } = require('chai');

const request = require('supertest');
const _ = require('lodash');
const app = require('./app');

const compareObject = (obj1 = {}, obj2 = {}) => expect(_.isEqual(obj1, obj2));

describe('Get /', () => {
  it('return success with no quey sent', () => {
    request(app)
      .get('/')
      .then((response) => {
        expect(200);
        expect(typeof response.body).to.be.equal('object');
      });
  });
  it('return success with quey sent', () => {
    request(app)
      .get('/?text=hello&limit=5&page=1&status=true')
      .then((response) => {
        expect(200);
        expect(response.body).to.be.an('object').and.have
          .keys(['$and']);
        const { body } = response;
        const existObj = {
          $and: {
            text: 'hello', limit: 5, page: 1, status: true,
          },
        };
        compareObject(body, existObj);
      });
  });
});

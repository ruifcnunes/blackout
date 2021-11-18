import get from 'lodash/get';
import join from 'proper-url-join';
import moxios from 'moxios';

export default {
  success: params => {
    moxios.stubRequest(
      join('/api/account/v1/users', params.userId, 'contacts'),
      {
        method: 'post',
        response: get(params, 'response'),
        status: 200,
      },
    );
  },
  failure: params => {
    moxios.stubRequest(
      join('/api/account/v1/users', params.userId, 'contacts'),
      {
        method: 'post',
        response: 'stub error',
        status: 404,
      },
    );
  },
};

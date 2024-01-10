import React, { FC, ReactElement } from 'react';
import { Formik, Form, Field } from 'formik';
import cn from 'classnames';

const validateEmail = (value: string) => {
  if (!value) {
    return 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    return 'Invalid email address';
  }
};

const validatePassword = (value: string) => {
  if (!value) {
    return 'Required';
  }
};

/**
 * Компонент LoginForm. Это форма <b>"Входа"</b> на сайт. Пока вы не проходили отправку данных на сервер, поэтому в
 * формах должна быть только валидация и вывод данных в консоль с одновременной очисткой формы.
 * Форма должна быть выполнена в сторибук и прямо там должна быть возможность изменять данные в форме,
 * также должна работать валидация формы для пустых и некорректных данных. Некорректным может быть ввод <i>email/пароля</i> в форме
 * <b>"Входа"</b>
 */
export const LoginForm: FC = (): ReactElement => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(formData, actions) => {
        console.log('Валидные данные из формы входа, выведены в консоль: ', formData);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <div className="page-register bg-white p-3">
          <h1 className="section-title h3">
            <span>Login</span>
          </h1>
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <Form>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label required">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className={cn('form-control', { 'invalid-input': errors.email && touched.email })}
                    placeholder="some@some.some"
                    validate={validateEmail}
                  />
                  <div className={cn('invalid-feedback', { show: errors.email && touched.email })}>
                    Please, privide a valide email
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label required">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    className={cn('form-control', { 'invalid-input': errors.password && touched.password })}
                    placeholder="Your password"
                    validate={validatePassword}
                  />
                  <div className={cn('invalid-feedback', { show: errors.password && touched.password })}>
                    Password is required
                  </div>
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn btn-warning">
                    Login
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

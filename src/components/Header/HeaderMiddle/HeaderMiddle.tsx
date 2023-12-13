import React, { FC, ReactElement } from 'react';
import './HeaderMiddle.scss';
import { Logo } from '../../Logo';
import { useTranslation } from 'react-i18next';

/**
 * Компонент средней части шапки сайта
 */
export const HeaderMiddle: FC = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className="header-middle bg-white py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <Logo title={t('logo.title')} />
          </div>

          <div className="col-sm-6 mt-2 mt-md-0">
            <form action="">
              <div className="input-group">
                <input
                  className="form-control"
                  type="text"
                  name="search"
                  placeholder={t('search.placeholder')}
                  aria-label="Searching..."
                  aria-describedby="button-search"
                />
                <button className="btn btn-outline-warning" id="button-search" onClick={(e) => e.preventDefault()}>
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

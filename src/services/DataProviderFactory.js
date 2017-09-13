// @flow
import config from '../config';
import type { IDataProvider } from '../Types/IDataProvider';
import DataProvider from './DataProvider';
import FakeDataProvider from './FakeDataProvider';

const dataProviderFactory = {
  getDataProvider : getDataProvider
};

function getDataProvider(): IDataProvider {
  if (config.useFakeData) {
    return FakeDataProvider;
  }

  return DataProvider;
}

export default dataProviderFactory;
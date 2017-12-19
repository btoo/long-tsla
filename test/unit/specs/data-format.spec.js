import { formatRawData } from '@/utils'
import TSLAsRawData from '@/router/TSLA/data/demo.json'

describe('TSLA\'s formatted dataset', () => {
  const TSLAsFormattedData = formatRawData(TSLAsRawData)

  it('should contain meta data', () => expect(TSLAsFormattedData).to.have.property('meta'))

  it('should list the time series data', () => expect(TSLAsFormattedData.timeSeries).to.be.an('array'))

  it('should have a reference to the raw data', () => expect(TSLAsFormattedData.raw).to.equal(TSLAsRawData))
})

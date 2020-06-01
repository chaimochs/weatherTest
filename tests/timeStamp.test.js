const { unixTimeStampToHumanDateFormat } = require('../script')

test("Converts UNIX time stamp to time string", () => {
  expect(unixTimeStampToHumanDateFormat(1590989197.149)).toBe("6/1/2020, 08:26:37")
})
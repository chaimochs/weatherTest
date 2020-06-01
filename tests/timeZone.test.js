const { makeTimeZoneString } = require('../script.ts')

test("Builds time zone string (e.g. UTC +3)", () => {
    expect(makeTimeZoneString(10800)).toBe("+3")
    expect(makeTimeZoneString(-18000)).toBe("-5")
    expect(makeTimeZoneString(0)).toBe("")
  });
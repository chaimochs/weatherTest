const { validateCityOrZipCode } = require('../script');

test("Checks validity of cities data", () => {
    expect(validateCityOrZipCode("Tokyo")).toBe("q")
    expect(validateCityOrZipCode("11230")).toBe("zip")
    expect(validateCityOrZipCode("qw2345")).toBe(null)
})



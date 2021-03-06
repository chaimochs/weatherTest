var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var cities = [
    "Tokyo",
    "10001",
    "Moscow",
    "60607",
    "São Paulo",
    "Cairo",
    "Mumbai",
];
var validateCityOrZipCode = function (value) {
    var cityRegex = /^[a-zA-Z\u0080-\u024F\s\/\-\)\(\`\.\"\']+$/;
    var zipRegex = /^[0-9]{5}/;
    if (cityRegex.test(value))
        return "q";
    else if (zipRegex.test(value))
        return "zip";
    else
        return null;
};
var unixTimeStampToHumanDateFormat = function (unixTimeStamp) {
    var milliseconds = unixTimeStamp * 1000;
    var dateObject = new Date(milliseconds);
    var humanDateFormat = dateObject.toLocaleString('en-US', { hour12: false });
    return humanDateFormat;
};
var makeTimeZoneString = function (zone) {
    if (zone / 3600 > 0)
        return "+" + zone / 3600;
    if (zone / 3600 < 0)
        return String(zone / 3600);
    if (zone / 3600 === 0)
        return "";
};
var getCurrentWeather = function (location) { return __awaiter(_this, void 0, void 0, function () {
    var BASE_URL, API_KEY, locationQueryString, url, weatherData, data, dateTime, timeZoneString, formattedData, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                BASE_URL = "http://api.openweathermap.org/data/2.5/weather?";
                API_KEY = "b91d0780da24d565dc33ac2ab8678d7c";
                locationQueryString = validateCityOrZipCode(location);
                if (!locationQueryString)
                    return [2 /*return*/, null];
                url = "" + BASE_URL + locationQueryString + "=" + location + "&units=metric&appid=" + API_KEY;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, fetch(url)];
            case 2:
                weatherData = _a.sent();
                return [4 /*yield*/, weatherData.json()];
            case 3:
                data = _a.sent();
                dateTime = unixTimeStampToHumanDateFormat(data.dt - data.timezone);
                timeZoneString = makeTimeZoneString(data.timezone);
                formattedData = "Weather for " + data.name + ", " + data.sys.country + "\n \n            at " + dateTime + " local time (UTC" + timeZoneString + "\n\n            The weather is " + data.weather[0].main + "\n            The temperature is currently " + Math.round(data.main.temp) + "\u00B0C\n\n            Which feels like " + Math.round(data.main.feels_like) + "\u00B0C\n\n            The high today will be " + Math.round(data.main.temp_max) + "\u00B0C with a low of " + Math.round(data.main.temp_min) + "\u00B0C\n\n            The humidity is " + data.main.humidity + "%";
                return [2 /*return*/, formattedData];
            case 4:
                err_1 = _a.sent();
                alert(err_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
for (var i = 0; i < cities.length; i++) {
    getCurrentWeather(cities[i])
        .then(function (res) {
        console.log(res);
    });
}
module.exports = { validateCityOrZipCode: validateCityOrZipCode,
    unixTimeStampToHumanDateFormat: unixTimeStampToHumanDateFormat,
    makeTimeZoneString: makeTimeZoneString };

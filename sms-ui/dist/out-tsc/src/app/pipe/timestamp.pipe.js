import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var TimestampPipe = /** @class */ (function () {
    function TimestampPipe() {
    }
    TimestampPipe.prototype.transform = function (value) {
        return new Date(value);
    };
    TimestampPipe = tslib_1.__decorate([
        Pipe({
            name: 'showTimestamp'
        })
    ], TimestampPipe);
    return TimestampPipe;
}());
export { TimestampPipe };
//# sourceMappingURL=timestamp.pipe.js.map
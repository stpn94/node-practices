/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var Paging = /** @class */ (function () {
    function Paging() {
        this.blockStartNum = 0;
        this.blockLastNum = 0;
        this.lastPageNum = 0;
    }
    Paging.getPagecount = function () {
        return Paging.pageCount;
    };
    Paging.prototype.getBlockStartNum = function () {
        return this.blockStartNum;
    };
    Paging.prototype.setBlockStartNum = function (blockStartNum) {
        this.blockStartNum = blockStartNum;
    };
    Paging.prototype.getBlockLastNum = function () {
        return this.blockLastNum;
    };
    Paging.prototype.setBlockLastNum = function (blockLastNum) {
        this.blockLastNum = blockLastNum;
    };
    Paging.prototype.getLastPageNum = function () {
        return this.lastPageNum;
    };
    Paging.prototype.setLastPageNum = function (lastPageNum) {
        this.lastPageNum = lastPageNum;
    };
    Paging.prototype.makeBlock = function (curPage) {
        var blockNum = 0;
        blockNum = (Math.floor(((curPage - 1) / Paging.pageCount | 0)) | 0);
        this.blockStartNum = (Paging.pageCount * blockNum) + 1;
        this.blockLastNum = this.blockStartNum + (Paging.pageCount - 1);
    };
    Paging.prototype.makeLastPageNum$double = function (total) {
        if (total % Paging.pageCount === 0) {
            this.lastPageNum = (Math.floor(total / Paging.pageCount) | 0);
        }
        else {
            this.lastPageNum = (Math.floor(total / Paging.pageCount) | 0) + 1;
        }
    };
    Paging.prototype.makeLastPageNum$double$java_lang_String = function (total, kwd) {
        if (total % Paging.pageCount === 0) {
            this.lastPageNum = (Math.floor(total / Paging.pageCount) | 0);
        }
        else {
            this.lastPageNum = (Math.floor(total / Paging.pageCount) | 0) + 1;
        }
    };
    Paging.prototype.makeLastPageNum = function (total, kwd) {
        if (((typeof total === 'number') || total === null) && ((typeof kwd === 'string') || kwd === null)) {
            return this.makeLastPageNum$double$java_lang_String(total, kwd);
        }
        else if (((typeof total === 'number') || total === null) && kwd === undefined) {
            return this.makeLastPageNum$double(total);
        }
        else
            throw new Error('invalid overload');
    };
    Paging.pageCount = 5;
    return Paging;
}());
Paging["__class"] = "Paging";
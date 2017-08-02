var stockpop;
(function (stockpop) {
    var Services;
    (function (Services) {
        var FileService = (function () {
            function FileService($resource) {
                this.$resource = $resource;
                this.FileResource = $resource('/api/files');
            }
            FileService.prototype.list = function () {
                return this.FileResource.query();
            };
            FileService.prototype.saveFile = function (file) {
                this.FileResource.save(file);
            };
            return FileService;
        }());
        Services.FileService = FileService;
        angular.module('stockpop').service('fileService', FileService);
    })(Services = stockpop.Services || (stockpop.Services = {}));
})(stockpop || (stockpop = {}));

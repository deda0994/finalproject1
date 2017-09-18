var stockpop_3;
(function (stockpop_3) {
    var Services;
    (function (Services) {
        var FileService = (function () {
            function FileService($resource) {
                this.$resource = $resource;
                this.FileResource = $resource('/api/files/:id');
            }
            FileService.prototype.saveFile = function (file) {
                return this.FileResource.save(file);
            };
            FileService.prototype.getFiles = function () {
                return this.FileResource.query();
            };
            FileService.prototype.deleteFile = function (id) {
                return this.FileResource.delete({ id: id }).$promise;
            };
            return FileService;
        }());
        Services.FileService = FileService;
        angular.module('stockpop_3').service('FileService', FileService);
    })(Services = stockpop_3.Services || (stockpop_3.Services = {}));
})(stockpop_3 || (stockpop_3 = {}));

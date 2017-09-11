var stockpop_3;
(function (stockpop_3) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(filepickerService, $scope) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            HomeController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*'
                }, this.fileUploaded.bind(this));
            };
            HomeController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.productToSave.url = this.file.url;
                this.$scope.$apply();
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AddFileController = (function () {
            function AddFileController(fileService) {
                this.fileService = fileService;
            }
            AddFileController.prototype.addFile = function () {
                this.fileService.saveFile(this.file);
            };
            return AddFileController;
        }());
        Controllers.AddFileController = AddFileController;
        var EditFileController = (function () {
            function EditFileController() {
            }
            return EditFileController;
        }());
        Controllers.EditFileController = EditFileController;
        angular.module('stockpop-3').controller('HomeController', HomeController);
    })(Controllers = stockpop_3.Controllers || (stockpop_3.Controllers = {}));
})(stockpop_3 || (stockpop_3 = {}));

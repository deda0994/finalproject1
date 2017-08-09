"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var stockpop;
(function (stockpop) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(fileService) {
                this.fileService = fileService;
                this.file = fileService.list();
            }
            HomeController.prototype.deleteFile = function (id) {
                this.fileService.removeFile(id);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
        var ContactUsController = (function () {
            function ContactUsController() {
            }
            return ContactUsController;
        }());
        Controllers.ContactUsController = ContactUsController;
        var AddFileController = (function () {
            function AddFileController(filepickerService, $scope) {
                this.filepickerService = filepickerService;
                this.$scope = $scope;
            }
            AddFileController.prototype.pickFile = function () {
                this.filepickerService.pick({ mimetype: 'image/*' }, this.fileUploaded.bind(this));
            };
            AddFileController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
            };
            return AddFileController;
        }());
        Controllers.AddFileController = AddFileController;
    })(Controllers = stockpop.Controllers || (stockpop.Controllers = {}));
})(stockpop || (stockpop = {}));
var EditFileController = (function () {
    function EditFileController(fileService, $stateParams, movieService) {
        this.fileService = fileService;
        this.$stateParams = $stateParams;
        this.movieService = movieService;
        this.id = $stateParams['id'];
    }
    EditFileController.prototype.editFile = function () {
        this.file._id = this.id;
        this.fileService.SaveFile(this.file);
    };
    return EditFileController;
}());
exports.EditFileController = EditFileController;

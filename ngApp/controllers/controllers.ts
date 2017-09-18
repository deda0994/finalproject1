namespace stockpop_3.Controllers {

    export class HomeController {
      public file;
      public productToSave;

      public pickFile (){
        this.filepickerService.pick({
          mimetype: 'image/*'
        }, this.fileUploaded.bind(this));
      }

      public fileUploaded(file){
        this.file = file;
        this.productToSave.url = this.file.url;
        this.$scope.$apply();
      }

      constructor(private filepickerService, private $scope: ng.IScope){

      }
   }
    export class AddFileController {
      public file

      public addFile() {
        this.fileService.saveFile(this.file);
      }
      constructor(
        private fileService
      ) {

      }
    }

    export class EditFileController {
    }

 angular.module('stockpop_3').controller('HomeController', HomeController);

}

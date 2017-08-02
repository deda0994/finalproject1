namespace stockpop.Controllers {

  export class HomeController {
    public file
    public deleteFile(id){
      this.fileService.removeFile(id);
    }
    constructor(fileService:stockpop.Services.FileService) {
      this.file = fileService.list();

    }
  }
  export class AboutController {

  }
  export class ContactUsController {

  }
  export class AddFileController {
    public file;

  public pickFile() {
    this.filepickerService.pick(
      { mimetype: 'image/*' },
      this.fileUploaded.bind(this)
    );
  }

  public fileUploaded(file) {
    // save file url to database
    this.file = file;
    this.$scope.$apply(); // force page to update
  }

  constructor(private filepickerService, private $scope: ng.IScope) { }
      }
    }

      export class EditFileController {
        public File
        public Id
        public editFile(){
          this.file._id = this.id;
          this.fileService.SaveFile(this.file);
        }
        constructor(
          public $stateParams,
          private movieService
        ) {
          this.id =$stateParams['id'];
        }
        }

      }

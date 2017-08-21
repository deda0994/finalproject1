namespace stockpop.Services {
export class FileService {
 public FileResource

 public list(){
   return this.FileResource.query()
 }
  public saveFile(file) {
    this.FileResource.save(file);
  }
  public constructor(
  public $resource
  ) {
    this.FileResource = $resource('/files');
  }
}

  angular.module('stockpop').service('fileService', FileService);
    }

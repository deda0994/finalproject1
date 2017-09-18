namespace stockpop_3.Services {
  export class FileService {
    public FileResource;


    public saveFile(file) {
      return this.FileResource.save(file);
    }
    public getFiles() {
     return this.FileResource.query();
    }

   public deleteFile(id) {
     return this.FileResource.delete({id: id}).$promise;
    }

   constructor(
     public $resource
   ) {
     this.FileResource = $resource('/api/files/:id');
    }
  }

  angular.module('stockpop_3').service('FileService',FileService);
    }

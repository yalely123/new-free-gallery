import { Injectable } from "@angular/core";
import { AngularFireDatabase, AngularFireList } from "@angular/fire/database";
import { Image } from "./image";
//import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ImageService {
  imageDetailList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) {}

  getImageDetailList() {
    this.imageDetailList = this.firebase.list("imageDetails");
    const ref = this.firebase.database;
  }

  insertImageDetails(imageDetails) {
    //this.imageDetailList.push(imageDetails);

    const ref = this.imageDetailList.push(imageDetails);
    ref.update({
      date: new Date(),
      id: ref.key
    });

    // ref.then(re => {
    //   const updateID = {
    //     id: newRef.id
    //   };
    //   newRef.update(updateID);
    // });
    return ref;
  }

  // deleteImage(imageDetails){
  //   this.imageDetailList
  //   .remove(imageDetails.id)
  //   return this.
  // }

  deleteImage(imageDetails) {
    //.collection("tweet")
    console.log(imageDetails.id);
    this.imageDetailList.remove(imageDetails.id);

    return this.firebase;
  }
}

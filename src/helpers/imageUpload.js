import { storage, db } from "../firebase";
import { ref, listAll, uploadString, getDownloadURL } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";

/*
type ImgInfo{
  title:String,
  description:String,
  author:String,
  imgName:String
}
*/

// export const orm = {
// create orm
// }

export const uploadImageData = async (imgData) => {
  console.log("imgData", imgData);
  try {
    const docRef = await addDoc(collection(db, "img-info"), {
      title: imgData.title,
      description: imgData.description,
      author: imgData.author,
      imgName: imgData.imageName,
      likes: 0,
      laugh: 0,
      love: 0,
      timestamp: new Date(),
    });
    console.log("Document written with ID: ", docRef.id, docRef.data());
  } catch (e) {
    console.log("ERROR ON Firebase/firestore", e);
  }
};

export const uploadToFirebase = async (image) => {
  try {
    // Extract base64 data from the data URL
    const base64Data = image.src.split(",")[1];

    // Create a storage reference
    const storageRef = ref(storage, `images/${image.title}.png`);

    // Upload base64 data
    let uploadResponse = await uploadString(storageRef, base64Data, "base64", {
      contentType: "image/png",
    });
    // console.log(uploadResponse, uploadResponse.metadata.fullPath);
    // await uploadImageData(image);
    // Get the download URL
    // const url = await getDownloadURL(storageRef);
    // setDownloadURL(url);

    // console.log("Upload successful! Download URL:", url);
    // image.url = url;
    image.imageName = "uploadResponse.metadata.fullPath";
    await uploadImageData(image);
    return "url";
  } catch (error) {
    console.error("Upload failed:", error);
  }
};

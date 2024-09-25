import { db } from "../firebase";
import { updateDoc, collection, doc, addDoc } from "firebase/firestore";

export const orm = {
  async addLike(id, prev) {
    console.log("addLike", id);
    const docRef = doc(db, "img-info", id);

    // Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
      likes: prev + 1,
    });
  },

  async addLaugh(id, prev) {
    console.log("addLaugh", id);
    const docRef = doc(db, "img-info", id);

    // Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
      laugh: prev + 1,
    });
  },

  async addLove(id, prev) {
    console.log("addLaugh", id);
    const docRef = doc(db, "img-info", id);

    // Update the timestamp field with the value from the server
    const updateTimestamp = await updateDoc(docRef, {
      love: prev + 1,
    });
  },

  async addComment(comment, id, title) {
    console.log("addComent fired--", comment, id, title);
    try {
      await addDoc(collection(db, "comments"), {
        ...comment,
        imageId: id,
        imageTitle: title,
      });
      console.log("comment added successfully!");
      return true;
    } catch (e) {
      console.log("error", e);
      return false;
    }
  },
};

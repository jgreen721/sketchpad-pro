import {useContext,createContext,useEffect,useState} from "react"
import {listAll,ref,getDownloadURL} from "firebase/storage"
import { onSnapshot, collection } from "@firebase/firestore";
import {storage,db} from "../firebase.js"
import {orm} from "../helpers/orm"



const GalleryContext = createContext();
export const useGalleryContext = ()=>useContext(GalleryContext);


export const GalleryProvider=({children})=>{

    const [images,setImages] = useState([])
    const [galleryItems,setGalleryItems] = useState([])
    const [comments,setComments] = useState([])
    const [isEmpty,setIsEmpty] = useState(false);



     useEffect(()=>{
       const populateImages = async()=>{
         try{
         const listRef = ref(storage, 'images');
          const response = await listAll(listRef)
          // console.log(response)
          let temp_images = [];
          response.items.forEach(async (itemRef)=>{
          let url = await getDownloadURL(itemRef)
          let imagePath = itemRef._location.path_  // to identify documen for DELETION
          let imageName = imagePath.split("/")[1]  // to join data with firebase nosql -- PrimaryKey 
              imageName = imageName.split(".")[0]
          
          
          // console.log("imageName",imageName);
          // console.log("itemRef",itemRef)
          temp_images.push(({url,imageName,imagePath}));
          if(temp_images.length == response.items.length){
            setImages(temp_images);
          }
          if(temp_images.length == 0){
            setIsEmpty(true);
          }
          })

       }
       catch(e){
         console.log("Error")
       }
      }
      populateImages()
      },[])

      useEffect(()=>{
    
        if(images.length){
          console.log("fetching from firebase")
        const unsubscribe = onSnapshot(collection(db, 'img-info'), (snapshot) => {
          let joinedData = []
          snapshot.forEach(doc=>{
            let joinedItem = {id:doc.id,...doc.data()}
            let imageItem = images.filter(image=>image.imageName == joinedItem.title)[0];
            joinedItem.url = imageItem.url;
            joinedItem.imagePath = imageItem.imagePath
            // console.log(joinedItem);
            joinedData.push(joinedItem)
          })
          // console.log(galleryImages);
          setGalleryItems(joinedData);
          setImages([]);
        })

      }
      },[images])

      useEffect(()=>{
        if(galleryItems.length){
          console.log('fetchComments!')
          onSnapshot(collection(db,"comments"),snapshot=>{
            let temp_comments = [];
            snapshot.forEach(comment=>{
              // console.log(comment.id,comment.data());
              temp_comments.push({id:comment.id,...comment.data()})
                })
            setComments(temp_comments)
          })
        }
      },[galleryItems]);


      const handleAction = async(galleryItem,action)=>{
        console.log("Action",action,"Id",galleryItem.id);
        if(action == "like"){
          await orm.addLike(galleryItem.id,galleryItem.likes)
        }
        if(action == "laugh"){
          await orm.addLaugh(galleryItem.id,galleryItem.laugh);
        }
        if(action == "love"){
          await orm.addLove(galleryItem.id,galleryItem.love);

        }

        if(action == "comment"){
          // toggle comment display, 
          console.log("comment-action under construction...");
        }
      }


      const addComment =async(comment,galleryItem)=>{
        console.log("Comment",comment,galleryItem);
        if(orm.addComment(comment,galleryItem.id,galleryItem.title)){
          console.log("comment added successfully!");
          return true;
        }
        else{
          console.log("Error in galleryContext/addComment");
          return false;
        }
      }
    

    const values={
               galleryItems,
               comments,
               handleAction,
               addComment,
               isEmpty,
            }

    return <GalleryContext.Provider value={values}>
                {children}
            </GalleryContext.Provider>

    
}
import {useContext,createContext,useEffect,useState} from "react"
import { rgbToHex } from "../helpers/rgbtohex";



const AppContext = createContext();
export const useAppContext = ()=>useContext(AppContext);


export const AppProvider=({children})=>{
    let savedOrInitialRowCount = JSON.parse(localStorage.getItem("row-count")) || 20;
    let savedOrInitialBgColor = JSON.parse(localStorage.getItem("bg-color")) || "rgb(55,55,155)"
    let savedOrInitialGrid = JSON.parse(localStorage.getItem("users-grid")) || new Array(savedOrInitialRowCount * savedOrInitialRowCount).fill(0).map((_,idx)=>({id:idx+1,color:null,isColored:false}))
    // console.log("RowCount: " + savedOrInitialRowCount)
    // console.log("------------------------------")
    // console.log("Grid: " + savedOrInitialGrid.length)
    if(innerWidth < 650 && savedOrInitialRowCount > 30){
        console.log("ohh sorry, but your saved art is too big for this small screen grid to properly handle. We'll keep it saved for you and let you work on something else!");
        savedOrInitialRowCount = 20;
        savedOrInitialGrid = new Array(savedOrInitialRowCount * savedOrInitialRowCount).fill(0).map((_,idx)=>({id:idx+1,color:null,isColored:false}))
    }
    const [rows,setRows] = useState(savedOrInitialRowCount);
    const [tempRows,setTempRows] = useState(savedOrInitialRowCount)  //used as state-reference as 2 step system of resize/user-confirm: user-confirm will update if necessary
    const [gridTiles,setGridTiles] = useState(savedOrInitialGrid)
    const [active,setActive] = useState(false)  
    const [action,setAction] = useState("draw")
    const [color,setColor] = useState("rgb(245,250,255)");
    const [bgColor,setBgColor] = useState(savedOrInitialBgColor)
    const [showConfirm,setShowConfirm] = useState(false);
    const [showCanvas,setShowCanvas] = useState(false);
    const [_refreshGrid,set__RefreshGrid] = useState(false);  



     useEffect(()=>{
         //prevent a maligned saved grid when dimensons > 30
        if(innerWidth < 650 && savedOrInitialRowCount > 30){
            console.log("ohh sorry, but your saved art is too big for this small screen grid to properly handle. We'll keep it saved for you and let you work on something else!");
            savedOrInitialRowCount = 20;
            savedOrInitialGrid = new Array(savedOrInitialRowCount * savedOrInitialRowCount).fill(0).map((_,idx)=>({id:idx+1,color:null,isColored:false}))
        }
     })
    

    useEffect(()=>{
        // console.log('resetttign grid!!')
            if(_refreshGrid){
                setGridTiles(new Array(rows * rows).fill(0).map((_,idx)=>({id:idx+1,color:null,isColored:false})))
                set__RefreshGrid(false);
            }
    },[_refreshGrid])



        const handleBrushAction=(celId,wasClicked)=>{

            if(active || wasClicked){
            if(action == "draw")setGridTiles(gridTiles=>gridTiles.map(g=>g.id == celId ? ({...g,isColored:true,color: color}) : g))
            if(action == "erase")setGridTiles(gridTiles=>gridTiles.map(g=>g.id == celId ? ({...g,isColored:false,color:null ? null : color}) : g))
            if(action == "rainbow"){
                let red = Math.random() * 255 | 0
                let green = Math.random() * 255 | 0
                let blue = Math.random() * 255 | 0
                let randomColor = rgbToHex(red,green,blue);
                console.log("random",randomColor)
                setColor(randomColor);
                setGridTiles(gridTiles=>gridTiles.map(g=>g.id == celId ? ({...g,isColored:!g.isColored,color:g.isColored ? null : randomColor}) : g))
                }
            if(action == "grab"){
                    let targetCel = gridTiles.filter(tile=>tile.id == celId)[0]
                    console.log("targetCel",targetCel);
                    let targetColor = targetCel.color ? targetCel.color : bgColor
                    console.log("targetColor",targetColor);
                    let colorSplit = targetColor.split("(")[1];
                    let red = colorSplit.split(",")[0];
                    let green = colorSplit.split(",")[1];
                    let blue = colorSplit.split(",")[2];
                    blue = blue.split(")")[0];
            
                    console.log("Red",red,"green",green,"blue",blue,);
                    // console.log("ColorSplit",colorSplit)
                    let newColor = rgbToHex(parseInt(red),parseInt(green),parseInt(blue));
                    console.log(newColor)



                    setColor(newColor);
            }
           
            }
        }

   


        const toggleBrush=(brushState)=>{
            setActive(brushState)
        }

        const handleBtnAction=(action,section)=>{
            console.log("Action",action,section);
            if(section == "top"){
            setAction(action);
            return;
            }

            if(action == "clear"){
                console.log("clear grid!")
                setShowConfirm(true);
            }
            if(action == "save"){
                console.log("save to local storage!")
                localStorage.setItem("users-grid",JSON.stringify(gridTiles))
                localStorage.setItem("row-count",JSON.stringify(rows))
                localStorage.setItem("bg-color",JSON.stringify(bgColor))
            }
            if(action == "picture"){
                setShowCanvas(true);

            }
        }

      

        const handleColorSelect=(target,newColor)=>{
            if(target == "brush"){
                console.log("setting brush-color to " + newColor)
                setColor(newColor);

            }
            else{
                console.log('set background!')
                setBgColor(newColor);
            }
        }

           
        const handleGridSize=(newSize)=>{
            console.log("newSize",newSize);
            setShowConfirm(true);
            setTempRows(newSize);
            // setRows(newSize);
        }

        const handleToasterReply=(toasterReply,clearStorage)=>{
            // console.log("toasterReply",toasterReply);
            if(toasterReply == "confirm"){
                console.log("clearing grid for resize or reset!")
                set__RefreshGrid(true);
                setRows(tempRows)
                if(clearStorage){
                    console.log("clear storage")
                    localStorage.clear("users-grid")
                    localStorage.clear("row-count");
                    localStorage.clear("bg-color");
                }
            }
    
            setShowConfirm(false);
        }

      

            const values={
                handleBrushAction,
                toggleBrush,
                handleColorSelect,
                handleGridSize,
                handleToasterReply,
                handleBtnAction,
                setShowCanvas,
                gridTiles,
                rows,
                active,
                color,
                bgColor,
                showConfirm,
                showCanvas,
            }

    return <AppContext.Provider value={values}>
                {children}
            </AppContext.Provider>

    
}
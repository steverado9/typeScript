type Draggable = {
    drag: () => void
}

type Resizeable = {
    resize: () => void
}

type UIWidget = Draggable & Resizeable; //this is an intersection type

// let textBox: UIWidget = {
//     drag: () => {}
//     resize: () => {}
// }
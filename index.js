//code your solution here

const superbowlWin = (record) => {
    const win = record.find((record) => {
        return record.result === 'W'
    })
    if(win){
        return win.year
    }else{
        return undefined
    }
}
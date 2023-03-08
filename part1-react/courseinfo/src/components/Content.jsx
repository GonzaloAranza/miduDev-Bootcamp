import Part from './Part'


const Content = (props) => {

    const part1 = [props.content[0],props.content[1]]
    const part2 = [props.content[2], props.content[3]]
    const part3 = [props.content[4], props.content[5]]
    return(

    <div>
        <Part content = {part1}/>
        <Part content = {part2} />
        <Part content = {part3} />
    </div>
 
    )
}


export default Content
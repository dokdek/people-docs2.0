
export default function SearchBar(props){
    return(
        <div>
        <h2>{props.header}</h2>
        <input
              className="border-2 border-gray-300 bg-white h-10 w-3/4 max-w-md px-5 pr-16 rounded-lg text-sm focus:outline-none"
              type="search"
              name={props.name}
              placeholder={props.placeholder}
        ></input>
        </div>
    )
}
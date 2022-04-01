import React, {useState} from 'react'

const SearchInput = ({onSearchSubmit}) => {

    const [search,setSearch] = useState({entry :""})


/* 
    function handleChange(e) {
       
            e.preventDefault()
            console.log(e.target.value) 
           setSearch({entry : e.target.value}); 
    
        
    }  */

    const handleChange = (e) => {
        console.log(search.entry)
        setSearch({entry:e.target.value})
    }

    function handleSubmit(e){ 
        e.preventDefault()
        console.log(search.entry)
        onSearchSubmit(search.entry)


    }

    

  return (
    <div className="ui segment">
        <form onSubmit={handleSubmit} className="ui form">
            <div className="field">
            <div className="ui category search">
                <div className="ui icon input">
                    <input className="prompt" type="text" placeholder="Search animals..."  onChange={handleChange}
                    value={search.entry}
                    />
                    <i className="search icon"></i>
                    
                </div>
                <div className="results"></div>
            </div>
            </div>
            <p>{search.entry}</p>
        
           
            <button className="ui button" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default SearchInput
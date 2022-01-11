function SearchForm(props) {

    const {setSearchItem} = props

    return (

        <div>

            <h2>Search for Posts</h2>

            <input
                type = 'text'
                name = 'search'
                placeholder ='enter your search here'
                onChange = {e => {
                    e.preventDefault
                    const title = e.target.value
                    setSearchItem(title)
                }}
            />

      </div>

    )
}

export default SearchForm
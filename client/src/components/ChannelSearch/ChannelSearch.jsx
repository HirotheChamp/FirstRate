import React, {useState, useEffect} from 'react'
import { useChatContext } from 'stream-chat-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import "./ChannelSearch.css"



const ChannelSearch = () => {
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(false);

    const getChannels = async (text) => {
        try {
            // TODO : Fetch Channels
        } catch (error) {
            setQuery('')
        }
    }
    
    const onSearch = (event) => {
        event.preventDefault();

        setLoading(true);
        setQuery(event.target.value)
        getChannels(event.target.value);
    }

  return (
    <div className='search-container'>
     <div className="search-wrapper">
        <div className="search-icon">
<FontAwesomeIcon icon={faMagnifyingGlass}/>
     </div>
     <input 
     className="search-input" 
     placeholder='search' 
     type="text" 
     value={query}
     onChange={onSearch}
     />

     
    </div>
    </div>
  )
}

export default ChannelSearch
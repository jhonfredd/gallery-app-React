import Card from './Card'
import Loadings from './Loadings';
import { useFetchImages } from '../hooks/useFetchImages';


const Cards = ({ isDarkTheme }) => {
    const [images,loading,handleSubmit] = useFetchImages();

    return (
        <div className='text-center'>
            <form onSubmit={handleSubmit}>
                <div className='my-3 form-group'>
                    {""}<label className="w-75" ><input placeholder='Search...' className="w-75 form-control mx-1" type="text" name="inputText" ></input> </label>{""}
                    <button className="btn btn-warning " type="submit" >
                        <span className="material-symbols-outlined">Search</span>
                    </button>
                </div>
            </form>
            <hr />

            {loading && <Loadings isDarkTheme={isDarkTheme}/>}

            <div className='row'>
                {images.map((img) => {
                    return <div key={img.id} className="col">
                        <Card img={img.urls.regular} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default Cards
